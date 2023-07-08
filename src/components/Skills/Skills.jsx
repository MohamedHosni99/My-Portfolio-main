import React from 'react';
import './Skills.css';
import react from '../../assets/React .png';
import Redux from '../../assets/Redux.png';
import Bootsrap from '../../assets/Bootstrap .png';
import Git_Hub from '../../assets/Git_Hub.png';
import Tailwind from '../../assets/Tailwind.png';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/css.png';
import JS from '../../assets/JS .png';
import Sass from '../../assets/Sass.png';
import Vs_Code from '../../assets/VS.png';
import{motion} from 'framer-motion';
import {fadeIn} from '../../../src/variants';


const Skills = () => {
  return <section className='skills py-8 lg:py-24 lg:h-screen'  id='skills'>
    <motion.h1
    variants={fadeIn('up', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.3}}
    className='main-title h3 '>Skills & Tools</motion.h1>
    <motion.div
    variants={fadeIn('up', 0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.3}}
    className='skills-container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-10'>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={HTML}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={CSS}/></motion.div>
          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={JS}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={Sass}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={Bootsrap}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={Tailwind}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={react}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={Redux}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={Vs_Code}/></motion.div>
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='box'><img src={Git_Hub}/></motion.div>
    </motion.div>
    </section>;
};

export default Skills;