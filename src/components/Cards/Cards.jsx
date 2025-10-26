import React from 'react';
import Img1 from '../../assets/icon/1.png';
import Img2 from '../../assets/icon/2.png';
import Img3 from '../../assets/icon/3.png';
import { slideUp } from '../../utility/animation';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto py-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

          {/* Card 1 */}
          <motion.div
            variants={slideUp(0.2)}
            initial="initial"
            whileInView='animate'
            className='bg-white shadow-xl rounded-xl px-6 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto transition-transform duration-300 hover:scale-105'
          >
            <div className='w-24 h-24 bg-black rounded-full flex items-center justify-center'>
              {/* === FIX: Increased icon size from w-10 h-10 to w-14 h-14 === */}
              <img src={Img1} alt="Digital Marketing" className='w-100 h-109 object-contain' />
            </div>
            <p className='text-xl font-semibold'>Digital Marketing</p>
            <p className='text-sm text-black/80 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut nihil nemo facere odio recusandae debitis magni consequuntur fuga voluptas.
            </p>
            <a href="#" className='hover:text-[#fdcd2d] font-medium'>Learn More</a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={slideUp(0.4)}
            initial="initial"
            whileInView='animate'
            className='bg-white shadow-xl rounded-xl px-6 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto transition-transform duration-300 hover:scale-105'
          >
            <div className='w-24 h-24 bg-black rounded-full flex items-center justify-center'>
              {/* === FIX: Increased icon size from w-10 h-10 to w-14 h-14 === */}
              <img src={Img2} alt="IT Services" className='w-100 h-100 object-contain' />
            </div>
            <p className='text-xl font-semibold'>IT Services</p>
            <p className='text-sm text-black/80 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut nihil nemo facere odio recusandae debitis magni consequuntur fuga voluptas.
            </p>
            <a href="#" className='hover:text-[#fdcd2d] font-medium'>Learn More</a>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={slideUp(0.6)}
            initial="initial"
            whileInView='animate'
            className='bg-white shadow-xl rounded-xl px-6 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto transition-transform duration-300 hover:scale-105'
          >
            <div className='w-24 h-24 bg-black rounded-full flex items-center justify-center'>
              {/* === FIX: Increased icon size from w-10 h-10 to w-14 h-14 === */}
              <img src={Img3} alt="Branding" className='w-100 h-100 object-contain' />
            </div>
            <p className='text-xl font-semibold'>Event Management</p>
            <p className='text-sm text-black/80 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut nihil nemo facere odio recusandae debitis magni consequuntur fuga voluptas.
            </p>
            <a href="#" className='hover:text-[#fdcd2d] font-medium'>Learn More</a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Cards;