import React,{ useEffect, useState } from 'react';
import './Portfolio.css';
import PortfolioList from '../PortfolioList/PortfolioList';
//import motion 
import{motion} from 'framer-motion';
//variant
import {fadeIn} from '../../variants';
import {AllPortfolio,HTML_CSSPortfolio,HTML_SASS_JSPortfolio,HTML_CSS_JSPortfolio,BootsrapPortfolio,TailwindPortfolio} 
from '../../data';
import{FaGithub,FaLink} from 'react-icons/fa';




const Projects = () => {
  const [selected, setSelected] = useState("ALL");
  const [data, setData] = useState([]);
  const list = [
    
    {
      id: "ALL",
      title: "ALL",
    },
    
    {
      id: "HTML&CSS",
      title: "HTML&CSS",
    },
    {
      id: "HTML&CSS&JS",
      title: "HTML&CSS&JS",
    },
    {
      id: "HTML&SASS&JS",
      title: "HTML&SASS&JS",
    },
    {
      id: "BootStrap",
      title: "BootStrap",
    },
    {
      id: "TailWind",
      title: "TailWind",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "ALL":
        setData(AllPortfolio);
        break;
      case "HTML&CSS":
        setData(HTML_CSSPortfolio);
        break;
      case "HTML&CSS&JS":
        setData(HTML_CSS_JSPortfolio);
        break;
      case "HTML&SASS&JS":
        setData(HTML_SASS_JSPortfolio);
        break;
      case "BootStrap":
        setData(BootsrapPortfolio);
        break;
      case "TailWind":
        setData(TailwindPortfolio);
        break;
      default:
        setData(AllPortfolio);
    }
  }, [selected]);

  return <section className='portfolio py-8 lg:py-24  mb-8' id='portfolio'>
        <motion.h1
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='h2 main-title'>Portfolio</motion.h1>
        
        <motion.ul
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex items-center justify-center mt-3 flex-wrap'>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </motion.ul>
      <div className="container  gap-4 mx-auto grid grid-cols-1 sm:grid-col-1  md:grid-cols-2 lg:grid-cols-3">
        {data.map((d) => (
          <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="item p-2 mx-auto">
            <img
              src={d.img}
              alt=""
            />
            <div className="overlay">
              <h3 className='text-center mt-2 text-black-500 font-bold mb-4'>{d.title}</h3>
              <div className='link-content flex items-center justify-center gap-10 p-2'>
                <a href={d.link} target='_blank'><FaLink/></a>
                <a href={d.git_link} target='_blank'><FaGithub/></a>
              </div>
              </div>
          </motion.div>
        ))}
      </div>
  </section>;
};

export default Projects;
