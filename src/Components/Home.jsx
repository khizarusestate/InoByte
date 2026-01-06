import { motion } from "framer-motion"
export default function Home({activeTab}){
    return(
        activeTab==="Home"&&
         <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="h-screen flex items-center md:gap-37.5">
                  <div className="md:ml-5 md:w-[50vw]  flex flex-col justify-center items-center md:gap-2.5 gap-62.5 ">
                      <motion.h1 initial={{x:-60}} animate={{x:0}} transition={{duration:0.5}} className=" text-purple-300 md:text-[35px] text-[20px] text-center text-shadow-[0_0_30px_rgb(255,255,255)]">
                           Innovative IT Solutions to Power Your Digital Growth.
                      </motion.h1>
                      <p className="text-purple-300 md:text-[15px] text-[12px] text-center">
                            From software development and cloud services to digital transformation and IT consulting, we provide comprehensive technology solutions that empower businesses to innovate, compete, and grow in an increasingly connected world
                      </p>
                       <div className="flex gap-1.25 md:text-[30px] absolute md:top-[80%] top-[85%] md:left-[32%]">
                           <p className="text-white">YOUR</p><p className="text-purple-300 font-bold">BUSINESS</p><p className="text-purple-300 font-bold">|</p><p className="text-white">OUR</p><p className="text-purple-300 font-bold">STRATEGY</p>
                       </div>
                   </div>
                    <motion.img initial={{x:60}} animate={{x:0}} transition={{duration:0.5}} src="./Images/Laptop.png" alt="Laptop" className="md:h-75 md:static absolute left-[20%] h-37.5 drop-shadow-[0_0_10px_rgb(255,255,255)]"/>
        </motion.section>
    )
}