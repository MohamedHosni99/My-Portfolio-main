import React ,{useEffect,useRef} from 'react';
//import motion 
import{motion} from 'framer-motion';
//variant
import {fadeIn} from '../../../src/variants';
// import Lottie from 'react-lottie';
import animationData from './developer.json';
import LottiePlayer from 'react-lottie-player';

const About = () => {


  return <section className='section mt-11' id='about' >
    <div className='container mx-auto flex flex-col-reverse items-center justify-center md:flex-row md:justify-between'>
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='developer flex-1  mix-blend-lighten bg-center bg-no-repeat bg-contain'>  <LottiePlayer
      loop
      animationData={animationData}
      play
      style={{ width: '85%', height: '85%' }}
    />  </motion.div>

      <motion.div 
      variants={fadeIn('left', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='text-container flex-1 mb-8'>
        <div>
          <h1 className='main-title h3'>About Me</h1>
          <p className='text-lg mt-5 text-slate-300 max-w-[95%] capitalize'>
          Hello! I'm Mohamed Hosni, a passionate web developer with a keen eye for detail and a love for creating intuitive user experiences. With a background in graphic design and a strong foundation in HTML, CSS,JavaScript,and React 
          I specialize in crafting visually appealing and functional websites that leave a lasting impression, I have worked on various projects and have a strong passion for creating interactive and user-friendly interfaces.
          </p>
          <div className="flex gap-x-8 items-center mt-5">
          <a className='btn-contact  px-5 py-2 text-sm sm:px-7 sm:py-2.7 sm:text-base '  href='#contact'>Contact Me</a>
              <a href="#" className="text-gradient text-lg">
                My Portfolio
              </a>
            </div>
        </div>
      </motion.div>
    </div>
  </section>;
};

export default About;
