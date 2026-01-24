import {useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import data from './Aboutdata.json'
export default function About(){
    const ach = ["Clients Satisfied","Award","Francheese"];
     const [isCounterStart,setCounterStart] = useState(false)
     const [CLIcounterStart,setCLICounterStart] = useState(0);
     const [AwrdcounterStart,setAwrdCounterStart] = useState(0);
     const [FrnchcounterStart,setFrnchCounterStart] = useState(0);
     useEffect(()=>{
        if(!isCounterStart)
            return;
        const Clicounter = setInterval(()=>{
          setCLICounterStart((prev)=>(prev>=200?prev:prev+1))
        },1)
         const awrdCounter = setInterval(()=>{
           setAwrdCounterStart((prev)=>(prev>=100?prev:prev+1))
        },20)
         const Frnchcounter = setInterval(()=>{
          setFrnchCounterStart((prev)=>(prev>=50?prev:prev+1))
        },50)
        return()=>{
            clearInterval(Clicounter);
            clearInterval(awrdCounter);
            clearInterval(Frnchcounter);
        }
     },[isCounterStart])
    return(
        <Element name="About">
             <main className='md:h-[170vh] h-[150vh]  flex flex-col  items-center md:gap-17.5 gap-15 '>
                <motion.header initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:1}} transition={{duration:1,opacity:{duration:2}}} className='w-full flex justify-center items-center md: gap-2 border-b-white border-b-4 rounded-b-[100%]'>
                   <h1  className='md:text-[50px] text-[30px] text-purple-200'>Who are</h1><h2 className='md:text-[50px] text-[30px] text-purple-500 font-bold'>WE?</h2>
               </motion.header>
               <motion.section initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:0.5}} transition={{duration:1,opacity:{duration:2}}} className='md:h-fit md:w-fit h-137.5 w-100 grid md:grid-cols-3 grid-cols-2  place-items-center md:gap-y-15 md:gap-x-15'>
                   {
                       data.map((items,index)=>(
                           <article key={index} className='md:h-40 md:w-75 h-37.5  w-45  flex flex-col justify-center items-center md:gap-5 gap-7  md:rounded-tl-[40px] rounded-tl-[30px] md:rounded-br-[40px] rounded-br-[30px] bg-purple-800 shadow-[0_0_10px_rgb(255,255,255)] duration-200 hover:scale-105 '>
                               <h3 className='w-full text-center md:text-[20px] text-[15px] text-purple-300 font-bold border-b-3 border-white rounded-b-[50%] '>{items.label}</h3>
                               <p className='text-center md:text-[15px] text-[10px] text-purple-200'>{items.info}</p>
                           </article>
                       ))
                   }
               </motion.section>
               <section className='flex flex-col justify-center items-center gap-12.5 '>
                    <motion.header initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:1}} transition={{duration:1,opacity:{duration:2}}} className='flex flex-col justify-center items-center'>
                       <h4 className='md:text-[30px] text-[20px] text-purple-200 '>Owing to the continuous struggles</h4><h5 className='md:text-[50px] text-[35px] text-purple-400 font-bold'>INOBYTE has endured</h5>
                    </motion.header>
                <motion.article  initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:1}} transition={{duration:1,opacity:{duration:2}}} onViewportEnter={()=>setCounterStart(true)} className='flex md:flex-row flex-col justify-center items-center md:gap-10 gap-5'>
                        {
                       ach.map((items,index)=>(
                           <div key={index} className='md:h-25 md:-[380px] h-15 w-75 flex justify-center items-center gap-2.5 rounded-[5px] border-2 border-purple-500'>
                               <p className='md:text-[50px] text-[30px] text-purple-500 '>{`${index===0?CLIcounterStart:index===1?AwrdcounterStart:FrnchcounterStart}+`}</p><p className='md:text-[25px] text-[20px] text-purple-200 font-bold'>{items}</p>
                           </div>
                       ))
                   }
                </motion.article>
               </section>
           </main>
        </Element>
    )
}