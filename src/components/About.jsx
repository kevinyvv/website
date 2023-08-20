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
                        Hey there, I'm Kevin Wu, and I'm thrilled to be an upcoming Computer Science student at the University of Waterloo. With a strong passion for math and a new love for coding, I'm all set to dive into the world of technology. From competitive swimming to hitting the gym, I've transitioned from one kind of challenge to another. Solving complex problems through coding gives me the same rush I used to get during swim meets. Join me as I share my projects and experiences while navigating this exciting journey of learning and growth. Take a look at my projects and awards below!
                        </p>
                        
                   </div>
            </div>
        </div>
        </section>
    )
}

export default About