import React from 'react';
import { motion } from 'framer-motion';

// --- Framer Motion Variants for Reusability ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// --- Utility Component for Cards ---

const AnimatedSectionCard = ({ title, description }) => (
  <motion.div 
    className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white cursor-pointer" 
    variants={itemVariants} 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    // Yellow Hover Effect
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.6)", 
      borderColor: "#FFD700", 
      transition: { duration: 0.2 }
    }}
  >
    <h3 className="text-xl font-bold text-black mb-1">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
  </motion.div>
);

// --- Main Component ---

const AboutUs = () => {
  const services = [
    { title: 'Mobile App Development', description: 'Create intuitive, user-friendly apps for iOS and Android.' },
    { title: 'Cloud Solutions', description: 'Scalable, secure cloud infrastructure for growth.' },
    { title: 'IT Consulting', description: 'Expert advice on short-term investments and strategies.' },
    { title: 'Software Development Services', description: 'Custom software for mobile apps and enterprise needs.' },
  ];

  const valuePropositions = [
    { title: 'Team of Highly Experienced Professionals', description: 'Our team brings expertise and a proven record of success across industries, solving challenges with insight.' },
    { title: 'Latest Technology', description: 'We stay ahead of trends to deliver cutting-edge solutions with the latest technologies.' },
    { title: 'Client-Centric Approach', description: 'Your success is ours. We measure your satisfaction by keeping your customer needs in the center of our work.' },
    { title: 'Quality You Can Rely On', description: 'We use proven, high-performance standards to deliver robust, high-quality, secure products.' },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* --------------------- HERO / INTRO SECTION (White BG) --------------------- */}
      <motion.header 
        className="pt-20 pb-16 text-center max-w-7xl mx-auto px-4 bg-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          {/* TITLE CHANGE: Set text color directly to yellow (#FFD700) */}
          <h1 
            className="text-5xl font-extrabold mb-1" 
            style={{ color: '#FFD700' }} // Applied yellow color
          >
            About Us
          </h1>
          {/* Removed the black title and yellow accent line */}
        </div>
        
        <p className="text-xl font-medium text-black mt-4">
          Ultrafly Solutions — Empowering Businesses through Technology
        </p>
      </motion.header>
      
      {/* --------------------- MISSION & SERVICES LAYOUT (White BG) --------------------- */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 px-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* Left Column: Mission & What We Have */}
        <div className="col-span-1 flex flex-col space-y-8">
          <AnimatedSectionCard title="Our Mission" description="Delivering business solutions with defined tech solutions." />
          <AnimatedSectionCard title="Why We Have Projects" description="Believe the future is defined by our team and people." />
        </div>

        {/* Center Column: Image/Visual (Floating Animation) */}
        <motion.div 
          className="col-span-1 flex justify-center items-center"
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Central Illustration Placeholder (for the phones/devices) */}
          <div className="w-64 h-64 flex items-center justify-center">
            <span className="text-gray-400 font-semibold text-sm">Central Illustration Placeholder</span>
          </div>
        </motion.div>

        {/* Right Column: Services */}
        <motion.div 
          className="col-span-1 flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.slice(0, 3).map((service, index) => ( 
            <AnimatedSectionCard key={index} title={service.title} description={service.description} />
          ))}
        </motion.div>
      </motion.section>

      {/* --- START OF LIGHT BLUE BACKGROUND AREA (The bottom half of the page) --- */}
      <div className="bg-blue-50"> 

        {/* --------------------- WHY ULTRAFLY SOLUTIONS SECTION --------------------- */}
        <motion.section 
          className="py-20 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-extrabold text-center text-black mb-10"
              variants={itemVariants}
            >
              Why Ultrafly Solutions?
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {valuePropositions.map((prop, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col space-y-2 p-6 rounded-lg bg-white shadow-md cursor-pointer" 
                  variants={itemVariants}
                  // Yellow Hover Effect
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.6)", 
                    borderColor: "#FFD700", 
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-xl font-bold text-black">{prop.title}</h3>
                  <p className="text-base text-gray-700">{prop.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-12 text-center max-w-3xl mx-auto"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-black mb-2">Strong Technology Partnerships</h3>
              <p className="text-sm text-gray-700">
                We leverage strategic partnerships with industry-leading companies and technology providers to ensure our clients receive the best solutions.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* --------------------- CALL TO ACTION (CTA) FOOTER --------------------- */}
        <section 
          className="py-16 text-center text-black mx-auto px-4" 
          style={{ margin: '3rem 0' }}
        >
          <motion.h2 
            className="text-3xl font-extrabold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to take your business to new heights?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start here. This is where your journey to digital success begins. Let's talk about how we can take your business to new heights. Reach out to us today, and let's build something great together!
          </motion.p>
          
          <motion.button 
            className="py-3 px-8 text-lg font-bold rounded shadow-lg transition duration-300"
            style={{backgroundColor: '#FFD700', color: 'black'}}
            onClick={() => console.log('Contact Us Clicked')}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;