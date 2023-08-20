import React, {useState, useRef} from "react";
import aos from 'aos';
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser';

const Form = () => {
    const[name,setName] = useState();
    const[email, setEmail] = useState();
    const[message, setMessage] = useState();

    const submitsuccess = document.querySelector('.success')
    const submiterror = document.querySelector('.error')


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_69iqpn5', 'template_evzvr2d', form.current, '2fmzC3T3GHP1yIhLj')
        .then((result)=> {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            alert("Sent sucessfully!")
        }, (error) => {
            console.log(error.text)
            alert("Sorry, an error occured. Try again later?")
        })
    }


    return (
        <div 
        className="rounded-xl my-10 mx-8 align backdrop-blur-sm bg-[#f0e8e2] dark:bg-slate-200"
        data-aos='slide-left' data-aos-duration={1000} >
            <div className="mx-4 my-4"> 
            <form className="space-y-5 align-middle" ref={form} onSubmit={sendEmail}>
                <input type='name' placeholder = 'Name' name="user_name" 
                value={name} onChange={(e) => setName(e.target.value)}
                className="font-semibold font-sans w-4/5" required></input>
                <br/>
                <input type="email" placeholder=" Email address" name="user_email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="font-semibold font-sans w-4/5"></input>
                <textarea type="message" name="message" className="w-full h-40 font-semibold" required
                value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder=" Leave a message!"></textarea>
                <button value="Send" type="submit"
                className="bg-[#c288fc] dark:bg-[#fcdf88] text-white dark:text-black hover:bg-[#a874db]
                w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 px-6 "
                > Send
                </button>
            </form>      
            </div>        
        </div>
    )
}

export default Form

//flex flex-col sm:flex-row items-center justify-between w-full flex-row items-center justify-between flex flex-row 
