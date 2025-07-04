"use client";

import React, { useState } from "react";
import { Bell, User, Menu, X, ChevronDown, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [notificationCount, setNotificationCount] = useState(3);

	const navigationLinks = [
		{ name: "Home", href: "/", active: true },
		// { name: "Dashboard", href: "#" },
		// { name: "Projects", href: "#" },
		// { name: "Analytics", href: "#" },
		// { name: "Team", href: "#" },
	];

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

	return (
		<nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
			<div className="flex justify-between items-center h-16 sticky z-50 bg-white px-4 sm:px-6 lg:px-8">
				{/* Logo/Brand */}
				<div className="flex-shrink-0 flex items-center">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-sm">
								CI
							</span>
						</div>
						<span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							CourseInsight
						</span>
					</div>
				</div>

				{/* Desktop Navigation Links */}
				<div className="hidden md:flex items-center space-x-1">
					{navigationLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
								link.active
									? "bg-blue-50 text-blue-700 shadow-sm"
									: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
							}`}
						>
							{link.name}
						</a>
					))}
				</div>

				{/* Right side - Search, Notifications, Profile */}
				<div className="flex items-center space-x-4">
					{/* Notifications */}
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

					{/* Profile Dropdown */}
					<div className="relative">
						<button
							onClick={toggleProfile}
							className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
						>
							<div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
								<User className="w-4 h-4 text-white" />
							</div>
							<ChevronDown
								className={`w-4 h-4 transition-transform duration-200 ${
									isProfileOpen ? "rotate-180" : ""
								}`}
							/>
						</button>

						{/* Profile Dropdown Menu */}
						{isProfileOpen && (
							<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
								<div className="px-4 py-2 border-b border-gray-100">
									<p className="text-sm font-medium text-gray-900">
										John Doe
									</p>
									<p className="text-xs text-gray-500">
										john@nextapp.com
									</p>
								</div>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
								>
									Your Profile
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
								>
									Settings
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
								>
									Billing
								</a>
								<div className="border-t border-gray-100 mt-1">
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
									>
										Sign out
									</a>
								</div>
							</div>
						)}
					</div>

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
							<a
								key={link.name}
								href={link.href}
								className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
									link.active
										? "bg-blue-50 text-blue-700"
										: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
								}`}
							>
								{link.name}
							</a>
						))}
					</div>
				</div>
			)}

			{/* Overlay for mobile menu */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-5 md:hidden"
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
