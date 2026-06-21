/**
 * Single source of truth for all portfolio content.
 * Edit this file to personalize the portfolio — no component changes needed.
 */
import image from '../assets/WhatsApp Image 2026-06-19 at 22.19.56.jpeg'

export const PROFILE = {
  name: "Sakshi Arya",
  role: "UI/UX Designer",
  tagline: "Where creativity meets function",
  location: "India",
  email: "sakshi2.2004@gmail.com",
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
    { label: "Instagram", icon: "Instagram", url: "https://www.behance.net/sakshiarya8" },
    { label: "LinkedIn", icon: "LinkedIn", url: " https://www.linkedin.com/in/arya-sakshi02/" },
  ],
};

export const ABOUT = {
  heading: "About me",
  // Neutral copy that works for freshers and experienced designers alike.
 paragraphs: [
"I'm Sakshi Arya, a UI/UX designer with a background in Fashion and Textile Design from NIFT Hyderabad.",

"I bring a creative eye and a research-driven approach to every project, focusing not only on how things look but also on how they work for the people using them.",

"My experience spans knitwear design, graphic design, user research, and merchandising, giving me a unique perspective when solving design challenges. I'm currently focused on creating meaningful digital experiences through UI/UX design and am always looking for opportunities to build products that make a real difference."
]
,
  // Optional — leave the array empty [] to hide this block (e.g. if you're a
  // fresher with no metrics yet). Fresher examples are shown below.
  stats: [
    { value: "Fresher", label: "Open to opportunities" },
    // { value: "10+", label: "Practice projects" },
    { value: "100%", label: "Passion for design" },
  ],
};

/**
 * Education — especially useful for freshers / students.
 * Leave the array empty [] to hide this section.
 */
export const EDUCATION = [
  {
    degree: "B.Des in Knitwear Design",
    school: "NIFT Hyderabad",
    year: "2022 – 2026",
    detail:
      "Relevant coursework: Fashion Design, User Research, Graphic Design, Textile Studies.",
  },
];

/**
 * Certifications / courses — great for freshers to show initiative.
 * Leave empty [] to hide.
 */
export const CERTIFICATIONS = [
  {
    name: "Google Project Management Certificate",
    issuer: "Google",
    year: "2025",
  },
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
  { step: "03", title: "Design", desc: "Craft high-fidelity UI screens with a consistent style guide and real content." },
  { step: "04", title: "Deliver", desc: "Prototype, test, and hand off polished, dev-ready designs." },
];

export const PROJECTS = [
  {
    title: "Graduation Project - ABFRL",
    category: " Apparel design • Graphic",
    description: "Assisted in seasonal range building for the kidswear department - from market research and mood boarding to tech pack inputs and in - store visual references.",
    tags: [],
    color: "from-violet-500 to-indigo-600",
    url: "https://canva.link/x6njik4v6jzo5ct",
  },
  {
    title: "Summer internship",
    category: " Merchandising . Graphics",
    description: "Assisted in merchandising operations at Bragiyomi Exports Pvt. Ltd. — coordinating with buyers, tracking orders, and supporting export documentation and sample follow-ups.",
    tags: [],
    color: "from-rose-400 to-pink-600",
    url: "https://canva.link/g13tv6tyiglv05f",
  },
  {
    title: "Personal Finance & Wallet App",
    category: " UX/UI · FINANCE APP",
    description: "Designed a dark-mode mobile banking app covering balance overview, card management, and spending statistics — focused on clarity and visual hierarchy.",
    tags: [],
    color: "from-amber-400 to-orange-600",
    url: "https://www.figma.com/design/2zbxXhjOEoUdcgMf1tsV5R/App-ui?m=auto&t=OeLl1nZ9BTLfo6c7-6",
  },
  {
    title: " Travel Landing Page",
    category: "UI . WEB DESIGN",
    description: "Designed a dark-themed travel landing page featuring destination highlights, search functionality, and key trust metrics.",
    tags: [],
    color: "from-emerald-400 to-teal-600",
    url: "https://www.figma.com/design/E9hIxmPaGXA9Vzd0k6CA8m/Web?m=auto&t=OeLl1nZ9BTLfo6c7-1",
  },
   {
    title: "Travel Discovery Landing Page",
    category: "UI . WEB DESIGN",
    description: "Designed a light-themed travel landing page with category browsing, destination cards, social proof, and a newsletter signup — focused on clean layout and user flow.",
    tags: [],
    color: "from-emerald-400 to-teal-600",
    url: "https://www.figma.com/design/Xzv8SeF9hrMG4EsE54KuKU/ux-ui-designer-portfolio--Community-?node-id=0-1&t=WCoQEfmKNb8mUn6H-1",
  },
];

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
