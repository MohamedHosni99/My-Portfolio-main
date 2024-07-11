import React from 'react';
import './Banner.css'
//import Images
import Image from '../../assets/icon.jpeg';
//import icons
import{FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa';
//import type animation
import {TypeAnimation} from 'react-type-animation';
//import motion 
import{motion} from 'framer-motion';
//variant
import {fadeIn} from '../../../src/variants';


const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center mb-11' id='home'>
    <div className='container mx-auto flex justify-center items-center flex-col gap-y-8 lg:flex-row lg:items-center'>
      <div className='text-container flex-1 text-center font-secondary lg:text-left uppercase'>
        <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='text-[30px] lg:text-[55] mb-2 font-bold '>Hi,I'm Mohamed Hosni
        </motion.h1>
        
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='mb-6 text-[25px] lg:text-[45px] font-secondary font-semibold uppercase'>
          <span className='mr-4 text-white'>I Am a </span>
          <TypeAnimation className='text-cyan-400' wrapper='span' sequence={
            ['Front-End Developer',2000,'React.js Developer',2000]} speed={50} repeat={Infinity}/>
          
          <motion.p
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='text-lg mt-5 text-slate-300 max-w-[95%] capitalize'> 
            I am a passionate React.js developer. With a strong background in web development and a love for building user-friendly interfaces,
            I thrive on bringing ideas to life through the power of React.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="cv mt-8 ">
            <div className="btn-download text-base sm:text-2xl capitalize"><a href="https://drive.google.com/file/d/1QMXN4RBRUesVqdQNcjW2lWLGxH_SF-1m/view?usp=drive_link" target='blank'>Download CV</a></div>
            </motion.div>
            
            <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="social flex items-center justify-center mt-5 text-[1.5rem] mx-auto">
              <a href='https://www.linkedin.com/in/mohamed-hosni99/' target='blank'><FaLinkedin/></a>
              <a href='https://github.com/MohamedHosni99' target='blank'><FaGithub/></a>
              <a href='https://www.facebook.com/profile.php?id=100017985150125' target='blank'><FaFacebook/></a>
            </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("left", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='flex-1 max-w-[320px] lg:max-w-[482px]'><img className='max-w-[100%]' src={Image}/></motion.div>
    </div>
  </section>;
};

export default Banner;
