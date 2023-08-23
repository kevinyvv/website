import React, {useEffect} from "react";
import me from '../assets/me.png'
import aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=> {
        aos.init({duration: 1500})
      },[])
    
    return(
        <section id='About' data-aos="fade-up">
        <div className = 'w-full bg-white py-16 px-4 dark:bg-black mx-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                   <img data-aos='flip-right' data-aos-duration={1000} className = 'rounded-xl w-[500px] mx-auto my-4'src = {me} alt = 'img'></img>
                   <div className="flex flex-col justify-center mx-8">
                        <h2 className="text-[#c288fc] font-bold text-xl sm:text-2xl md:text-3xl dark:text-[#fcdf88]"> About Me </h2>
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 dark:text-white"> Please hire me for internships :pray: </h1> 
                        <p className="dark:text-white mt-8">
                        Hey there, I'm Kevin Wu, a Computer Science student at the University of Waterloo.
                        <br/>
                        I'm super passionate about programming and mathematics, in various areas such as 
                        Web Development, Data Science, Deep Learning, and Computer Vision.
                        <br/>
                        When I’m not in the world of mathematics and computers, I like to go to the gym, swim, read manga, and chill with friends.
                        <br/>
                        I’d love to explore new opportunities, and challenge myself in the world of technology to create projects I’m interested in.
                        <br/>
                        Take a look at my projects and awards below!
                        </p>
                        
                   </div>
            </div>
        </div>
        </section>
    )
}

export default About