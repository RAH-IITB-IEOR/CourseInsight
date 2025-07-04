"use client";

import React, { useState } from "react";
import {
	Bell,
	User,
	Menu,
	X,
	ChevronDown,
	Search,
	Settings,
	HelpCircle,
	LogOut,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [notificationCount, setNotificationCount] = useState(3);
	const [isSignedIn, setIsSignedIn] = useState(true);

	const router = useRouter();

	const navigationLinks = [
		// { name: "Home", href: "/", active: true },
		// { name: "Dashboard", href: "#" },
		// { name: "Projects", href: "#" },
		// { name: "Analytics", href: "#" },
		// { name: "Team", href: "#" },
	];

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

	const handleSignOut = () => {
		alert("Sign out clicked");
		router.replace("/auth/login");
	};

	return (
		<nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
			<div className="flex justify-between items-center h-16 sticky z-50 bg-white px-4 sm:px-6 lg:px-8">
				{/* Logo/Brand */}
				<div className="flex-shrink-0 flex items-center">
					<div className="flex items-center space-x-2">
						<Link href="/" className="flex items-center">
							<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">
									CI
								</span>
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								CourseInsight
							</span>
						</Link>
					</div>
				</div>

				{/* Desktop Navigation Links */}
				<div className="hidden md:flex items-center space-x-1">
					{navigationLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
								link.active
									? "bg-blue-50 text-blue-700 shadow-sm"
									: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
							}`}
						>
							{link.name}
						</Link>
					))}
				</div>

				{/* Right side - Search, Notifications, Profile */}
				<div className="flex items-center space-x-4">
					{isSignedIn ? (
						<>
							{/* Notifications - Only visible when signed in */}
							<div className="relative">
								<Link href="/notifications">
									<button
										className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative"
										onClick={() => setNotificationCount(0)}
									>
										<Bell className="w-5 h-5" />
										{notificationCount > 0 && (
											<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
												{notificationCount}
											</span>
										)}
									</button>
								</Link>
							</div>

							{/* Profile Dropdown - Only visible when signed in */}
							<div className="relative">
								<button
									onClick={toggleProfile}
									className="flex items-center space-x-3 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
								>
									<div className="relative">
										<div className="w-9 h-9 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
											<User className="w-5 h-5 text-white" />
										</div>
										{/* Online indicator */}
										<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
									</div>
									<div className="hidden sm:flex items-center space-x-2">
										<span className="text-sm font-medium text-gray-700">
											John Doe
										</span>
										<ChevronDown
											className={`w-4 h-4 transition-transform duration-200 ${
												isProfileOpen
													? "rotate-180"
													: ""
											}`}
										/>
									</div>
								</button>

								{/* Profile Dropdown Menu */}
								{isProfileOpen && (
									<div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
										{/* User Info Header */}
										<div className="px-4 py-3 border-b border-gray-100">
											<div className="flex items-center space-x-3">
												<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
													<User className="w-6 h-6 text-white" />
												</div>
												<div>
													<p className="text-sm font-semibold text-gray-900">
														John Doe
													</p>
													<p className="text-xs text-gray-500">
														john@nextapp.com
													</p>
													<div className="flex items-center mt-1">
														<div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
														<span className="text-xs text-green-600 font-medium">
															Online
														</span>
													</div>
												</div>
											</div>
										</div>

										{/* Menu Items */}
										<div className="py-1">
											<Link
												href="/profile"
												className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 group"
											>
												<User className="w-4 h-4 mr-3 text-gray-400 group-hover:text-gray-600" />
												Your Profile
											</Link>
											{/* <Link
												href="/notifications"
												className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 group"
											>
												<Bell className="w-4 h-4 mr-3 text-gray-400 group-hover:text-gray-600" />
												Notifications
												<span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[18px] h-4 flex items-center justify-center">
													3
												</span>
											</Link> */}
											{/* <Link
												href="#"
												className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 group"
											>
												<Settings className="w-4 h-4 mr-3 text-gray-400 group-hover:text-gray-600" />
												Settings
											</Link> */}
											<Link
												href="#"
												className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 group"
											>
												<HelpCircle className="w-4 h-4 mr-3 text-gray-400 group-hover:text-gray-600" />
												Help & Support
											</Link>
										</div>

										{/* Divider */}
										<div className="border-t border-gray-100 my-1"></div>

										{/* Sign Out */}
										<button
											onClick={handleSignOut}
											className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-150 group"
										>
											<LogOut className="w-4 h-4 mr-3 text-red-500 group-hover:text-red-600" />
											Sign out
										</button>
									</div>
								)}
							</div>
						</>
					) : (
						/* Authentication Buttons - Only visible when not signed in */
						<div className="flex items-center space-x-3">
							<Link
								href="/auth/login"
								className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
							>
								Log in
							</Link>
							<Link
								href="/auth/signup"
								className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
							>
								Sign up
							</Link>
						</div>
					)}

					{/* Mobile menu button */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
					>
						{isMenuOpen ? (
							<X className="w-5 h-5" />
						) : (
							<Menu className="w-5 h-5" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="md:hidden border-t border-gray-100 bg-white z-50 sticky">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{/* Mobile Navigation Links */}
						{navigationLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
									link.active
										? "bg-blue-50 text-blue-700"
										: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
								}`}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}

			{/* Overlay for mobile menu */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 bg-black opacity-[0.5] md:hidden"
					onClick={() => setIsMenuOpen(false)}
				/>
			)}

			{/* Overlay for profile dropdown */}
			{isProfileOpen && (
				<div
					className="fixed inset-0"
					onClick={() => setIsProfileOpen(false)}
				/>
			)}
		</nav>
	);
};

export default Navbar;
