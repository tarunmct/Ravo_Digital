import React from 'react'
import ServiceImg from '../../assets/2.png'
import { motion } from 'framer-motion'

const Service = () => {
  return (
    <>
    <div className="container mx-auto py-12">
        {/*Header Section*/}
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        className='py-12 flex justify-between items-center'>
            <h1 className='text-4xl xl:text-5xl font-bold
            max-w-[550px]'>How to Spark Your <br /> <span className='text-gray-400 
            underline'>Brand</span>
            </h1>
        </motion.div>
        {/*Cards Section*/}

        <div className='grid grid-cols-1
        sm:grid-cols-2 gap-8'>
          <motion.div
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.5,delay:0.2}}>
            <img src={ServiceImg} alt="" className='w-[300px] mx-auto sm:w-full'/>
          </motion.div>
          <motion.div 
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.5,delay:0.4}}
          className='max-w-[300px] mx-auto space-y-4 pt-20'>
            <img className='w-14' src={ServiceImg} alt="" />
            <p className='uppercase font-semibold
            text-lg'>Discover and Strategy</p>
            <p className='text-gray-500 pl-6 border-l-2'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam molestiae minima in sed hic commodi fugit, tempora cum, harum, accusantium ratione fugiat maxime quis? Deleniti consequuntur iusto quod quaerat!
            </p>
            </motion.div>
            <motion.div 
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.6}}
            className='max-w-[300px] mx-auto space-y-4'>
            <img className='w-14' src={ServiceImg} alt="" />
            <p className='uppercase font-semibold
            text-lg'>Execute</p>
            <p className='text-gray-500 pl-6 border-l-2'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam molestiae minima in sed hic commodi fugit, tempora cum, harum, accusantium ratione fugiat maxime quis? Deleniti consequuntur iusto quod quaerat!
            </p>
            </motion.div>
            <motion.div 
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.8}}
            className='max-w-[300px] mx-auto space-y-4'>
            <img className='w-14' src={ServiceImg} alt="" />
            <p className='uppercase font-semibold
            text-lg'>Launch</p>
            <p className='text-gray-500 pl-6 border-l-2'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam molestiae minima in sed hic commodi fugit, tempora cum, harum, accusantium ratione fugiat maxime quis? Deleniti consequuntur iusto quod quaerat!
            </p>
            </motion.div>

          </div>
        </div>
    </>
  )
}

export default Service
