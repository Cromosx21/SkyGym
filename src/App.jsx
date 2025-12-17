import React from "react";
import { MessageCircle } from "lucide-react";
import { Navbar, Footer } from "./components/Ui.jsx"; // Extensión .jsx agregada
import {
	HeroSection,
	PartnersSection,
	ServicesSection,
	EnvironmentsSection,
	TestimonialsSection,
	PricingSection,
} from "./sections/StaticSections.jsx"; // Extensión .jsx agregada
import { ContactSection } from "./sections/ContactSection.jsx"; // Extensión .jsx agregada

const App = () => {
	return (
		<div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-[#FFD700] selection:text-black">
			<Navbar />

			<main>
				<HeroSection />
				<PartnersSection />
				<ServicesSection />
				<EnvironmentsSection />
				<TestimonialsSection />
				<PricingSection />
				<ContactSection />
			</main>

			<div className="fixed bottom-6 right-6 z-50">
				<a
					href="https://wa.me/+51969673200"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition inline-flex items-center justify-center"
				>
					<MessageCircle size={24} />
				</a>
			</div>

			<Footer />
		</div>
	);
};

export default App;
