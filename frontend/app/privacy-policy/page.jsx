import React from "react";
import { Shield, Eye, Database, Users, FileText, Globe } from "lucide-react";

const PrivacyPolicyPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
			<div className="max-w-4xl mx-auto px-6 py-12">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
							<Shield className="w-8 h-8 text-white" />
						</div>
					</div>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
						Privacy Policy
					</h1>
					<p className="text-gray-600 text-lg">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				{/* Content */}
				<div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
					{/* Introduction */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Eye className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							CourseInsight is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational platform designed for the IEOR department at IIT Bombay.
						</p>
					</section>

					{/* Information We Collect */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Database className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
						</div>
						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>Roll number and academic details</li>
									<li>Email address</li>
									<li>Program and department information</li>
									<li>Course enrollment and academic records</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Usage Information</h3>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>Course reviews and ratings</li>
									<li>Comments and discussions</li>
									<li>Platform usage patterns</li>
									<li>Device and browser information</li>
								</ul>
							</div>
						</div>
					</section>

					{/* How We Use Your Information */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Users className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
						</div>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>To provide and maintain our educational platform</li>
							<li>To facilitate course discussions and reviews</li>
							<li>To improve our services and user experience</li>
							<li>To communicate important updates and announcements</li>
							<li>To ensure platform security and prevent misuse</li>
						</ul>
					</section>

					{/* Data Sharing */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Globe className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Data Sharing</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							We do not sell, trade, or otherwise transfer your personal information to third parties. Information may be shared with IEOR department faculty and administration for academic purposes only, and always in accordance with IIT Bombay's data protection policies.
						</p>
					</section>

					{/* Data Security */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Shield className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
						</p>
					</section>

					{/* Your Rights */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<FileText className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
						</div>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Access your personal information</li>
							<li>Correct inaccurate information</li>
							<li>Request deletion of your data</li>
							<li>Withdraw consent for data processing</li>
							<li>Contact us with privacy concerns</li>
						</ul>
					</section>

					{/* Contact Information */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Users className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							If you have any questions about this Privacy Policy, please contact the IEOR Council at IIT Bombay or reach out through our platform's contact channels.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicyPage;