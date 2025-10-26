import React from 'react'
import BannerImg from '../../assets/4.png'
import {motion} from 'framer-motion'

const Banner2 = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/*Hero Image Section */}
          <div className='flex justify-center
          items-center'>
            <motion.img
            initial={{
              opacity:0,
              x:-100,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            transition={{duration:0.5, delay:0.5}}
            src={BannerImg} alt="" className='w-[80%]
            md:max-w-[550px] xl:w-[600px] md:!scale-110' />
          </div>
          {/* Contact section */}
          <motion.div
           initial={{opacity:0,x:100}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:0.5,delay:0.4}} 
          className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact  
      <span className='underline underline-offset-4
      decoration-1 font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>
      
      <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>Your Name
          <input className='w-full border-gray-300 rounded py-3 px-4
          mt-2 border' type="text" name='name' placeholder='Your Name' required />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
          <input className='w-full border-gray-300 rounded py-3 px-4
          mt-2 border' type="email" name='Email' placeholder='Your Email' required />
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea 
          className='w-full border border-gray-300 rounded py-3 px-4
          mt-2 h-48 resize-none'
          name="Message" placeholder="Message" required></textarea>
        </div>

        <button className='bg-[#fdcd2d] font-semibold py-2 px-12 mb-10 rounded text-black'>Send Message</button>
      </form>
          </motion.div>
          </div>
        </div>
    </>
  )
}

export default Banner2
