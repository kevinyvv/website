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
            <FaLinkedin size = {30} className="hover:bg-[#a874db]"/>
            <FaGithubSquare size = {30} className="hover:bg-[#a874db]"/>
            <FaInstagram size = {30} className="hover:bg-[#a874db]"/>
            </div>
        </div>
    </div>
    )
}

export default Footer