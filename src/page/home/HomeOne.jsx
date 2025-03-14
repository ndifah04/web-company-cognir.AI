import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";
import Team5Img from "../../assets/images/team/team5.png";
import Team6Img from "../../assets/images/team/team6.png";
import Team7Img from "../../assets/images/team/team7.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Transportation",
		description:
			"Optimize routes, minimize delays, and track logistics in real-time with our intelligent AI solutions.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Manifacture",
		description:
			"Increase efficiency with AI-driven automation, predictive analytics, and seamless quality control.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Security",
		description:
			"Protect your assets with AI-enhanced surveillance, facial recognition, and proactive risk management.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Market",
		description:
			"Stay ahead of trends with AI-powered forecasting, demand analysis, and customer insights",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Health",
		description:
			"Improve patient care through AI-assisted diagnostics, personalized treatment plans, and automated health data management",
		icon: "icon-design-tools"
	},
	{
		id: crypto.randomUUID(),
		title: "E-commerce",
		description:
			"Boost conversions with AI-driven recommendations, interactive chatbots, and dynamic pricing models.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Human Resource Development",
		description:
			"Transform workforce management with AI-driven recruitment, performance tracking, and career development insights.",
		icon: "icon-web"
	},
	{
		id: crypto.randomUUID(),
		title: "Meeting",
		description:
			"Elevate productivity with AI-powered scheduling, live transcription, and sentiment analysis for impactful discussions.",
		icon: "icon-design-thinking"
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Nurman Awaluddin",
		designation: "Chief Executive Officer - CEO",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Nurmisba",
		designation: "Chief Financial Officer - CFO",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Salsabila Putri",
		designation: "AI Engineer (LLM Specialist)",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Galbi Nadifah",
		designation: "Backend API Engineer",
		img: Team4Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Ahmad Faisal",
		designation: "Business Development Manager",
		img: Team5Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Windu Yoga Nugraha",
		designation: "Digital Content Creator",
		img: Team6Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Ahmad Syauki",
		designation: "Generative AI Engineer",
		img: Team7Img,
	},

];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
