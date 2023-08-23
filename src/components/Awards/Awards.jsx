import React, { useState } from 'react'
import AContainer from './AwardContainer';
import 'aos/dist/aos.css'

const UniAward = () => {

    return(   
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols2 gap-8 my-4 '>
                <AContainer title = "National Math Scholarship" 
                description= "Entrance Scholarship of $15,000"
                details="awarded by the Faculty of Mathematics at the University of Waterloo"/>
                <AContainer title = "President's Scholarship of Distinction" 
                description = "Entrance Scholarship of $2,0000" 
                details="awarded by the University of Waterloo"/>
            </div>
    )

}

const MathAward = () => {

    return(   
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols2 gap-8 my-4'>
                <AContainer title = 'Canadian Senior Math Roll Group V'
                description = "Math Contest Award" 
                details="awarded by the University of Waterloo for being within top ~5% of scorers"/>

                <AContainer title = "Hypatia Honor Roll Group III"
                description = "Math Contest Award" 
                details="awarded by the University of Waterloo for being within top ~3% of scorers"/>

                <AContainer title = 'Cayley Honor Roll Group IV'
                description = "Math Contest Award" 
                details="awarded by the University of Waterloo for being within top ~4% of scorers"/>

                <AContainer title = 'Galois Honor Roll Group IV'
                description = "Math Contest Award" 
                details="awarded by the University of Waterloo for being within top ~4% of scorers"/>
            </div>
    )

}

const MiscAward = () => {

    return(   
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols2 gap-8 my-4'>
            <AContainer title = "Summa Cum Laude" 
                description = "Academic Award" 
                details="awarded by Westdale Secondary School for being in the top 5% of graduating class "/>
            <AContainer title = "International Baccalaureate Diploma" 
                description = "Diploma" 
                details="awarded by IBO for completion of the International Baccalaureate Programme"/>
            <AContainer title = "DELF B1" 
                description = "Certification" 
                details="awarded by France Education International for having a B1 Proficiency in French"/>
            <AContainer title = "School Honor Roll" 
                description = "Academic Award" 
                details="awarded by Westdale Secondary School for having an 80%+ average for all four years of high school"/>
            </div>
    )

}


const Awards = () => {
    const [selected, setSelected] = useState('Uni');

    const handleChange=(e)=>{
        setSelected(e.target.value)
    }
    
    return(
        <section id='Awards' > 
            <div data-aos='slide-up' data-aos-duration = {1000}>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-4 flex justify-center dark:text-white'>Awards</h1>
                <div className='flex justify-center mb-8'>
                <select value={selected} onChange={(e)=>handleChange(e)} className='scale-125 font-bold text-center rounded-lg outline-none bg-[#c288fc] dark:bg-[#fcdf88] text-white dark:text-black'>
                    <option>All</option>
                    <option>Uni</option>
                    <option>Math</option>
                    <option>Misc</option>
                    <option>None</option>
                </select> 
                </div>
                {selected === "All" ? <div className=''> <UniAward/> <MathAward/> <MiscAward/> </div>: "" }
                {selected === "Uni" ? <UniAward/> : "" }
                {selected === "Math" ? <MathAward/>:"" }
                {selected === "Misc" ? <MiscAward/> :"" }
                {selected === "None" ? "" :"" }
            </div>
        </section>
    )

}

export default Awards