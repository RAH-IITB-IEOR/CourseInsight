import React from "react";
import { Cookie, Settings, Shield, Info, Globe, RefreshCw } from "lucide-react";

const CookiePolicyPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
			<div className="max-w-4xl mx-auto px-6 py-12">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
							<Cookie className="w-8 h-8 text-white" />
						</div>
					</div>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
						Cookie Policy
					</h1>
					<p className="text-gray-600 text-lg">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				{/* Content */}
				<div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
					{/* What Are Cookies */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Info className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">What Are Cookies?</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their site.
						</p>
					</section>

					{/* How We Use Cookies */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Settings className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">How We Use Cookies</h2>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							CourseInsight uses cookies to enhance your experience on our platform. Here's how we use them:
						</p>
						
						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Cookies</h3>
								<div className="bg-blue-50 p-4 rounded-lg">
									<p className="text-gray-700 leading-relaxed">
										These cookies are necessary for the website to function properly. They enable core functionality such as:
									</p>
									<ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
										<li>User authentication and login sessions</li>
										<li>Security features and CSRF protection</li>
										<li>Basic website functionality</li>
										<li>Remembering your preferences and settings</li>
									</ul>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-3">Functional Cookies</h3>
								<div className="bg-green-50 p-4 rounded-lg">
									<p className="text-gray-700 leading-relaxed">
										These cookies help us provide enhanced functionality and personalization:
									</p>
									<ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
										<li>Remembering your course preferences</li>
										<li>Storing your filter and search settings</li>
										<li>Maintaining your theme preferences</li>
										<li>Language and regional settings</li>
									</ul>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
								<div className="bg-purple-50 p-4 rounded-lg">
									<p className="text-gray-700 leading-relaxed">
										These cookies help us understand how students use our platform:
									</p>
									<ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
										<li>Tracking popular courses and features</li>
										<li>Understanding user navigation patterns</li>
										<li>Measuring platform performance</li>
										<li>Identifying areas for improvement</li>
									</ul>
									<p className="text-sm text-gray-600 mt-2">
										<strong>Note:</strong> All analytics data is anonymized and used solely for improving the platform experience.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Third-Party Cookies */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Globe className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Third-Party Cookies</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							CourseInsight may use third-party services that place cookies on your device. These services include:
						</p>
						<ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
							<li><strong>Google Fonts:</strong> For displaying custom fonts (if applicable)</li>
							<li><strong>CDN Services:</strong> For faster content delivery</li>
							<li><strong>Security Services:</strong> For protecting against malicious attacks</li>
						</ul>
						<p className="text-gray-700 leading-relaxed mt-4">
							We carefully evaluate all third-party services to ensure they meet our privacy standards and are necessary for platform functionality.
						</p>
					</section>

					{/* Managing Cookies */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<RefreshCw className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Managing Your Cookies</h2>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							You have control over how cookies are used on your device:
						</p>
						
						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Browser Settings</h3>
								<p className="text-gray-700 leading-relaxed">
									Most web browsers allow you to control cookies through their settings. You can:
								</p>
								<ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
									<li>Block all cookies</li>
									<li>Allow only first-party cookies</li>
									<li>Delete existing cookies</li>
									<li>Receive notifications when cookies are set</li>
								</ul>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Impact of Disabling Cookies</h3>
								<div className="bg-amber-50 p-4 rounded-lg">
									<p className="text-amber-800 leading-relaxed">
										<strong>Please note:</strong> Disabling essential cookies may affect your ability to use certain features of CourseInsight, including logging in, maintaining your session, and accessing personalized content.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Cookie Retention */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Shield className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Cookie Retention</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							Different cookies have different lifespans:
						</p>
						<ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
							<li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
							<li><strong>Persistent Cookies:</strong> Remain for a specific period (usually 30 days to 1 year)</li>
							<li><strong>Preference Cookies:</strong> Stored until you change your settings</li>
						</ul>
					</section>

					{/* Updates to Cookie Policy */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<RefreshCw className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Updates to This Policy</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any material changes by posting the new policy on this page.
						</p>
					</section>

					{/* Contact Information */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Info className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Questions About Cookies</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							If you have any questions about our use of cookies or this Cookie Policy, please contact the IEOR Council or reach out through our platform's support channels.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default CookiePolicyPage;