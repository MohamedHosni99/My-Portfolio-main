import React from 'react';
import './Skills.css';
import{motion} from 'framer-motion';
import {fadeIn} from '../../../src/variants';
import {skillsData}  from '../../data'


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
      {skillsData.map((skill,index) => (
         <motion.div
         variants={fadeIn('up', 0.3)}
         key={index}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}} 
         className='box'>
         <img src={skill.image} alt={skill.name}/>
       </motion.div>
      ))
      }
      
    </motion.div>
    </section>;
};

export default Skills;
