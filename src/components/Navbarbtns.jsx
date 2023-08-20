import React from "react";

const Btn = ({link, name}) => {
    return(
        <a href={link}>
        <button className='bg-[#c288fc] dark:bg-[#fcdf88] w-[100px] rounded-md font-medium mx-auto py-3 text-white hover:bg-[#a874db] hover:scale-105 dark:text-black'> 
            {name}
        </button>
        </a>
    )   
}

export default Btn