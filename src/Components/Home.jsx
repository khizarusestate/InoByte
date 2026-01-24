import { motion } from "framer-motion"
import { Element } from "react-scroll"
export default function Home(){
    return(
    <Element name="Home">
     <main  className="h-screen flex items-center md:gap-37.5">
            <section className="md:ml-5 md:w-[50vw] flex flex-col justify-center items-center md:gap-10 gap-70">
                <motion.header initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,ease:"linear",opacity:{duration:2}}}>
                    <h1  className="text-purple-200 md:text-[30px] text-[20px] text-center">Innovative IT Solutions to Power </h1>
                    <h2  className="text-purple-400 md:text-[50px] text-[20px] text-center  font-bold">YOUR DIGITAL GROWTH </h2>
                </motion.header>
                <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,ease:"linear"}} className="text-purple-300 md:text-[15px] text-[12px] text-center">From software development and cloud services to digital transformation and IT consulting, we provide comprehensive technology solutions that empower businesses to innovate, compete, and grow in an increasingly connected world</motion.p>
                <motion.article initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,opacity:{duration:2}}} className="flex gap-1.25 md:text-[30px] absolute md:top-[80%] top-[85%] md:left-[32%]">
                    <p className="text-purple-300">Your</p><p className="text-purple-500 font-bold">BUSINESS</p><p className="text-purple-500 font-bold">|</p><p className="text-purple-300">Our</p><p className="text-purple-500 font-bold">STRATEGY</p>
                </motion.article>
            </section>
            <motion.img initial={{x:50}} animate={{x:0}} transition={{duration:1}} src="./Images/hand.png" className="md:h-90 h-50 absolute md:top-[25%] top-[45%] md:left-[60%] left-[27%] "/>
            <motion.img initial={{y:-50}} animate={{y:0,rotate:360}} transition={{duration:1,rotate:{repeat:Infinity,duration:10,ease:"linear"}}} src="./Images/HalfLogo.png" className="md:h-60 h-30 absolute md:left-[70%] md:top-[20%] top-[42%] left-[35%] drop-shadow-[0_0_15px_rgb(255,0,0)]"/>
    </main>
    </Element>
)}