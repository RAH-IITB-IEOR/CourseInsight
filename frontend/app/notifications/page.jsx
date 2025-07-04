"use client";
import React, { useState } from "react";
import {
	Bell,
	Check,
	X,
	Eye,
	Clock,
	CheckCircle,
	XCircle,
	AlertCircle,
	User,
	Shield,
} from "lucide-react";

const NotificationsPage = () => {
	const [userType, setUserType] = useState("user"); // 'user' or 'admin'
	const [filter, setFilter] = useState("all");

	// Sample admin notifications (pending approvals)
	const [adminNotifications, setAdminNotifications] = useState([
		{
			id: 1,
			type: "comment",
			content: 'New comment on "React Best Practices" needs approval',
			author: "john_doe",
			timestamp: "2 minutes ago",
			status: "pending",
			details:
				"This is a really helpful article! I learned a lot about React hooks and state management.",
			contentTitle: "React Best Practices",
		},
		{
			id: 2,
			type: "material",
			content:
				'Educational material "JavaScript Fundamentals" submitted for review',
			author: "sarah_teacher",
			timestamp: "15 minutes ago",
			status: "pending",
			details:
				"Complete JavaScript course covering ES6+ features, async programming, and DOM manipulation.",
			contentTitle: "JavaScript Fundamentals",
		},
		{
			id: 3,
			type: "review",
			content:
				'Product review for "Web Development Course" needs approval',
			author: "mike_student",
			timestamp: "1 hour ago",
			status: "pending",
			details:
				"5/5 stars - Excellent course structure and practical examples. Highly recommended!",
			contentTitle: "Web Development Course",
		},
		{
			id: 4,
			type: "comment",
			content: 'Comment on "CSS Grid Tutorial" flagged for review',
			author: "alex_dev",
			timestamp: "2 hours ago",
			status: "pending",
			details:
				"Thanks for the tutorial, but I think there's an error in the grid-template-areas example.",
			contentTitle: "CSS Grid Tutorial",
		},
	]);

	// Sample user notifications (status updates)
	const [userNotifications, setUserNotifications] = useState([
		{
			id: 1,
			type: "comment",
			content: 'Your comment on "React Best Practices" has been approved',
			timestamp: "1 hour ago",
			status: "approved",
			contentTitle: "React Best Practices",
		},
		{
			id: 2,
			type: "material",
			content: 'Your material "Node.js Tutorial" is under review',
			timestamp: "3 hours ago",
			status: "pending",
			contentTitle: "Node.js Tutorial",
		},
		{
			id: 3,
			type: "review",
			content: 'Your review for "Python Course" has been rejected',
			timestamp: "1 day ago",
			status: "rejected",
			reason: "Review does not meet community guidelines",
			contentTitle: "Python Course",
		},
		{
			id: 4,
			type: "comment",
			content: 'Your comment on "Vue.js Basics" has been approved',
			timestamp: "2 days ago",
			status: "approved",
			contentTitle: "Vue.js Basics",
		},
		{
			id: 5,
			type: "material",
			content: 'Your material "Database Design" has been approved',
			timestamp: "3 days ago",
			status: "approved",
			contentTitle: "Database Design",
		},
	]);

	const handleAdminAction = (id, action) => {
		setAdminNotifications((prev) =>
			prev.map((notification) =>
				notification.id === id
					? { ...notification, status: action }
					: notification
			)
		);
	};

	const getStatusIcon = (status) => {
		switch (status) {
			case "approved":
				return <CheckCircle className="w-5 h-5 text-green-500" />;
			case "rejected":
				return <XCircle className="w-5 h-5 text-red-500" />;
			case "pending":
				return <Clock className="w-5 h-5 text-yellow-500" />;
			default:
				return <AlertCircle className="w-5 h-5 text-gray-500" />;
		}
	};

	const getTypeIcon = (type) => {
		switch (type) {
			case "comment":
				return "💬";
			case "material":
				return "📚";
			case "review":
				return "⭐";
			default:
				return "📝";
		}
	};

	const filteredUserNotifications = userNotifications.filter(
		(notification) => {
			if (filter === "all") return true;
			return notification.status === filter;
		}
	);

	const filteredAdminNotifications = adminNotifications.filter(
		(notification) => {
			if (filter === "all") return true;
			return notification.status === filter;
		}
	);

	return (
		<div className="min-h-screen bg-gray-50 p-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="bg-white rounded-lg shadow-sm p-6 mb-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<Bell className="w-8 h-8 text-blue-600" />
							<h1 className="text-3xl font-bold text-gray-900">
								Notifications
							</h1>
						</div>

						{/* User Type Selector */}
						{/* <div className="flex bg-gray-100 rounded-lg p-1">
							<button
								onClick={() => setUserType("user")}
								className={`flex items-center px-4 py-2 rounded-md transition-colors ${
									userType === "user"
										? "bg-white text-blue-600 shadow-sm"
										: "text-gray-600 hover:text-gray-900"
								}`}
							>
								<User className="w-4 h-4 mr-2" />
								User View
							</button>
							<button
								onClick={() => setUserType("admin")}
								className={`flex items-center px-4 py-2 rounded-md transition-colors ${
									userType === "admin"
										? "bg-white text-blue-600 shadow-sm"
										: "text-gray-600 hover:text-gray-900"
								}`}
							>
								<Shield className="w-4 h-4 mr-2" />
								Admin View
							</button>
						</div> */}
					</div>
				</div>

				{/* Filters */}
				<div className="bg-white rounded-lg shadow-sm p-4 mb-6">
					<div className="flex flex-wrap gap-2">
						{["all", "pending", "approved", "rejected"].map(
							(filterType) => (
								<button
									key={filterType}
									onClick={() => setFilter(filterType)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
										filter === filterType
											? "bg-blue-600 text-white"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}
								>
									{filterType.charAt(0).toUpperCase() +
										filterType.slice(1)}
								</button>
							)
						)}
					</div>
				</div>

				{/* Notifications List */}
				<div className="space-y-4">
					{userType === "admin" ? (
						// Admin View
						<>
							<div className="bg-white rounded-lg shadow-sm p-4">
								<h2 className="text-xl font-semibold text-gray-900 mb-4">
									Pending Approvals (
									{filteredAdminNotifications.length})
								</h2>
							</div>

							{filteredAdminNotifications.map((notification) => (
								<div
									key={notification.id}
									className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-400"
								>
									<div className="flex items-start justify-between">
										<div className="flex-1">
											<div className="flex items-center space-x-3 mb-3">
												<span className="text-2xl">
													{getTypeIcon(
														notification.type
													)}
												</span>
												<div>
													<h3 className="font-semibold text-gray-900">
														{notification.content}
													</h3>
													<p className="text-sm text-gray-600">
														by{" "}
														<span className="font-medium">
															{
																notification.author
															}
														</span>{" "}
														•{" "}
														{notification.timestamp}
													</p>
												</div>
											</div>

											<div className="bg-gray-50 rounded-lg p-4 mb-4">
												<p className="text-sm text-gray-700 mb-2">
													<span className="font-medium">
														Content:
													</span>{" "}
													{notification.contentTitle}
												</p>
												<p className="text-sm text-gray-600">
													{notification.details}
												</p>
											</div>
										</div>

										{notification.status === "pending" && (
											<div className="flex space-x-2 ml-4">
												<button
													onClick={() =>
														handleAdminAction(
															notification.id,
															"approved"
														)
													}
													className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
												>
													<Check className="w-4 h-4 mr-2" />
													Approve
												</button>
												<button
													onClick={() =>
														handleAdminAction(
															notification.id,
															"rejected"
														)
													}
													className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
												>
													<X className="w-4 h-4 mr-2" />
													Reject
												</button>
											</div>
										)}

										{notification.status !== "pending" && (
											<div className="flex items-center space-x-2 ml-4">
												{getStatusIcon(
													notification.status
												)}
												<span className="text-sm font-medium capitalize text-gray-600">
													{notification.status}
												</span>
											</div>
										)}
									</div>
								</div>
							))}
						</>
					) : (
						// User View
						<>
							<div className="bg-white rounded-lg shadow-sm p-4">
								<h2 className="text-xl font-semibold text-gray-900 mb-4">
									Your Submissions (
									{filteredUserNotifications.length})
								</h2>
							</div>

							{filteredUserNotifications.map((notification) => (
								<div
									key={notification.id}
									className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${
										notification.status === "approved"
											? "border-green-400"
											: notification.status === "rejected"
											? "border-red-400"
											: "border-yellow-400"
									}`}
								>
									<div className="flex items-start justify-between">
										<div className="flex items-center space-x-3">
											<span className="text-2xl">
												{getTypeIcon(notification.type)}
											</span>
											<div>
												<h3 className="font-semibold text-gray-900">
													{notification.content}
												</h3>
												<p className="text-sm text-gray-600">
													{notification.timestamp}
												</p>
												<p className="text-sm text-gray-500 mt-1">
													Content:{" "}
													<span className="font-medium">
														{
															notification.contentTitle
														}
													</span>
												</p>
												{notification.reason && (
													<p className="text-sm text-red-600 mt-2">
														<span className="font-medium">
															Reason:
														</span>{" "}
														{notification.reason}
													</p>
												)}
											</div>
										</div>

										<div className="flex items-center space-x-2">
											{getStatusIcon(notification.status)}
											<span className="text-sm font-medium capitalize text-gray-600">
												{notification.status}
											</span>
										</div>
									</div>
								</div>
							))}
						</>
					)}
				</div>

				{/* Empty State */}
				{((userType === "admin" &&
					filteredAdminNotifications.length === 0) ||
					(userType === "user" &&
						filteredUserNotifications.length === 0)) && (
					<div className="bg-white rounded-lg shadow-sm p-12 text-center">
						<Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							No notifications found
						</h3>
						<p className="text-gray-600">
							{filter === "all"
								? "You have no notifications at the moment."
								: `No ${filter} notifications found.`}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default NotificationsPage;
