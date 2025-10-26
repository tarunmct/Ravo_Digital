import React from 'react'
import Logo from '../../assets/0.png'
import { motion } from 'framer-motion';


const containerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.1 
    } 
  },
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};



const Footer = () => {
  // Define a color variable for the accent color used in your design
  const ACCENT_COLOR_CLASS = 'bg-[#fdcd2d] hover:bg-yellow-400';
  const ACCENT_TEXT_CLASS = 'text-yellow-500 hover:text-[#fdcd2d]';

  return (
    <footer className='pt-16 pb-8 px-4 md:px-12 lg:px-32 bg-gray-900 w-full overflow-hidden text-gray-400' id='Footer'>
      <motion.div 
        className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10'
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Logo and Description */}
        <motion.div className='md:col-span-2' variants={itemVariants}>
          <img src={Logo} alt="Ravo Logo" className='w-50 mb-4 filter brightness-0 invert' /> {/* Increased size, added invert for visibility on dark background */}
          <p className='leading-relaxed text-sm max-w-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div variants={itemVariants}>
          <h3 className='text-white text-lg font-semibold mb-5 uppercase tracking-wider'>Quick Links</h3>
          <ul className='flex flex-col gap-3 text-sm'>
            <li><a href="#Header" className='hover:text-white transition-colors'>Home</a></li>
            <li><a href="#About" className='hover:text-white transition-colors'>About Us</a></li>
            <li><a href="#Contact" className='hover:text-white transition-colors'>Contact Us</a></li>
            <li><a href="#" className='hover:text-white transition-colors'>Privacy Policy</a></li>
          </ul>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div variants={itemVariants}>
          <h3 className='text-white text-lg font-semibold mb-5 uppercase tracking-wider'>Newsletter</h3>
          <p className='text-sm mb-4'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex flex-col gap-3'>
            <input 
              type="email" 
              placeholder='Enter Your Email' 
              className='p-3 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 
              focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none transition-all'
            />
            <button 
              className={`py-3 px-4 rounded-lg text-gray-900 font-bold ${ACCENT_COLOR_CLASS} transition-colors`}
            >
              Subscribe
            </button>
          </div>
        </motion.div>

      </motion.div>

      {/* Footer Bottom */}
      <div className='pt-6 text-center text-xs md:text-sm text-gray-500'> 
        © 2025 RAVO. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer