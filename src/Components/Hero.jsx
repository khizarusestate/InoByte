import {useState,useEffect} from 'react'
import { motion } from 'framer-motion'
export default function Hero({setGetStarted,isGetStarted,setTab}){
    const [issectionRemoved,setSectionRemoved] = useState(false)
    useEffect(()=>{
        if(isGetStarted){
            const time = setTimeout(()=>{
                setSectionRemoved(true);
                setTab("Home");
            },1000)
        return()=>clearTimeout(time)
        }
    },[isGetStarted,setTab])
    return(
        !issectionRemoved&&(
        <motion.main initial={{opacity:0}} animate={isGetStarted?{opacity:0}:{opacity:1}} transition={{duration:1}} className="h-screen">
            <div className="absolute top-[40%] md:left-[15%] left-[10%] flex flex-col justify-center items-center md:gap-25 gap-3.75">
               <h1 className="md:text-[50px] text-[19px] text-purple-300 text-shadow-[0_0_30px_rgb(255,255,255)]">Where Innovation Shapes Tomorrow</h1>
               <button className="md:h-15 h-12.5 md:w-50 w-37.5 md:text-[23px] text-purple-200 font-bold rounded-[30px] bg-purple-400 duration-200 hover:drop-shadow-[0_0_20px_rgb(255,255,255)] hover:scale-110 hover:cursor-pointer active:scale-100 z-50" onClick={()=>setGetStarted(true)}>GET STARTED</button>
            </div>
            <footer className="absolute md:top-[95%] top-[98%] md:left-[21%] left-[13%] text-white">
                <p className="md:text-[15px] text-[6px]">&copy; 2026 InoByte. All rights reserved. Empowering businesses through innovation and technology worldwide.</p>
            </footer>
        </motion.main>
        )
 )
}