import React from 'react';
import Typed from 'react-typed'


const Hero = () => {
    
    return (
    <div className='text-white full dark:bg-black'> 
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className = 'text-[#c288fc] font-bold md:text-2xl sm:text-xl text-lg dark:text-[#fcdf88]'> Hello, I'm</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black dark:text-white'> Kevin Wu </h1>
            <div>
                <Typed className = 'text-black md:text-4xl sm:text-3xl text-xl font-bold md:pl-2 pl-2 dark:text-white' strings={["Computer Science Student", "Aspiring Software Developer"]} typeSpeed={40} backSpeed={50} loop/>
            </div>
            <p className='text-black p-2 md:text-2xl text-xl font-bold dark:text-white'></p> 
        <div className='space-x-4'>
                <a href='#projects' >
                    <button className='bg-[#c288fc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#a874db] dark:bg-[#fcdf88] dark:text-black' > 
                     Projects
                    </button> 
                </a>
                <a href='#hmu'>
                    <button className='bg-[#c288fc] w-[200px] rounded-md font-medium mt-6 mx-auto py-3 md:mx-0 text-white hover:bg-[#a874db] dark:bg-[#fcdf88] dark:text-black' >
                     Contact     
                </button>
                </a> 
        </div>
        <div id='languages/skills' className='flex justify-center'>
            <text className="text-black md:text-3xl sm:text-2xl text-xl font-bold md:pl-2 pl-2 dark:text-white">
                Skills:
            </text>

        </div>          
        </div>
    </div>
    )
}

export default Hero