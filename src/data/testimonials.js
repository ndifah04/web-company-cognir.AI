import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import { StaticImageData } from "next/image";

export const testimonials = [
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const useCases = [
  {
    // SEO Optimization Case
    text: "Our organic traffic grew 300% in 3 months with AI-powered keyword clustering",
    title: "Founder @ Pulse (Digital Marketing Agency)",
    avatarImg: avatar2,
    icon: "LineChart", // Lucide: "LineChart"
    industry: "Marketing Tech",
  },
  {
    // Project Management Case
    text: "AI task prioritization reduced our project delivery time by 40%",
    title: "Director @ Quantum (SaaS Platform)",
    avatarImg: avatar1,
    icon: "Timer", // Lucide: "Timer"
    industry: "Productivity Software",
  },
  {
    // UX Improvement Case
    text: "AI heatmap analysis helped us redesign our checkout flow, boosting conversions by 22%",
    title: "Product Lead @ Innovate (E-commerce)",
    avatarImg: avatar3,
    icon: "MousePointerClick", // Lucide: "MousePointerClick"
    industry: "Retail Tech",
    result: "$1.2M incremental revenue"
  },
  {
    // Enterprise Productivity Case
    text: "Automated document processing cut our ops team's manual work by 75%",
    title: "CTO @ Tech Solutions (Fintech)",
    avatarImg: avatar4,
    icon: "Bot", // Lucide: "Bot"
    industry: "Financial Services",
  }
];