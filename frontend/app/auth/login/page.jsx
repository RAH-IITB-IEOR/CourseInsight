"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	const [loginForm, setLoginForm] = useState({
		emailOrUsername: "",
		password: "",
	});

	const handleLoginChange = (e) => {
		setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log("Login form submitted:", loginForm);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				{/* Header */}
				<div className="text-center">
					<div className="flex justify-center mb-6">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
							<span className="text-white font-bold text-2xl">
								CI
							</span>
						</div>
					</div>
					<h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Welcome Back
					</h2>
					<p className="mt-2 text-gray-600">
						Sign in to your account
					</p>
				</div>

				{/* Login Form */}
				<div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
					<div className="space-y-6">
						{/* Email/Username Field */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Username or Email
							</label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type="text"
									name="emailOrUsername"
									value={loginForm.emailOrUsername}
									onChange={handleLoginChange}
									className="w-full pl-12 pr-4 text-gray-400 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
									placeholder="Enter your username or email"
									required
								/>
							</div>
						</div>

						{/* Password Field */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									value={loginForm.password}
									onChange={handleLoginChange}
									className="w-full pl-12 pr-12 py-3 border text-gray-400 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
									placeholder="Enter your password"
									required
								/>
								<button
									type="button"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
								>
									{showPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
						</div>

						{/* Forgot Password */}
						<div className="flex items-center justify-between">
							<label className="flex items-center">
								<input
									type="checkbox"
									className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
								/>
								<span className="ml-2 text-sm text-gray-600">
									Remember me
								</span>
							</label>
							<a
								href="#"
								className="text-sm text-blue-600 hover:text-purple-600 transition-colors duration-200"
							>
								Forgot password?
							</a>
						</div>

						{/* Submit Button */}
						<button
							onClick={handleLoginSubmit}
							className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
						>
							<span className="flex items-center justify-center">
								Sign In
								<ArrowRight className="ml-2 w-5 h-5" />
							</span>
						</button>
					</div>

					{/* Switch to Signup */}
					<div className="mt-6 text-center">
						<p className="text-gray-600">
							Don't have an account?{" "}
							<Link href="/auth/signup">
								<button className="text-blue-600 hover:text-purple-600 font-medium transition-colors duration-200">
									Sign up here
								</button>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
