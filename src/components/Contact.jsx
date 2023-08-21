import React from "react";
import Form from "./EmailForm";
import {FaRegEnvelope, FaPhone} from 'react-icons/fa6'
import 'aos/dist/aos.css'

const Contact = () => {
    return(
        <section id='hmu' className="py-12" >
        <div className="w-full h-full mx-4 flex justify-center mt-16">
            <div className="my-4" data-aos='slide-right' data-aos-duration={1000} >
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 dark:text-white"> Contact Me </h1>
                <p className="dark:text-white"> Thanks for checking out my website and portfolio - let's stay in touch. <br/>
                    Feel free to fill out the form or reach me at:<br/>
                <span className="flex">
                    <FaRegEnvelope className="mx-1 my-1"/> <a href="mailto:kwu4578@gmail.com" className="text-[#c288fc] dark:text-[#fcdf88] mx-2"> kwu4578@gmail.com </a> <br/>
                </span>
                <span className="flex"> <FaPhone className="my-1 mx-1" size={15} /> "phone number" </span>
                </p>
            </div>
            <Form/>
        </div>
        </section>
    );
}

//grid lg:grid-cols-3 md:grid-cols-2 max-w-[1240px]

export default Contact