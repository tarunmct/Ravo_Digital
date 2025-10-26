import React from "react";
import { motion } from "framer-motion";

// --- ICON DEFINITIONS ---
// Icon for Core Pillars (NEW: Sparkles for a more attractive look)
const SparklesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4L12 6L14 4L12 2L10 4Z" />
    <path d="M21 3L22 4L21 5L20 4L21 3Z" />
    <path d="M20 20L22 22L24 20L22 18L20 20Z" />
    <path d="M12 21L14 23L16 21L14 19L12 21Z" />
    <path d="M2 10L4 12L2 14L0 12L2 10Z" />
    <path d="M16.5 13.5L18 15L16.5 16.5L15 15L16.5 13.5Z" />
    <path d="M5.5 17.5L7 19L5.5 20.5L4 19L5.5 17.5Z" />
    <path d="M8 8L10 10L8 12L6 10L8 8Z" />
    <path d="M17 6L19 8L17 10L15 8L17 6Z" />
  </svg>
);

// Icons for Technology Stack (MERN & Cloud)
const DatabaseIcon = (props) => ( /* MongoDB */
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    <path d="M3 12a9 3 0 0 0 18 0" />
  </svg>
);
const CodeIcon = (props) => ( /* Express.js */
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 18l-6-6 6-6" />
    <path d="M8 6l-6 6 6 6" />
  </svg>
);
const AtomIcon = (props) => ( /* React */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2A10 10 0 0 0 5.41 5.41M12 2a10 10 0 0 1 6.59 3.41M12 2v20M22 12H2M5.41 5.41A10 10 0 0 0 2 12M5.41 18.59A10 10 0 0 0 2 12M18.59 5.41A10 10 0 0 1 22 12M18.59 18.59A10 10 0 0 1 22 12" />
  </svg>
);
const LightningIcon = (props) => ( /* Node.js */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const CloudIcon = (props) => ( /* AWS/Azure */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);
const BrainIcon = (props) => ( /* Python/AI */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
    <path d="M12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
    <path d="M16 8v8M8 8v8" />
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
  </svg>
);

// Icons for Industries We Serve
const ShoppingCartIcon = (props) => ( /* E-commerce & Retail */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const HeartIcon = (props) => ( /* Healthcare & Fitness */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .55-4.5 2-1.5-1.45-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4.04 3 5.5l7 7Z" />
  </svg>
);
const BookOpenIcon = (props) => ( /* Education & Coaching */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 17l10 5 10-5V4l-10-5-10 5zM12 2v20M22 4l-10 5M12 9l-10-5" />
  </svg>
);
const HomeIcon = (props) => ( /* Real Estate & Hospitality */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12H2l10-10 10 10h-3" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    <path d="M9 22v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
  </svg>
);
const CpuIcon = (props) => ( /* Technology & SaaS Companies */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M15 2v2M15 20v2M2 9h2M20 9h2M4 15h2M20 15h2M9 2v2M9 20v2" />
  </svg>
);
const BriefcaseIcon = (props) => ( /* Professional Services */
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);


// --- GRAPHIC COMPONENT ---
// Inline SVG for the Phone/Gears Graphic with Animation
const HeroGraphic = () => (
  <motion.div
    className="relative p-4"
    animate={{
      y: [0, -15, 0], // Float up and down
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg
      className="w-64 h-auto mx-auto"
      viewBox="0 0 300 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Phone Body */}
      <rect
        x="50"
        y="20"
        width="200"
        height="410"
        rx="20"
        fill="#f5f5f5"
        stroke="#000"
        strokeWidth="4"
      />
      {/* Screen */}
      <rect x="65" y="40" width="170" height="370" rx="10" fill="#fff" />

      {/* Gears */}
      {/* Central Gear */}
      <motion.circle
        cx="150" cy="220" r="40" fill="#facc15"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="150" cy="220" r="15" fill="#fff"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Smaller Gear 1 */}
      <motion.circle
        cx="210" cy="280" r="25" fill="#d1d5db"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="210" cy="280" r="10" fill="#000"
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Smaller Gear 2 */}
      <motion.circle
        cx="90" cy="180" r="30" fill="#9ca3af"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="90" cy="180" r="12" fill="#000"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </svg>
    <div className="text-sm text-center text-gray-600 mt-2">
      Mobile & Web Development
    </div>
  </motion.div>
);

// --- PILLARS SECTION (ENHANCED DESIGN - NOW WITH WHITE BG) ---
const pillars = [
    { icon: SparklesIcon, title: "Custom Software Solutions", description: "Architecting bespoke applications that align perfectly with your complex business workflows." },
    { icon: SparklesIcon, title: "Next-Gen UI/UX Design", description: "Creating stunning, intuitive user interfaces focused on accessibility and maximizing user retention." },
    { icon: SparklesIcon, title: "Cloud & Scalability", description: "Building highly-available, performance-driven systems using leading cloud infrastructure (AWS/Azure)." },
    { icon: SparklesIcon, title: "Rapid Agile Delivery", description: "Utilizing iterative development cycles for fast deployment, continuous improvement, and reduced time-to-market." },
];

const PillarsSection = () => (
    <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">
                The Pillars of Our Development
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={index}
                        // Changed background to white, and added a robust shadow
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-b-4 border-yellow-500 flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
                        // Changed hover effect to a simple lift and slight shadow increase
                        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-indigo-900 mb-4 shadow-xl border-4 border-yellow-300">
                            <pillar.icon className="w-8 h-8" />
                        </div>
                        {/* Text color changed to dark gray for contrast on white background */}
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                            {pillar.title}
                        </h3>
                        {/* Description color changed to standard gray for contrast */}
                        <p className="text-gray-600 text-sm">
                            {pillar.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);


// --- TECHNOLOGY STACK SECTION ---
const techStack = [
    { name: "MongoDB", icon: DatabaseIcon, color: "text-green-400" },
    { name: "Express.js", icon: CodeIcon, color: "text-gray-400" },
    { name: "React", icon: AtomIcon, color: "text-blue-400" },
    { name: "Node.js", icon: LightningIcon, color: "text-lime-400" },
    { name: "AWS/Azure", icon: CloudIcon, color: "text-orange-400" },
    { name: "Python/AI", icon: BrainIcon, color: "text-red-400" },
];

const TechStackSection = () => (
    <section className="py-20 md:py-28 bg-gray-900 text-white shadow-2xl">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Our Technology Stack
                </h2>
                <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                    Building on the **MERN Stack** and beyond for robust solutions.
                </p>
            </div>

            {/* Tech Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-4 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)" }} // Subtle yellow shadow effect
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={`p-4 rounded-full ${tech.color} bg-gray-700/50 mb-3`}>
                            <tech.icon className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 text-center">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Sub-text */}
            <p className="text-base text-center text-gray-500 mt-8 max-w-3xl mx-auto">
                We work with modern, robust frameworks and languages to ensure performance, security, and scalability for all our applications.
            </p>
        </div>
    </section>
);

// --- INDUSTRIES WE SERVE SECTION ---
const industries = [
    { name: "E-commerce & Retail", icon: ShoppingCartIcon },
    { name: "Healthcare & Fitness", icon: HeartIcon },
    { name: "Education & Coaching", icon: BookOpenIcon },
    { name: "Real Estate & Hospitality", icon: HomeIcon },
    { name: "Technology & SaaS Companies", icon: CpuIcon },
    { name: "Professional Services", icon: BriefcaseIcon },
];

const IndustriesWeServeSection = () => (
    <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Industries We Serve
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We craft custom digital solutions for businesses across industries, catering to every unique domain from startups to enterprises.
                </p>
            </div>

            {/* Industry Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {industries.map((industry, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
                        whileHover={{ y: -3, boxShadow: "0 8px 15px rgba(251, 191, 36, 0.2)" }}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-4 shadow-inner border border-yellow-300">
                            <industry.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900">
                            {industry.name}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);


// --- MAIN COMPONENT ---
const ITServices = () => {
  // Updated pillars array with new icon and descriptions
  const pillars = [
    { icon: SparklesIcon, title: "Custom Software Solutions", description: "Architecting bespoke applications that align perfectly with your complex business workflows." },
    { icon: SparklesIcon, title: "Next-Gen UI/UX Design", description: "Creating stunning, intuitive user interfaces focused on accessibility and maximizing user retention." },
    { icon: SparklesIcon, title: "Cloud & Scalability", description: "Building highly-available, performance-driven systems using leading cloud infrastructure (AWS/Azure)." },
    { icon: SparklesIcon, title: "Rapid Agile Delivery", description: "Utilizing iterative development cycles for fast deployment, continuous improvement, and reduced time-to-market." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans">
      {/* 1. Hero Section */}
      <section className="pt-20 pb-16 md:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500 mb-2">
              Ravo Digital Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
              Innovative Web & App Development
            </h1>
            <p className="text-lg md:text-xl max-w-lg mb-8 text-gray-700">
              We build custom digital solutions that drive growth and efficiency for your business.
            </p>
            <a
              href="#contact-cta"
              className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-xl text-lg shadow-xl hover:bg-yellow-400 transition transform hover:-translate-y-0.5 inline-block border-b-4 border-yellow-600 hover:border-yellow-500"
            >
              Get in Touch
            </a>
          </div>

          {/* Right Side - Animated Graphic */}
          <div className="hidden lg:flex justify-center">
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* 2. Pillars Section (Updated to white background) */}
      <PillarsSection />

      {/* 3. Technology Stack Section (UNCHANGED) */}
      <TechStackSection />

      {/* 4. Industries We Serve Section (MOVED HERE) */}
      <IndustriesWeServeSection />

      {/* 5. CTA Section */}
      <section id="contact-cta" className="py-16 bg-yellow-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let’s turn your idea into reality. Contact us today to get started.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-black font-bold py-3 px-10 rounded-xl text-lg shadow-md hover:bg-yellow-400 transition transform hover:-translate-y-0.5 inline-block border-b-4 border-yellow-600 hover:border-yellow-500"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
