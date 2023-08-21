import React from "react";
import Container from "./ProjectContainer";
import catweep from '../assets/catweep.jpg'
import catflex from '../assets/catflex.jpg'
import smilecat from '../assets/smilecat.jpg'
import 'aos/dist/aos.css'

const Projects = () => {
  
    return (
    <section id = 'projects' >
    <div className='w-full py-[10rem] px-4 -my-8 bg-white dark:bg-black' data-aos='slide-up' data-aos-duration = {1000}>
    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl 
    py-4 mb-16 flex justify-center dark:text-white'
    >Projects</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8' >
          <Container title = "Project 1" image={catweep} > </Container>
          <Container title = 'Project 2' image={catflex}> </Container>
          <Container title = 'Project 3' image={smilecat}></Container>
      </div>
    </div>
    </section>
    )
}

export default Projects