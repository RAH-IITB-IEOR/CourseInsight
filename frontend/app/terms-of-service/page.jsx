import React from "react";
import { FileText, AlertTriangle, Users, Shield, Gavel, BookOpen } from "lucide-react";

const TermsOfServicePage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
			<div className="max-w-4xl mx-auto px-6 py-12">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
							<FileText className="w-8 h-8 text-white" />
						</div>
					</div>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
						Terms of Service
					</h1>
					<p className="text-gray-600 text-lg">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				{/* Important Notice */}
				<div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
					<div className="flex items-start gap-3">
						<AlertTriangle className="w-6 h-6 text-amber-600 mt-1" />
						<div>
							<h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
							<p className="text-amber-700 leading-relaxed">
								<strong>CourseInsight is NOT an official platform of IIT Bombay or the IEOR Department.</strong> This is a student-developed platform created to facilitate course discussions and reviews within the IEOR community. It is not endorsed, sponsored, or officially recognized by IIT Bombay administration.
							</p>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
					{/* Acceptance of Terms */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Gavel className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Acceptance of Terms</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							By accessing and using CourseInsight, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
						</p>
					</section>

					{/* Platform Purpose */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<BookOpen className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Platform Purpose</h2>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							CourseInsight is designed to:
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Facilitate course discussions among IEOR students</li>
							<li>Provide a platform for sharing course reviews and experiences</li>
							<li>Help students make informed decisions about course selection</li>
							<li>Foster academic collaboration within the IEOR community</li>
						</ul>
					</section>

					{/* User Responsibilities */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Users className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">User Responsibilities</h2>
						</div>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Provide accurate and honest information</li>
							<li>Respect the privacy and dignity of fellow students and faculty</li>
							<li>Maintain academic integrity in all interactions</li>
							<li>Use the platform solely for educational purposes</li>
							<li>Report any inappropriate content or behavior</li>
							<li>Comply with IIT Bombay's code of conduct</li>
						</ul>
					</section>

					{/* Prohibited Activities */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Shield className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Prohibited Activities</h2>
						</div>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>Posting false, misleading, or defamatory content</li>
							<li>Harassment, discrimination, or inappropriate behavior</li>
							<li>Sharing solutions to assignments or exam questions</li>
							<li>Violating academic integrity policies</li>
							<li>Attempting to hack or compromise the platform</li>
							<li>Using the platform for commercial purposes</li>
						</ul>
					</section>

					{/* Content Ownership */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<FileText className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Content Ownership</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							Users retain ownership of their original content but grant CourseInsight a non-exclusive license to use, modify, and display such content for the platform's educational purposes. Course information and academic data remain the property of IIT Bombay.
						</p>
					</section>

					{/* Disclaimer */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<AlertTriangle className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Disclaimer</h2>
						</div>
						<div className="space-y-4">
							<p className="text-gray-700 leading-relaxed">
								CourseInsight is provided "as is" without any representations or warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of any information on the platform.
							</p>
							<p className="text-gray-700 leading-relaxed">
								<strong>Academic Disclaimer:</strong> Course reviews and discussions are personal opinions and may not reflect the official position of instructors or the department. Always consult official sources for authoritative information.
							</p>
						</div>
					</section>

					{/* Limitation of Liability */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Shield className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							CourseInsight and its developers shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this platform.
						</p>
					</section>

					{/* Modifications */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<FileText className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Modifications</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of modified terms.
						</p>
					</section>

					{/* Contact Information */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Users className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							For questions about these Terms of Service, please contact the IEOR Council through appropriate channels. Remember that this is a student-run platform and not an official IIT Bombay service.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default TermsOfServicePage;