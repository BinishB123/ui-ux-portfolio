/**
 * Single source of truth for all portfolio content.
 * Edit this file to personalize the portfolio — no component changes needed.
 */
import image from '../assets/WhatsApp Image 2026-06-19 at 22.19.56.jpeg'

export const PROFILE = {
  name: "Your Name",
  role: "UI/UX Designer",
  tagline: "I design clean, human-centered digital experiences that are a joy to use.",
  location: "Australia",
  email: "hello@yourname.com",
  resumeUrl: "#",
  // Drop the designer's photo in /public (e.g. /designer.jpg) and set the path here.
  // Leave "" to show a styled placeholder with initials.
  photo: image,
  // Small badge on the hero photo. Set to null to hide it.
  //   Experienced → { value: "5+", label: "years exp." }
  //   Fresher     → { value: "Open", label: "to work" }  (or null)
  experience: { value: "Open", label: "to work" },
  // icon must match a key in the ICONS map in Contact.jsx
  socials: [
    { label: "Instagram", icon: "Instagram", url: "#" },
    { label: "LinkedIn", icon: "LinkedIn", url: "#" },
  ],
};

export const ABOUT = {
  heading: "About me",
  // Neutral copy that works for freshers and experienced designers alike.
  paragraphs: [
    "I'm a UI/UX designer focused on turning ideas into simple, elegant, and accessible interfaces. I care deeply about the details — spacing, typography, motion, and the little moments that make a product feel right.",
    "My approach blends research, wireframing, and rapid prototyping to create designs that look great and are intuitive to use. I'm always learning, exploring new tools, and eager to grow through real-world challenges.",
  ],
  // Optional — leave the array empty [] to hide this block (e.g. if you're a
  // fresher with no metrics yet). Fresher examples are shown below.
  stats: [
    { value: "Fresher", label: "Open to opportunities" },
    { value: "10+", label: "Practice projects" },
    { value: "100%", label: "Passion for design" },
  ],
};

/**
 * Education — especially useful for freshers / students.
 * Leave the array empty [] to hide this section.
 */
export const EDUCATION = [
  {
    degree: "B.Des / B.Tech / Diploma in Design",
    school: "Your University / College",
    year: "2022 – 2026",
    detail: "Relevant coursework: UX Research, Visual Design, HCI, Prototyping.",
  },
];

/**
 * Certifications / courses — great for freshers to show initiative.
 * Leave empty [] to hide.
 */
export const CERTIFICATIONS = [
  { name: "Google UX Design Certificate", issuer: "Coursera", year: "2025" },
  { name: "Figma Essentials", issuer: "Online", year: "2025" },
];

export const SKILLS = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Figma",
  "Interaction Design",
  "Usability Testing",
  "Responsive Design",
  "Accessibility",
  "Branding",
];

export const PROCESS = [
  { step: "01", title: "Discover", desc: "Research users, goals, and constraints to frame the right problem." },
  { step: "02", title: "Define", desc: "Turn insights into flows, information architecture, and wireframes." },
  { step: "03", title: "Design", desc: "Craft high-fidelity UI, interactions, and a scalable design system." },
  { step: "04", title: "Deliver", desc: "Prototype, test, and hand off polished, dev-ready designs." },
];

export const PROJECTS = [
  {
    title: "Finance App Redesign",
    category: "Mobile · UX/UI",
    description: "Reimagined a banking app's onboarding and dashboard, cutting drop-off by 32%.",
    tags: ["Mobile", "Fintech", "Design System"],
    color: "from-violet-500 to-indigo-600",
    url: "#",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web · Product Design",
    description: "Designed a data-heavy dashboard that's still calm, scannable, and fast to learn.",
    tags: ["Web", "B2B", "Data Viz"],
    color: "from-rose-400 to-pink-600",
    url: "#",
  },
  {
    title: "E-commerce Experience",
    category: "Web · UX",
    description: "End-to-end shopping flow with a frictionless checkout and bold product storytelling.",
    tags: ["E-commerce", "Branding"],
    color: "from-amber-400 to-orange-600",
    url: "#",
  },
  {
    title: "Health & Wellness App",
    category: "Mobile · UI",
    description: "A warm, motivating habit-tracker with delightful micro-interactions.",
    tags: ["Mobile", "Health"],
    color: "from-emerald-400 to-teal-600",
    url: "#",
  },
];

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
