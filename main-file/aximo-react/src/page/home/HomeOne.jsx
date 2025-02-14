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
			"Cognir AI provides AI solutions for transportation. ANPR automatically recognizes vehicle license plates, Vehicle Counting tracks and analyzes traffic, and Parking Lot Occupancy detects parking availability. This technology enhances security, efficiency, and data-driven decision-making.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Manifacture",
		description:
			"Cognir AI enhances manufacturing with AI-driven solutions. Danger zone identification detects hazardous areas, preventing workplace accidents. Object counting automates production line counting, ensuring accuracy and efficiency. Defect detection identifies product defects in real-time, improving quality control. These solutions boost safety, efficiency, and cost savings in manufacturing.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Security",
		description:
			"Cognir AI enhances security with AI-driven solutions. People counting ensures accurate crowd management, improving safety and efficiency. Fight and riot detection enables real-time monitoring, preventing incidents and enhancing public security. Fake news detection analyzes digital content to identify misinformation, ensuring reliable information flow. These solutions optimize security, reduce risks, and support better decision-making.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Market",
		description:
			"Cognir AI enhances market intelligence with AI-driven solutions. Customer behavior analysis provides insights into movement patterns, time spent, and product interactions, optimizing store layouts and marketing strategies. Product detection automates inventory tracking, ensuring accuracy and reducing operational inefficiencies. These AI solutions improve decision-making, boost sales, and enhance customer experience.",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Health",
		description:
			"Cognir AI provides AI-based health solutions to enhance efficiency and accessibility. Toga Care monitors family medicinal plants, OptiLens enables early cataract detection, the Mental Health Chatbot offers emotional support, and the AI Health Assistant aids in daily health management. These innovations optimize healthcare through automation and data analysis.",
			icon: "icon-design-tools"
	},
	{
		id: crypto.randomUUID(),
		title: "E-commerce",
		description:
			"Cognir AI provides AI-based Sentiment Analysis using NLP to automatically assess customer sentiment in e-commerce, classifying reviews as positive, negative, or neutral while identifying key topics and emotions. It integrates with platforms like Shopify and Shopee, providing automated reports for data-driven decisions. By enhancing customer satisfaction, improving operational efficiency, and identifying opportunities for better products and services, it helps businesses boost sales and loyalty.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "HRD (Human Resource Development)",
		description:
			"Cognir AI provides AI-based HR solutions to streamline recruitment through automated CV screening, job description matching, and candidate ranking using NLP. It extracts key details from CVs, matches candidates with job requirements, and ranks them objectively, reducing bias and improving efficiency. Integrated with Applicant Tracking Systems, it enhances recruitment accuracy, accelerates hiring, and ensures better candidate-job alignment, leading to cost savings and improved employee satisfaction.",
			icon: "icon-web"
	},
	{
		id: crypto.randomUUID(),
		title: "Meeting",
		description:
			"Cognir AI provides AI-powered meeting solutions with automatic meeting minutes using NLP, enabling real-time transcription, summarization, speaker identification, and key point extraction. Integrated with platforms like Zoom and Google Meet, it ensures accurate documentation of discussions, decisions, and follow-ups. By reducing manual effort, enhancing accuracy, and improving meeting productivity, it allows participants to focus on discussions while ensuring effective follow-ups and streamlined workflows.",
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
