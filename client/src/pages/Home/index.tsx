import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Client from "./components/Client";
import Gallery from "./components/Gallery";
import TeamMembers from "./components/TeamMembers";
import Offer from "./components/Offer";
import TimeSchedule from "./components/TimeSchedule";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
	const [nav, setNav] = useState(false);

	window.addEventListener("scroll", () => {
		const scroll = document.documentElement.scrollTop;
		if (scroll > 405) {
			setNav(true);
		} else {
			setNav(false);
		}
	});

	return (
		<>
			<Navbar nav={nav} />
			<HeroSection />
			<About />
			<Services />
			<Client />
			<Gallery />
			<TeamMembers />
			<Offer />
			<TimeSchedule />
			<Contact />
			<Blog />
			<Footer nav={nav} />
		</>
	);
}
