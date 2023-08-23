import React from "react";
import {
    FaInstagram,
    FaGithubSquare,
    FaLinkedin,
} from 'react-icons/fa'
import aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {
    return (
    <div className = 'bg-[#c288fc] dark:bg-[#fcdf88] dark:text-black text-white py-4 px-4 flex justify-center'
    >
        <div className="flex" >
            <h1 className="w-full text-lg font-semibold"> 
                Website created by Kevin Wu 
            </h1>
            <div className="flex justify-between px-4 ">
            <a href="https://www.linkedin.com/in/kevin-wu-295b831a1" target="_blank"><FaLinkedin size = {30} className="hover:bg-[#a874db]"/></a>
            <a href="https://github.com/kevinyvv" target="_blank"><FaGithubSquare size = {30} className="hover:bg-[#a874db]"/></a>
            <a href="https://www.instagram.com/kevinyvv/" target="_blank"><FaInstagram size = {30} className="hover:bg-[#a874db]"/></a>
            </div>
        </div>
    </div>
    )
}

export default Footer