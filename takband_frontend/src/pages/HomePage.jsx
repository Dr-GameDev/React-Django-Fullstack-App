import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
}
