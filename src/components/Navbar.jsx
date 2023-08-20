import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineOrderedList} from 'react-icons/ai'
import Btn from './Navbarbtns';
import ModeSwitch from './sunandmoon';
import {FaChild, FaLaptopCode, FaAward, FaMessage} from 'react-icons/fa6'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }
        return (
        <section id='top'>
        <div className= 'text-black flex justify-between items-center h-24 w-full mx-auto px-4 dark:bg-black' >
            <h1 className = 'w-full text-3xl font-bold text-[#c288fc] dark:text-[#fcdf88]'>KW.</h1>
            <ul className = 'hidden md:flex'>
                <li className = 'p-4'>
                <Btn link='#About' name='About'/>
                </li>
                <li className = 'p-4'>
                    <Btn link='#projects' name='Projects'/>
                </li>
                <li className = 'p-4'>
                    <Btn link='#Awards' name='Awards'/>
                </li>
                <li className = 'p-4'>
                    <Btn link='#hmu' name='Contact'/>
                </li>
                <li className = 'p-4'>
                    <ModeSwitch sunColor = '#c288fc' moonColor = '#fcdf88'/> 
                </li> 
            </ul>
            <div className='flex md:hidden w-full justify-center my-auto  absolute space-x-16'> 
            <a href='#About'> <FaChild size={30} className='hover:scale-105 fill-black dark:fill-white'/> </a>
            <a href='#projects'> <FaLaptopCode size={30} className='hover:scale-105 fill-black dark:fill-white'/> </a>
            <a href='#Awards'> <FaAward size={30} className='hover:scale-105 fill-black dark:fill-white'/> </a>
            <a href='#hmu'> <FaMessage size={30}  className='hover:scale-105 fill-black dark:fill-white'/> </a>
            </div>
        </div>
        </section>);          
}
export default Navbar