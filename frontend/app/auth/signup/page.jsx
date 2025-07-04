"use client";
import React, { useState } from "react";
import {
	Eye,
	EyeOff,
	Mail,
	Lock,
	User,
	Calendar,
	Building,
	GraduationCap,
	ArrowRight,
} from "lucide-react";
import Link from "next/link";

const SignupPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [signupForm, setSignupForm] = useState({
		roll: "",
		email: "",
		program: "",
		passingYear: "",
		department: "",
		password: "",
		confirmPassword: "",
	});

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		console.log("Signup form submitted:", signupForm);
	};

	const handleSignupChange = (e) => {
		setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
			<div className="max-w-md w-full space-y-8">
				{/* Header */}
				<div className="text-center">
					<div className="flex justify-center mb-6">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
							<span className="text-white font-bold text-2xl">
								N
							</span>
						</div>
					</div>
					<h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Create Account
					</h2>
					<p className="mt-2 text-gray-600">
						Join NextApp and get started
					</p>
				</div>

				{/* Signup Form */}
				<div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
					<div className="space-y-5">
						{/* Roll Number */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Roll Number
							</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type="text"
									name="roll"
									value={signupForm.roll}
									onChange={handleSignupChange}
									className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
									placeholder="Enter your roll number"
									required
								/>
							</div>
						</div>

						{/* Email */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Email
							</label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type="email"
									name="email"
									value={signupForm.email}
									onChange={handleSignupChange}
									className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
									placeholder="Enter your email"
									required
								/>
							</div>
						</div>

						{/* Program */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Program
							</label>
							<div className="relative">
								<GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<select
									name="program"
									value={signupForm.program}
									onChange={handleSignupChange}
									className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none"
									required
								>
									<option value="">
										Select your program
									</option>
									<option value="btech">B.Tech</option>
									<option value="mtech">M.Tech</option>
									<option value="bsc">B.Sc</option>
									<option value="msc">M.Sc</option>
									<option value="ba">B.A</option>
									<option value="ma">M.A</option>
									<option value="phd">Ph.D</option>
								</select>
							</div>
						</div>

						{/* Passing Year */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Passing Year
							</label>
							<div className="relative">
								<Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<select
									name="passingYear"
									value={signupForm.passingYear}
									onChange={handleSignupChange}
									className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none"
									required
								>
									<option value="">
										Select passing year
									</option>
									{Array.from({ length: 10 }, (_, i) => {
										const year =
											new Date().getFullYear() + i;
										return (
											<option key={year} value={year}>
												{year}
											</option>
										);
									})}
								</select>
							</div>
						</div>

						{/* Department */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Department
							</label>
							<div className="relative">
								<Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<select
									name="department"
									value={signupForm.department}
									onChange={handleSignupChange}
									className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none"
									required
								>
									<option value="">
										Select your department
									</option>
									<option value="cse">
										Computer Science & Engineering
									</option>
									<option value="ece">
										Electronics & Communication
									</option>
									<option value="me">
										Mechanical Engineering
									</option>
									<option value="ce">
										Civil Engineering
									</option>
									<option value="ee">
										Electrical Engineering
									</option>
									<option value="it">
										Information Technology
									</option>
									<option value="chemical">
										Chemical Engineering
									</option>
									<option value="biotechnology">
										Biotechnology
									</option>
								</select>
							</div>
						</div>

						{/* Password */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									value={signupForm.password}
									onChange={handleSignupChange}
									className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
									placeholder="Create a password"
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

						{/* Confirm Password */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Confirm Password
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<input
									type={
										showConfirmPassword
											? "text"
											: "password"
									}
									name="confirmPassword"
									value={signupForm.confirmPassword}
									onChange={handleSignupChange}
									className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
									placeholder="Confirm your password"
									required
								/>
								<button
									type="button"
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
									}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
								>
									{showConfirmPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
						</div>

						{/* Submit Button */}
						<button
							onClick={handleSignupSubmit}
							className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
						>
							<span className="flex items-center justify-center">
								Create Account
								<ArrowRight className="ml-2 w-5 h-5" />
							</span>
						</button>
					</div>

					{/* Switch to Login */}
					<div className="mt-6 text-center">
						<p className="text-gray-600">
							Already have an account?{" "}
							<Link href={"/auth/login"}>
								<button className="text-blue-600 hover:text-purple-600 font-medium transition-colors duration-200">
									Sign in here
								</button>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
