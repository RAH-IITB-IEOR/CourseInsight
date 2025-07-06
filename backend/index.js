const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const { connectToMongo, getDB } = require("./utils/db");

app.use(express.json());
app.use(cors());

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Authentication
const verifyToken = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];
	if (!token) return res.status(401).json({ error: "Unauthorized" });

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(403).json({ error: "Invalid token" });
	}
};
const isAdmin = (req, res, next) => {
	if (req.user?.role === "admin") {
		next();
	} else {
		res.status(403).json({ error: "Admins only" });
	}
};

//Sign-up
app.post("/auth/signup", async (req, res) => {
	try {
		const { username, email, password, role } = req.body;

		if (!username || !email || !password)
			return res.status(400).json({ error: "Missing fields" });

		const existingUser = await db.collection("User").findOne({ email });
		if (existingUser)
			return res.status(409).json({ error: "Email already registered" });

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = {
			username,
			email,
			password: hashedPassword,
			role: role || "user", // default role is 'user'
		};

		await db.collection("User").insertOne(user);

		res.status(201).json({ message: "Signup successful" });
	} catch (error) {
		console.error("Signup error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

//Login
app.post("/auth/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await db.collection("User").findOne({ email });

		if (!user) return res.status(404).json({ error: "User not found" });

		const match = await bcrypt.compare(password, user.password);

		if (!match) return res.status(401).json({ error: "Invalid password" });

		// Generate JWT
		const token = jwt.sign(
			{ userID: user._id, email: user.email, role: user.role },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

		res.json({ token });
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

//Fetch User Details
app.get("/User/me", verifyToken, async (req, res) => {
	try {
		const user = await db
			.collection("User")
			.findOne(
				{ _id: new ObjectId(req.user.userID) },
				{ projection: { password: 0 } }
			);

		if (!user) return res.status(404).json({ error: "User not found" });

		res.json({
			username: user.username,
			email: user.email,
			role: user.role,
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Add new course (Admin only)
app.post("/course/new", verifyToken, isAdmin, async (req, res) => {
	try {
		const { courseID, courseName, semester, instructorID } = req.body;

		if (!courseID || !courseName || !semester) {
			return res.status(400).json({ error: "Missing required fields" });
		}

		await db.collection("Course").insertOne({
			courseID,
			courseName,
			semester,
			instructorID: instructorID || null,
		});

		res.status(201).json({ message: "Course added successfully" });
	} catch (error) {
		console.error("Error adding course:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Delete course (Admin only)
app.delete("/course/:id", verifyToken, isAdmin, async (req, res) => {
	try {
		const courseID = req.params.id;

		const result = await db.collection("Course").deleteOne({ courseID });

		if (result.deletedCount === 0) {
			return res.status(404).json({ error: "Course not found" });
		}

		res.json({ message: "Course deleted successfully" });
	} catch (error) {
		console.error("Error deleting course:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

//Route to get all course for home page
app.get("/course/all", async (req, res) => {
	try {
		const courses = await db
			.collection("Course")
			.find({}, { projection: { _id: 0, courseID: 1, courseName: 1 } })
			.toArray();

		res.json(courses);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Route to get course details by courseID
app.get("/course/:id", async (req, res) => {
	try {
		const courseID = req.params.id;

		const course = await db
			.collection("Course")
			.findOne({ courseID: courseID }, { projection: { _id: 0 } });

		if (!course) return res.status(404).json({ error: "Course not found" });

		const rating = await db
			.collection("Ratings")
			.findOne(
				{ courseID: courseID },
				{ projection: { _id: 0, rating: 1 } }
			);

		let instructorName = "Not assigned";
		if (course.instructorID) {
			const instructor = await db
				.collection("Instructor")
				.findOne(
					{ instructorID: course.instructorID },
					{ projection: { _id: 0, name: 1 } }
				);
			if (instructor?.name) instructorName = instructor.name;
		}

		res.json({
			...course,
			rating: rating?.rating || "No rating yet",
			instructorName,
		});
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Get all verified Comment of a course
app.get("/comment/:courseID", async (req, res) => {
	try {
		const courseID = req.params.courseID;

		const comments = await db
			.collection("Comment")
			.find({ courseID, isVerified: true })
			.sort({ createdAt: -1 })
			.toArray();

		res.json(comments);
	} catch (error) {
		console.error("Error fetching verified comments:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Post Comment
app.post("/comment/:courseID", verifyToken, async (req, res) => {
	try {
		const courseID = req.params.courseID;
		const { text } = req.body;

		if (!text)
			return res.status(400).json({ error: "Comment text required" });

		const user = await db
			.collection("User")
			.findOne(
				{ _id: new ObjectId(req.user.userID) },
				{ projection: { username: 1 } }
			);

		if (!user) return res.status(404).json({ error: "User not found" });

		const comment = {
			courseID,
			userID: req.user.userID,
			username: user.username,
			text,
			createdAt: new Date(),
			isVerified: false,
		};

		await db.collection("Comment").insertOne(comment);

		res.status(201).json({
			message: "Comment submitted and pending verification",
		});
	} catch (error) {
		console.error("Error posting comment:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

//Delete Comment(admin only)
app.delete("/comment/:id", verifyToken, isAdmin, async (req, res) => {
	try {
		const commentID = req.params.id;

		const result = await db.collection("Comment").deleteOne({
			_id: new ObjectId(commentID),
		});

		if (result.deletedCount === 0)
			return res.status(404).json({ error: "Comment not found" });

		res.json({ message: "Comment deleted successfully" });
	} catch (error) {
		console.error("Error deleting comment:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

//Fetech all unverfied comments
app.get("/comment/unverified", verifyToken, isAdmin, async (req, res) => {
	try {
		const unverifiedComments = await db
			.collection("Comment")
			.find({ isVerified: false })
			.sort({ createdAt: -1 })
			.toArray();

		res.json(unverifiedComments);
	} catch (error) {
		console.error("Error fetching unverified comments:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

//Establish Connection
let db;

connectToMongo().then(() => {
	db = getDB();

	console.log("Connected to DB:", db.databaseName);

	app.get("/course/all", async (req, res) => {
		const collections = await db.listCollections().toArray();
		res.json({ collections });
	});

	app.listen(port, () => {
		console.log(`🚀 Server running at http://localhost:${port}`);
	});
});
