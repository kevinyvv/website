import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import {
    FaInstagram,
    FaGithubSquare,
    FaLinkedin,
} from 'react-icons/fa'


const Container = ({title, description, details, bcolor, image}) => {

    return(
        
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:shadow-[#dfc2fc] dark:hover:shadow-[#fcdf88]'>
              <img className='rounded-md w-20 mx-auto mt-[-3rem] bg-white dark:bg-black' src={image} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 dark:text-white'> {title} </h2>
              <p className='text-center text-4xl font-bold dark:text-white'> {description} </p>
              <div className='text-center font-medium dark:text-white' >
                  {details}
              </div>
              <button className='bg-[#c288fc] dark:bg-[#fcdf88] text-white w-[200px] rounded-md flex justify-center my-6 mx-auto px-6 py-3 hover:bg-[#a874db]'> 
              <FaGithubSquare size = {30}/>
              </button>
          </div>
          
    )
}

export default Container