"use client";
import React, { useState } from "react";
import {
	Star,
	ThumbsUp,
	MessageCircle,
	Send,
	BookOpen,
	Clock,
	Users,
	Award,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import CommentThread from "@/components/commentThread";

const CourseDetailsPage = () => {
	const [comments, setComments] = useState([
		{
			id: 1,
			author: "Sarah Johnson",
			avatar: "SJ",
			content:
				"This course completely transformed my understanding of industrial engineering principles. The practical applications were incredibly valuable!",
			likes: 12,
			liked: false,
			timestamp: "2 days ago",
			replies: [
				{
					id: 11,
					author: "Mike Chen",
					avatar: "MC",
					content:
						"I totally agree! The case studies were particularly enlightening.",
					likes: 3,
					liked: false,
					timestamp: "1 day ago",
					replies: [],
				},
			],
		},
		{
			id: 2,
			author: "Alex Rodriguez",
			avatar: "AR",
			content:
				"Professor Smith's teaching methodology is outstanding. Complex concepts made simple!",
			likes: 8,
			liked: true,
			timestamp: "3 days ago",
			replies: [],
		},
	]);

	const [newComment, setNewComment] = useState("");
	const [replyingTo, setReplyingTo] = useState(null);
	const [replyContent, setReplyContent] = useState("");
	const [userReview, setUserReview] = useState({ rating: 0, comment: "" });
	const [hasReviewed, setHasReviewed] = useState(false);
	const [showReviewForm, setShowReviewForm] = useState(false);

	const courseData = {
		name: "Industrial Engineering Fundamentals",
		id: "IE506",
		rating: 4.7,
		totalRatings: 156,
		instructor: "Dr. Emily Smith",
		duration: "12 weeks",
		students: 1247,
		level: "Intermediate",
		description:
			"This comprehensive course covers the fundamental principles of industrial engineering, including process optimization, quality control, lean manufacturing, and systems analysis. Students will gain practical skills through hands-on projects and real-world case studies.",
		syllabus: [
			"Introduction to Industrial Engineering",
			"Process Analysis and Design",
			"Quality Control and Six Sigma",
			"Lean Manufacturing Principles",
			"Supply Chain Management",
			"Operations Research",
			"Human Factors Engineering",
			"Project Management",
			"Cost Analysis and Optimization",
			"Capstone Project",
		],
		resources: [
			"Interactive Video Lectures",
			"Case Study Library",
			"Simulation Software Access",
			"Industry Guest Speakers",
			"Peer Discussion Forums",
			"Weekly Assignments",
			"Final Project Guidelines",
		],
	};

	const findAndUpdateComment = (comments, commentId, updateFn) => {
		return comments.map((comment) => {
			if (comment.id === commentId) {
				return updateFn(comment);
			}
			if (comment.replies && comment.replies.length > 0) {
				return {
					...comment,
					replies: findAndUpdateComment(
						comment.replies,
						commentId,
						updateFn
					),
				};
			}
			return comment;
		});
	};

	const handleLike = (commentId) => {
		setComments((prev) =>
			findAndUpdateComment(prev, commentId, (comment) => ({
				...comment,
				liked: !comment.liked,
				likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
			}))
		);
	};

	const handleAddComment = () => {
		if (newComment.trim()) {
			const newCommentObj = {
				id: Date.now(),
				author: "Current User",
				avatar: "CU",
				content: newComment,
				likes: 0,
				liked: false,
				timestamp: "Just now",
				replies: [],
			};
			setComments((prev) => [newCommentObj, ...prev]);
			setNewComment("");
		}
	};

	const handleAddReply = (parentCommentId) => {
		if (replyContent.trim()) {
			const newReply = {
				id: Date.now(),
				author: "Current User",
				avatar: "CU",
				content: replyContent,
				likes: 0,
				liked: false,
				timestamp: "Just now",
				replies: [],
			};

			setComments((prev) =>
				findAndUpdateComment(prev, parentCommentId, (comment) => ({
					...comment,
					replies: [...comment.replies, newReply],
				}))
			);

			setReplyContent("");
			setReplyingTo(null);
		}
	};

	const handleReviewSubmit = () => {
		if (userReview.rating > 0 && userReview.comment.trim()) {
			setHasReviewed(true);
			setShowReviewForm(false);
			// In a real app, this would be sent to a backend
			console.log("Review submitted:", userReview);
		}
	};

	const StarRating = ({ rating, interactive = false, onRatingChange }) => {
		return (
			<div className="flex items-center gap-1">
				{[1, 2, 3, 4, 5].map((star) => (
					<Star
						key={star}
						className={`w-5 h-5 ${
							star <= rating
								? "fill-yellow-400 text-yellow-400"
								: "text-gray-300"
						} ${
							interactive
								? "cursor-pointer hover:text-yellow-400"
								: ""
						}`}
						onClick={() =>
							interactive &&
							onRatingChange &&
							onRatingChange(star)
						}
					/>
				))}
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
			{/* Header */}
			<div className="bg-white shadow-lg border-b-4 border-purple-200">
				<div className="max-w-6xl mx-auto px-6 py-8">
					<div className="flex items-start gap-8 flex-wrap">
						<div className="bg-gradient-to-br from-purple-200 to-purple-300 p-8 rounded-2xl border-4 border-purple-400 border-dashed shadow-xl">
							<div className="text-4xl font-bold text-purple-800">
								{courseData.id}
							</div>
						</div>
						<div className="flex-1">
							<h1 className="text-4xl font-bold text-gray-800 mb-2">
								{courseData.name}
							</h1>
							<div className="flex items-center gap-6 mb-4">
								<div className="flex items-center gap-2">
									<StarRating rating={courseData.rating} />
									<span className="text-xl font-semibold text-gray-700">
										{courseData.rating}
									</span>
									<span className="text-gray-500">
										({courseData.totalRatings} reviews)
									</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600">
									<Users className="w-5 h-5" />
									<span>{courseData.students} students</span>
								</div>
							</div>
							<div className="flex items-center gap-4 text-gray-600 mb-4">
								<div className="flex items-center gap-2">
									<Clock className="w-5 h-5" />
									<span>{courseData.duration}</span>
								</div>
								<div className="flex items-center gap-2">
									<Award className="w-5 h-5" />
									<span>{courseData.level}</span>
								</div>
							</div>
							<div className="text-gray-700 mb-4">
								<strong>Instructor:</strong>{" "}
								{courseData.instructor}
							</div>
							{/* <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
								Enroll Now
							</button> */}
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-8">
						{/* Course Description */}
						<div className="bg-white rounded-2xl shadow-xl p-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
								<BookOpen className="w-6 h-6 text-purple-600" />
								Course Description
							</h2>
							<p className="text-gray-700 leading-relaxed">
								{courseData.description}
							</p>
						</div>

						{/* Syllabus */}
						<div className="bg-white rounded-2xl shadow-xl p-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">
								Course Syllabus
							</h2>
							<div className="space-y-3">
								{courseData.syllabus.map((topic, index) => (
									<div
										key={index}
										className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border-l-4 border-purple-400"
									>
										<div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
											{index + 1}
										</div>
										<span className="text-gray-700 font-medium">
											{topic}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Comments and Reviews Section */}
						<div className="bg-white rounded-2xl shadow-xl p-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
								<MessageCircle className="w-6 h-6 text-purple-600" />
								Course Discussion
							</h2>
							{/* Review Section */}
							{!hasReviewed && (
								<div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border-l-4 border-purple-400">
									<div className="flex items-center justify-between mb-4">
										<h3 className="text-lg font-semibold text-gray-800">
											Share Your Experience
										</h3>
										<button
											onClick={() =>
												setShowReviewForm(
													!showReviewForm
												)
											}
											className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
										>
											{showReviewForm ? (
												<ChevronUp className="w-4 h-4" />
											) : (
												<ChevronDown className="w-4 h-4" />
											)}
											{showReviewForm
												? "Hide"
												: "Write Review"}
										</button>
									</div>

									{showReviewForm && (
										<div className="space-y-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Rating
												</label>
												<StarRating
													rating={userReview.rating}
													interactive={true}
													onRatingChange={(rating) =>
														setUserReview(
															(prev) => ({
																...prev,
																rating,
															})
														)
													}
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Review
												</label>
												<textarea
													value={userReview.comment}
													onChange={(e) =>
														setUserReview(
															(prev) => ({
																...prev,
																comment:
																	e.target
																		.value,
															})
														)
													}
													placeholder="Share your thoughts about this course..."
													className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
													rows="4"
												/>
											</div>
											<button
												onClick={handleReviewSubmit}
												className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
											>
												Submit Review
											</button>
										</div>
									)}
								</div>
							)}
							{/* Add Comment */}
							<div className="mb-8">
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
										CU
									</div>
									<div className="flex-1">
										<textarea
											value={newComment}
											onChange={(e) =>
												setNewComment(e.target.value)
											}
											placeholder="Share your thoughts or ask a question..."
											className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
											rows="3"
										/>
										<button
											onClick={handleAddComment}
											className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2"
										>
											<Send className="w-4 h-4" />
											Post Comment
										</button>
									</div>
								</div>
							</div>
							{/* Comments List */}
							<div className="space-y-6">
								{comments.map((comment) => (
									<div
										key={comment.id}
										className="border-b border-gray-200 pb-6 last:border-b-0"
									>
										<CommentThread
											comment={comment}
											depth={0}
											onLike={handleLike}
											onReply={setReplyingTo}
											replyingTo={replyingTo}
											replyContent={replyContent}
											onReplyContentChange={
												setReplyContent
											}
											onAddReply={handleAddReply}
											onCancelReply={() =>
												setReplyingTo(null)
											}
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						<div className="bg-white rounded-2xl shadow-xl p-6">
							<h3 className="text-xl font-bold text-gray-800 mb-4">
								Course Resources
							</h3>
							<div className="space-y-3">
								{courseData.resources.map((resource, index) => (
									<div
										key={index}
										className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg"
									>
										<div className="w-2 h-2 bg-purple-600 rounded-full"></div>
										<span className="text-gray-700">
											{resource}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow-xl p-6">
							<h3 className="text-xl font-bold text-gray-800 mb-4">
								Course Stats
							</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-gray-600">
										Total Students
									</span>
									<span className="font-semibold text-gray-800">
										{courseData.students}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">
										Average Rating
									</span>
									<span className="font-semibold text-gray-800">
										{courseData.rating}/5
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">
										Total Reviews
									</span>
									<span className="font-semibold text-gray-800">
										{courseData.totalRatings}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">
										Duration
									</span>
									<span className="font-semibold text-gray-800">
										{courseData.duration}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetailsPage;
