import React from 'react';

//import icons
import {BiHomeAlt,BiUser} from 'react-icons/bi';
import {BsClipboardData,BsBriefcase,BsChatSquare} from 'react-icons/bs';
import { Link } from 'react-scroll';

//import Css
import './Nav.css';

const Nav = () => {
  return(
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/5 h-[96px] rounded-full backdrop-blur-2xl max-w-[400px] mx-auto px-5 flex justify-between items-center'>
          <Link offset={-200}  to='home' className='link cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt/>
          </Link>
          <Link offset={50} to='about' className='link cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser/>
          </Link>
          <Link offset={50} to='skills' className='link cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData/>
          </Link>
          <Link offset={70} to='portfolio' className='link cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase/>
          </Link>
          <Link offset={70} to='contact' className='link cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquare/>
          </Link>
          
        </div>
      </div>
    </nav>
  )
};

export default Nav;
