import React from "react";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Youtube,
	ExternalLink,
	Calendar,
	Users,
	Award,
	BookOpen,
} from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: "About IEOR", href: "#" },
		{ name: "Council Members", href: "#" },
		{ name: "Events", href: "#" },
		{ name: "Academics", href: "#" },
		{ name: "Placements", href: "#" },
		{ name: "Research", href: "#" },
		{ name: "Alumni", href: "#" },
		{ name: "Contact", href: "#" },
	];

	const resources = [
		{ name: "Academic Calendar", href: "#" },
		{ name: "Course Materials", href: "#" },
		{ name: "Student Portal", href: "#" },
		{ name: "Library", href: "#" },
		{ name: "Career Services", href: "#" },
		{ name: "Internships", href: "#" },
		{ name: "Scholarships", href: "#" },
		{ name: "Student Handbook", href: "#" },
	];

	const socialLinks = [
		{ icon: Facebook, href: "#", label: "Facebook" },
		{ icon: Twitter, href: "#", label: "Twitter" },
		{ icon: Instagram, href: "#", label: "Instagram" },
		{ icon: Linkedin, href: "#", label: "LinkedIn" },
		{ icon: Youtube, href: "#", label: "YouTube" },
	];

	const achievements = [
		{ icon: Users, number: "500+", label: "Active Students" },
		{ icon: Award, number: "95%", label: "Placement Rate" },
		{ icon: Calendar, number: "50+", label: "Annual Events" },
		{ icon: BookOpen, number: "20+", label: "Research Projects" },
	];

	return (
		<footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
			<div className="border-t border-gray-700 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-gray-400 text-sm">
							© {currentYear} IEOR Council. All rights reserved.
						</div>
						<div className="flex items-center space-x-6 text-sm">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Cookie Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Accessibility
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
