"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
	Search,
	Filter,
	BookOpen,
	Clock,
	Users,
	ChevronDown,
} from "lucide-react";

import { useRouter } from "next/navigation";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedSemester, setSelectedSemester] = useState("All");
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [courses, setCourses] = useState([]);

	const router = useRouter();

	// Sample course data
	// const courses = [
	// 	{
	// 		id: "IE506",
	// 		name: "Operations Research",
	// 		semester: "Autumn",
	// 		credits: 3,
	// 		instructor: "Dr. Smith",
	// 	},
	// 	{
	// 		id: "IE620",
	// 		name: "Advanced Statistics",
	// 		semester: "Winter",
	// 		credits: 4,
	// 		instructor: "Dr. Johnson",
	// 	},
	// 	{
	// 		id: "IE621",
	// 		name: "Supply Chain Management",
	// 		semester: "Autumn",
	// 		credits: 3,
	// 		instructor: "Dr. Williams",
	// 	},
	// 	{
	// 		id: "IE619",
	// 		name: "Quality Control",
	// 		semester: "Winter",
	// 		credits: 3,
	// 		instructor: "Dr. Brown",
	// 	},
	// 	{
	// 		id: "IE507",
	// 		name: "Linear Programming",
	// 		semester: "Autumn",
	// 		credits: 4,
	// 		instructor: "Dr. Davis",
	// 	},
	// 	{
	// 		id: "IE622",
	// 		name: "Production Planning",
	// 		semester: "Winter",
	// 		credits: 3,
	// 		instructor: "Dr. Miller",
	// 	},
	// 	{
	// 		id: "IE623",
	// 		name: "Inventory Management",
	// 		semester: "Autumn",
	// 		credits: 3,
	// 		instructor: "Dr. Wilson",
	// 	},
	// 	{
	// 		id: "IE618",
	// 		name: "Simulation Modeling",
	// 		semester: "Winter",
	// 		credits: 4,
	// 		instructor: "Dr. Moore",
	// 	},
	// 	{
	// 		id: "IE508",
	// 		name: "Engineering Economics",
	// 		semester: "Autumn",
	// 		credits: 3,
	// 		instructor: "Dr. Taylor",
	// 	},
	// 	{
	// 		id: "IE624",
	// 		name: "Project Management",
	// 		semester: "Winter",
	// 		credits: 3,
	// 		instructor: "Dr. Anderson",
	// 	},
	// 	{
	// 		id: "IE625",
	// 		name: "Data Analytics",
	// 		semester: "Autumn",
	// 		credits: 4,
	// 		instructor: "Dr. Thomas",
	// 	},
	// 	{
	// 		id: "IE617",
	// 		name: "Lean Manufacturing",
	// 		semester: "Winter",
	// 		credits: 3,
	// 		instructor: "Dr. Jackson",
	// 	},
	// ];

	// Fetch courses from the backend
	useEffect(() => {
		fetch("http://localhost:3000/course/all")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCourses(data);
			});
	}, []);

	const semesters = ["All", "Autumn", "Winter"];

	// Filter courses based on search and semester
	const filteredCourses = useMemo(() => {
		return courses.filter((course) => {
			const matchesSearch =
				course.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
				course.name.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesSemester =
				selectedSemester === "All" ||
				course.semester === selectedSemester;
			return matchesSearch && matchesSemester;
		});
	}, [searchTerm, selectedSemester]);

	const handleCourseClick = (courseId) => {
		// console.log(`Navigating to course: ${courseId}`);
		router.push(`/courses/${courseId}`);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			{/* Header */}
			<div className="bg-white shadow-sm border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
							IEOR Courses
						</h1>
						<p className="text-gray-600 text-lg">
							Explore our comprehensive Industrial Engineering and
							Operations Research curriculum
						</p>
					</div>

					{/* Search and Filter Section */}
					<div className="flex flex-col md:flex-row gap-4 items-center justify-center">
						{/* Search Bar */}
						<div className="relative flex-1 max-w-md">
							<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
							<input
								type="text"
								placeholder="Search courses..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors duration-200 text-gray-900"
							/>
						</div>

						{/* Filter Dropdown */}
						<div className="relative">
							<button
								onClick={() => setIsFilterOpen(!isFilterOpen)}
								className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 min-w-[140px]"
							>
								<Filter className="w-5 h-5 text-gray-500" />
								<span className="text-gray-700">
									{selectedSemester}
								</span>
								<ChevronDown
									className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
										isFilterOpen ? "rotate-180" : ""
									}`}
								/>
							</button>

							{isFilterOpen && (
								<div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
									{semesters.map((semester) => (
										<button
											key={semester}
											onClick={() => {
												setSelectedSemester(semester);
												setIsFilterOpen(false);
											}}
											className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150 ${
												selectedSemester === semester
													? "bg-blue-50 text-blue-700"
													: "text-gray-700"
											}`}
										>
											{semester}
										</button>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Results Count */}
					<div className="mt-6 text-center">
						<p className="text-gray-600">
							Showing {filteredCourses.length} course
							{filteredCourses.length !== 1 ? "s" : ""}
							{selectedSemester !== "All" &&
								` for ${selectedSemester} semester`}
						</p>
					</div>
				</div>
			</div>

			{/* Course Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredCourses.map((course) => (
						<div
							key={course.id}
							onClick={() => handleCourseClick(course.id)}
							className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
						>
							{/* Course ID */}
							<div className="text-center mb-4">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
									<BookOpen className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-800 mb-2">
									{course.id}
								</h3>
								<h4 className="text-sm font-medium text-gray-600 leading-tight">
									{course.name}
								</h4>
							</div>

							{/* Course Details */}
							<div className="space-y-3 pt-4 border-t border-gray-100">
								<div className="flex items-center justify-between text-sm">
									<div className="flex items-center space-x-2">
										<Clock className="w-4 h-4 text-blue-500" />
										<span className="text-gray-600">
											Semester
										</span>
									</div>
									<span
										className={`px-2 py-1 rounded-full text-xs font-medium ${
											course.semester === "Autumn"
												? "bg-orange-100 text-orange-700"
												: "bg-blue-100 text-blue-700"
										}`}
									>
										{course.semester}
									</span>
								</div>

								<div className="flex items-center justify-between text-sm">
									<div className="flex items-center space-x-2">
										<Users className="w-4 h-4 text-green-500" />
										<span className="text-gray-600">
											Credits
										</span>
									</div>
									<span className="font-medium text-gray-800">
										{course.credits}
									</span>
								</div>

								<div className="text-sm">
									<span className="text-gray-600">
										Instructor:{" "}
									</span>
									<span className="font-medium text-gray-800">
										{course.instructor}
									</span>
								</div>
							</div>

							{/* Hover Effect Indicator */}
							<div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span className="text-sm text-blue-600 font-medium">
									Click to view details →
								</span>
							</div>
						</div>
					))}
				</div>

				{/* No Results Message */}
				{filteredCourses.length === 0 && (
					<div className="text-center py-16">
						<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Search className="w-10 h-10 text-gray-400" />
						</div>
						<h3 className="text-xl font-medium text-gray-800 mb-2">
							No courses found
						</h3>
						<p className="text-gray-600 mb-4">
							Try adjusting your search terms or filter criteria
						</p>
						<button
							onClick={() => {
								setSearchTerm("");
								setSelectedSemester("All");
							}}
							className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium"
						>
							Clear Filters
						</button>
					</div>
				)}
			</div>

			{/* Filter Dropdown Overlay */}
			{isFilterOpen && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setIsFilterOpen(false)}
				/>
			)}
		</div>
	);
};

export default Home;
