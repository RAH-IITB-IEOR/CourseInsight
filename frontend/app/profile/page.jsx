"use client";
import React, { useState } from "react";
import {
	User,
	Mail,
	Phone,
	MapPin,
	Calendar,
	Edit3,
	Save,
	X,
	Camera,
	Bell,
	Shield,
	Globe,
	Award,
	BookOpen,
	MessageSquare,
	Heart,
	Settings,
} from "lucide-react";

const UserProfile = () => {
	const [activeTab, setActiveTab] = useState("profile");
	const [isEditing, setIsEditing] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const [userInfo, setUserInfo] = useState({
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		phone: "+1 (555) 123-4567",
		location: "New York, NY",
		bio: "Full-stack developer passionate about creating innovative solutions. Love learning new technologies and sharing knowledge with the community.",
		joinDate: "January 2023",
		website: "https://johndoe.dev",
		linkedin: "linkedin.com/in/johndoe",
		github: "github.com/johndoe",
	});

	const [preferences, setPreferences] = useState({
		emailNotifications: true,
		pushNotifications: false,
		profileVisibility: "public",
		showEmail: false,
		showPhone: false,
		darkMode: false,
		language: "english",
	});

	const stats = {
		postsCreated: 24,
		commentsPosted: 156,
		likesReceived: 892,
		articlesRead: 1247,
	};

	const handleSave = () => {
		setIsEditing(false);
		// Here you would typically save to backend
		console.log("Saving user info:", userInfo);
	};

	const handleCancel = () => {
		setIsEditing(false);
		// Reset form if needed
	};

	const handleInputChange = (field, value) => {
		setUserInfo((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handlePreferenceChange = (field, value) => {
		setPreferences((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const TabButton = ({ id, label, icon: Icon }) => (
		<button
			onClick={() => setActiveTab(id)}
			className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
				activeTab === id
					? "bg-blue-100 text-blue-700"
					: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
			}`}
		>
			<Icon className="w-4 h-4" />
			<span className="hidden sm:inline">{label}</span>
		</button>
	);

	return (
		<div className="min-h-screen bg-gray-50 p-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
					{/* Cover Photo */}
					<div className="h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
						<button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-white/30 transition-colors">
							<Camera className="w-5 h-5" />
						</button>
					</div>

					{/* Profile Info */}
					<div className="px-6 pb-6">
						<div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
							{/* Profile Picture */}
							<div className="relative -translate-y-1/2">
								<div className="w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
									<User className="w-16 h-16 text-white" />
								</div>
								<button className="absolute bottom-2 right-2 bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700 transition-colors">
									<Camera className="w-4 h-4" />
								</button>
							</div>

							{/* Basic Info */}
							<div className="flex-1 sm:mt-0">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
									<div>
										<h1 className="text-2xl font-bold text-gray-900">
											{userInfo.firstName}{" "}
											{userInfo.lastName}
										</h1>
										<p className="text-gray-600 mt-1">
											{userInfo.bio}
										</p>
										<div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
											<span className="flex items-center">
												<MapPin className="w-4 h-4 mr-1" />
												{userInfo.location}
											</span>
											<span className="flex items-center">
												<Calendar className="w-4 h-4 mr-1" />
												Joined {userInfo.joinDate}
											</span>
										</div>
									</div>

									<button
										onClick={() => setIsEditing(!isEditing)}
										className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
									>
										<Edit3 className="w-4 h-4" />
										<span>Edit Profile</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
					<div className="bg-white rounded-xl shadow-sm p-6 text-center">
						<BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
						<div className="text-2xl font-bold text-gray-900">
							{stats.postsCreated}
						</div>
						<div className="text-sm text-gray-600">
							Posts Created
						</div>
					</div>
					<div className="bg-white rounded-xl shadow-sm p-6 text-center">
						<MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
						<div className="text-2xl font-bold text-gray-900">
							{stats.commentsPosted}
						</div>
						<div className="text-sm text-gray-600">Comments</div>
					</div>
					<div className="bg-white rounded-xl shadow-sm p-6 text-center">
						<Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
						<div className="text-2xl font-bold text-gray-900">
							{stats.likesReceived}
						</div>
						<div className="text-sm text-gray-600">
							Likes Received
						</div>
					</div>
					<div className="bg-white rounded-xl shadow-sm p-6 text-center">
						<Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
						<div className="text-2xl font-bold text-gray-900">
							{stats.articlesRead}
						</div>
						<div className="text-sm text-gray-600">
							Articles Read
						</div>
					</div>
				</div>

				{/* Tab Navigation */}
				<div className="bg-white rounded-xl shadow-sm mb-6">
					<div className="flex space-x-2 p-4 overflow-x-auto">
						<TabButton id="profile" label="Profile" icon={User} />
						<TabButton
							id="settings"
							label="Settings"
							icon={Settings}
						/>
						<TabButton id="privacy" label="Privacy" icon={Shield} />
						<TabButton
							id="notifications"
							label="Notifications"
							icon={Bell}
						/>
					</div>
				</div>

				{/* Tab Content */}
				<div className="bg-white rounded-xl shadow-sm p-6">
					{activeTab === "profile" && (
						<div className="space-y-6">
							<div className="flex items-center justify-between">
								<h2 className="text-xl font-semibold text-gray-900">
									Profile Information
								</h2>
								{isEditing && (
									<div className="flex space-x-2">
										<button
											onClick={handleSave}
											className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
										>
											<Save className="w-4 h-4" />
											<span>Save</span>
										</button>
										<button
											onClick={handleCancel}
											className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
										>
											<X className="w-4 h-4" />
											<span>Cancel</span>
										</button>
									</div>
								)}
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										First Name
									</label>
									{isEditing ? (
										<input
											type="text"
											value={userInfo.firstName}
											onChange={(e) =>
												handleInputChange(
													"firstName",
													e.target.value
												)
											}
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									) : (
										<div className="px-3 py-2 bg-gray-50 rounded-lg">
											{userInfo.firstName}
										</div>
									)}
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Last Name
									</label>
									{isEditing ? (
										<input
											type="text"
											value={userInfo.lastName}
											onChange={(e) =>
												handleInputChange(
													"lastName",
													e.target.value
												)
											}
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									) : (
										<div className="px-3 py-2 bg-gray-50 rounded-lg">
											{userInfo.lastName}
										</div>
									)}
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Email
									</label>
									{isEditing ? (
										<input
											type="email"
											value={userInfo.email}
											onChange={(e) =>
												handleInputChange(
													"email",
													e.target.value
												)
											}
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									) : (
										<div className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
											<Mail className="w-4 h-4 mr-2 text-gray-500" />
											{userInfo.email}
										</div>
									)}
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Phone
									</label>
									{isEditing ? (
										<input
											type="tel"
											value={userInfo.phone}
											onChange={(e) =>
												handleInputChange(
													"phone",
													e.target.value
												)
											}
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									) : (
										<div className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
											<Phone className="w-4 h-4 mr-2 text-gray-500" />
											{userInfo.phone}
										</div>
									)}
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Location
									</label>
									{isEditing ? (
										<input
											type="text"
											value={userInfo.location}
											onChange={(e) =>
												handleInputChange(
													"location",
													e.target.value
												)
											}
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									) : (
										<div className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
											<MapPin className="w-4 h-4 mr-2 text-gray-500" />
											{userInfo.location}
										</div>
									)}
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Website
									</label>
									{isEditing ? (
										<input
											type="url"
											value={userInfo.website}
											onChange={(e) =>
												handleInputChange(
													"website",
													e.target.value
												)
											}
											className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									) : (
										<div className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
											<Globe className="w-4 h-4 mr-2 text-gray-500" />
											<a
												href={userInfo.website}
												className="text-blue-600 hover:underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												{userInfo.website}
											</a>
										</div>
									)}
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Bio
								</label>
								{isEditing ? (
									<textarea
										value={userInfo.bio}
										onChange={(e) =>
											handleInputChange(
												"bio",
												e.target.value
											)
										}
										rows={4}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								) : (
									<div className="px-3 py-2 bg-gray-50 rounded-lg">
										{userInfo.bio}
									</div>
								)}
							</div>
						</div>
					)}

					{activeTab === "settings" && (
						<div className="space-y-6">
							<h2 className="text-xl font-semibold text-gray-900">
								Account Settings
							</h2>

							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Language
									</label>
									<select
										value={preferences.language}
										onChange={(e) =>
											handlePreferenceChange(
												"language",
												e.target.value
											)
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									>
										<option value="english">English</option>
										<option value="spanish">Spanish</option>
										<option value="french">French</option>
										<option value="german">German</option>
									</select>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<label className="text-sm font-medium text-gray-700">
											Dark Mode
										</label>
										<p className="text-sm text-gray-500">
											Enable dark theme across the
											application
										</p>
									</div>
									<button
										onClick={() =>
											handlePreferenceChange(
												"darkMode",
												!preferences.darkMode
											)
										}
										className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
											preferences.darkMode
												? "bg-blue-600"
												: "bg-gray-200"
										}`}
									>
										<span
											className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
												preferences.darkMode
													? "translate-x-6"
													: "translate-x-1"
											}`}
										/>
									</button>
								</div>
							</div>
						</div>
					)}

					{activeTab === "privacy" && (
						<div className="space-y-6">
							<h2 className="text-xl font-semibold text-gray-900">
								Privacy Settings
							</h2>

							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Profile Visibility
									</label>
									<select
										value={preferences.profileVisibility}
										onChange={(e) =>
											handlePreferenceChange(
												"profileVisibility",
												e.target.value
											)
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									>
										<option value="public">Public</option>
										<option value="private">Private</option>
										<option value="friends">
											Friends Only
										</option>
									</select>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<label className="text-sm font-medium text-gray-700">
											Show Email
										</label>
										<p className="text-sm text-gray-500">
											Make your email visible to other
											users
										</p>
									</div>
									<button
										onClick={() =>
											handlePreferenceChange(
												"showEmail",
												!preferences.showEmail
											)
										}
										className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
											preferences.showEmail
												? "bg-blue-600"
												: "bg-gray-200"
										}`}
									>
										<span
											className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
												preferences.showEmail
													? "translate-x-6"
													: "translate-x-1"
											}`}
										/>
									</button>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<label className="text-sm font-medium text-gray-700">
											Show Phone
										</label>
										<p className="text-sm text-gray-500">
											Make your phone number visible to
											other users
										</p>
									</div>
									<button
										onClick={() =>
											handlePreferenceChange(
												"showPhone",
												!preferences.showPhone
											)
										}
										className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
											preferences.showPhone
												? "bg-blue-600"
												: "bg-gray-200"
										}`}
									>
										<span
											className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
												preferences.showPhone
													? "translate-x-6"
													: "translate-x-1"
											}`}
										/>
									</button>
								</div>
							</div>
						</div>
					)}

					{activeTab === "notifications" && (
						<div className="space-y-6">
							<h2 className="text-xl font-semibold text-gray-900">
								Notification Preferences
							</h2>

							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div>
										<label className="text-sm font-medium text-gray-700">
											Email Notifications
										</label>
										<p className="text-sm text-gray-500">
											Receive notifications via email
										</p>
									</div>
									<button
										onClick={() =>
											handlePreferenceChange(
												"emailNotifications",
												!preferences.emailNotifications
											)
										}
										className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
											preferences.emailNotifications
												? "bg-blue-600"
												: "bg-gray-200"
										}`}
									>
										<span
											className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
												preferences.emailNotifications
													? "translate-x-6"
													: "translate-x-1"
											}`}
										/>
									</button>
								</div>

								<div className="flex items-center justify-between">
									<div>
										<label className="text-sm font-medium text-gray-700">
											Push Notifications
										</label>
										<p className="text-sm text-gray-500">
											Receive push notifications in
											browser
										</p>
									</div>
									<button
										onClick={() =>
											handlePreferenceChange(
												"pushNotifications",
												!preferences.pushNotifications
											)
										}
										className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
											preferences.pushNotifications
												? "bg-blue-600"
												: "bg-gray-200"
										}`}
									>
										<span
											className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
												preferences.pushNotifications
													? "translate-x-6"
													: "translate-x-1"
											}`}
										/>
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
