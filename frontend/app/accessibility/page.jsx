import React from "react";
import { Accessibility, Eye, Keyboard, MousePointer, Volume2, Palette, Monitor } from "lucide-react";

const AccessibilityPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
			<div className="max-w-4xl mx-auto px-6 py-12">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
							<Accessibility className="w-8 h-8 text-white" />
						</div>
					</div>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
						Accessibility Statement
					</h1>
					<p className="text-gray-600 text-lg">
						Last updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				{/* Content */}
				<div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
					{/* Commitment */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Accessibility className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							CourseInsight is committed to ensuring digital accessibility for all students, including those with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and continuously work to improve the accessibility of our platform.
						</p>
					</section>

					{/* Accessibility Features */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Eye className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Accessibility Features</h2>
						</div>
						
						<div className="grid md:grid-cols-2 gap-6">
							<div className="bg-blue-50 p-6 rounded-lg">
								<div className="flex items-center gap-3 mb-3">
									<Keyboard className="w-5 h-5 text-blue-600" />
									<h3 className="text-lg font-semibold text-gray-800">Keyboard Navigation</h3>
								</div>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>Full keyboard accessibility</li>
									<li>Logical tab order</li>
									<li>Visible focus indicators</li>
									<li>Skip navigation links</li>
								</ul>
							</div>

							<div className="bg-green-50 p-6 rounded-lg">
								<div className="flex items-center gap-3 mb-3">
									<Eye className="w-5 h-5 text-green-600" />
									<h3 className="text-lg font-semibold text-gray-800">Visual Accessibility</h3>
								</div>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>High contrast color schemes</li>
									<li>Scalable text and interface</li>
									<li>Clear visual hierarchy</li>
									<li>Alternative text for images</li>
								</ul>
							</div>

							<div className="bg-purple-50 p-6 rounded-lg">
								<div className="flex items-center gap-3 mb-3">
									<Volume2 className="w-5 h-5 text-purple-600" />
									<h3 className="text-lg font-semibold text-gray-800">Screen Reader Support</h3>
								</div>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>Semantic HTML structure</li>
									<li>ARIA labels and descriptions</li>
									<li>Descriptive link text</li>
									<li>Proper heading hierarchy</li>
								</ul>
							</div>

							<div className="bg-amber-50 p-6 rounded-lg">
								<div className="flex items-center gap-3 mb-3">
									<MousePointer className="w-5 h-5 text-amber-600" />
									<h3 className="text-lg font-semibold text-gray-800">Motor Accessibility</h3>
								</div>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>Large clickable areas</li>
									<li>Drag and drop alternatives</li>
									<li>Sufficient time limits</li>
									<li>Easy-to-reach controls</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Supported Technologies */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Monitor className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Supported Technologies</h2>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							CourseInsight is designed to work with the following assistive technologies:
						</p>
						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Screen Readers</h3>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>NVDA (Windows)</li>
									<li>JAWS (Windows)</li>
									<li>VoiceOver (macOS/iOS)</li>
									<li>TalkBack (Android)</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Browsers</h3>
								<ul className="list-disc list-inside text-gray-700 space-y-1">
									<li>Chrome (recommended)</li>
									<li>Firefox</li>
									<li>Safari</li>
									<li>Edge</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Customization Options */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Palette className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Customization Options</h2>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							You can customize your experience on CourseInsight:
						</p>
						<div className="bg-gray-50 p-6 rounded-lg">
							<ul className="list-disc list-inside text-gray-700 space-y-2">
								<li><strong>Browser Zoom:</strong> Use your browser's zoom feature (Ctrl/Cmd + Plus/Minus) to increase text size</li>
								<li><strong>High Contrast:</strong> Enable high contrast mode in your operating system</li>
								<li><strong>Reduced Motion:</strong> Disable animations using your system's reduce motion settings</li>
								<li><strong>Voice Control:</strong> Use voice navigation software with our platform</li>
								<li><strong>Custom CSS:</strong> Apply custom stylesheets through browser extensions</li>
							</ul>
						</div>
					</section>

					{/* Known Limitations */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Monitor className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Known Limitations</h2>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							While we strive for full accessibility, we acknowledge some current limitations:
						</p>
						<div className="bg-amber-50 p-6 rounded-lg">
							<ul className="list-disc list-inside text-amber-800 space-y-2">
								<li>Some third-party embedded content may not be fully accessible</li>
								<li>Complex interactive elements may require additional keyboard shortcuts</li>
								<li>Some PDF documents may not be screen reader compatible</li>
								<li>Color-coding in certain charts may need additional labels</li>
							</ul>
							<p className="text-amber-800 mt-4 font-medium">
								We are actively working to address these limitations in future updates.
							</p>
						</div>
					</section>

					{/* Feedback and Support */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Volume2 className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Feedback and Support</h2>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							We welcome your feedback on the accessibility of CourseInsight. Please let us know if you encounter accessibility barriers:
						</p>
						<div className="bg-blue-50 p-6 rounded-lg">
							<ul className="list-disc list-inside text-blue-800 space-y-2">
								<li>Contact the IEOR Council through official channels</li>
								<li>Report specific accessibility issues you encounter</li>
								<li>Suggest improvements to our accessibility features</li>
								<li>Request alternative formats for content</li>
							</ul>
						</div>
						<p className="text-gray-700 leading-relaxed mt-4">
							We aim to respond to accessibility feedback within 3 business days and will work to resolve issues as quickly as possible.
						</p>
					</section>

					{/* Assessment and Testing */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Eye className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Assessment and Testing</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							CourseInsight's accessibility is evaluated through:
						</p>
						<ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
							<li>Automated accessibility testing tools</li>
							<li>Manual testing with assistive technologies</li>
							<li>User testing with students who have disabilities</li>
							<li>Regular accessibility audits</li>
							<li>Compliance checks against WCAG 2.1 guidelines</li>
						</ul>
					</section>

					{/* Continuous Improvement */}
					<section>
						<div className="flex items-center gap-3 mb-4">
							<Accessibility className="w-6 h-6 text-blue-600" />
							<h2 className="text-2xl font-bold text-gray-800">Continuous Improvement</h2>
						</div>
						<p className="text-gray-700 leading-relaxed">
							Accessibility is an ongoing effort. We regularly review and update our platform to ensure it remains accessible to all users. Our commitment includes staying current with accessibility standards, implementing user feedback, and proactively identifying and addressing barriers.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AccessibilityPage;