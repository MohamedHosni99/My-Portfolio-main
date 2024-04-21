import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import PortfolioList from '../PortfolioList/PortfolioList';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { AllPortfolio } from '../../data';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
  const [selected, setSelected] = useState("ALL");
  const [data, setData] = useState(AllPortfolio);
  const categories = ["ALL", "HTML&CSS", "HTML&CSS&JS", "HTML&SASS&JS", "BootStrap", "Tailwindcss", "Vue.js", "React.js", "Next.js"];

  useEffect(() => {
    if (selected === "ALL") {
      setData(AllPortfolio);
    } else {
      setData(AllPortfolio.filter(project => project.Category === selected));
    }
  }, [selected]);

  return (
    <section className='portfolio py-8 lg:py-24  mb-8' id='portfolio'>
      <motion.h1
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='h2 main-title'>Portfolio</motion.h1>

      <motion.ul
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex items-center justify-center mt-3 flex-wrap'>
        {categories.map((category) => (
          <PortfolioList
            title={category}
            active={selected === category}
            setSelected={setSelected}
            key={category}
          />
        ))}
      </motion.ul>
      <div className="container  gap-4 mx-auto grid grid-cols-1 sm:grid-col-1  md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="item p-2 mx-auto"
            key={project.id}
          >
            <img
              src={project.img}
              alt={project.title}
            />
            <div className="overlay">
              <h3 className='text-center mt-2 text-black-500 font-bold mb-4'>{project.title}</h3>
              <div className='link-content flex items-center justify-center gap-10 p-2'>
                <a href={project.link} target='_blank' rel="noopener noreferrer"><FaLink /></a>
                <a href={project.git_link} target='_blank' rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
