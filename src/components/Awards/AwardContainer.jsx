import React from "react";


const AContainer = ({title, description, details, bcolor, btextcolor}) => {
    return(
        <div 
        className='w-full 
            outline outline-4 outline-[#c288fc]
            dark:outline-[#fcdf88]
            flex flex-col p-4 my-4 mx-4 rounded-lg
            hover:-translate-y-2 duration-200'>
              <h2 className='text-xl font-bold text-center  dark:text-white'> {title} </h2>
              <p className='text-center text-md py-2 font-bold dark:text-white'> {description} </p>
              <div className='text-center font-sm dark:text-white'>
                  {details}
              </div>
          </div>
    )
}

export default AContainer