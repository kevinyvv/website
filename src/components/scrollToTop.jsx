import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import {useState} from 'react';
import 'aos/dist/aos.css'

const Top = () => {
    
    const [Display, setDisplay] = useState(window.scrollY > 100 ? true :false);
    
        const check = () =>{
        window.scrollY > 100 ? setDisplay(true) : setDisplay(false)
        }
        window.addEventListener("scroll", check);

    if (Display) {
    return (
        
        <button className="fixed right-16 bottom-16 opacity-25 hover:opacity-100" id = "arrow"
        data-aos="fade-up" data-aos-duration = {1000}>
            <a href ='#top'>
            <FaArrowUp size={40} className='dark:fill-white scale-75 sm:scale-100 lg:scale-125'/>
            </a>
        </button> 
       
    )
    }
  }

  export default Top