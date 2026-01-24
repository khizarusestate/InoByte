import {Link} from 'react-scroll'
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useScroll } from 'framer-motion';
export default function Header(){
    const navItems = ["Home","About","Services","Contact"];
    const [mobNav,setmobNav] = useState(false);
    const [navAnime,setNavAnime] = useState(false);
    const [isScroll,setScroll] = useState(false);
    const {scrollY} = useScroll();
    useEffect(()=>{
        return scrollY.onChange((y)=>{
            if(y>0)
                  setScroll(true)
        })
    },[scrollY])
    return(<>
            {/*..................................Dextop Header.............................. */}
       <motion.header className="md:flex md:w-screen hidden  gap-30 fixed z-50  backdrop-blur-[5px]">
            <motion.img initial={{x:500}} animate={isScroll?{x:0}:undefined}  transition={{duration:0.5}} className="h-25" src="./Images/Logo.png" alt="InoByte"/>
            <motion.nav initial={{y:-100}} animate={isScroll?{y:0}:undefined}  transition={{duration:0.5}} className="md:h-[15vh] md:w-[30vw] flex justify-center items-center  gap-12.5 rounded-b-[100%]   border-b-white border-b-3  bg-[rgba(100,50,128,0.8)] shadow-[0_0_10px_rgb(255,255,255)] backdrop-blur-[5px]">
                {
                    navItems.map((items,index)=>(
                        <figure key={index} className="flex flex-col justify-center items-center">
                                <Link to={items} smooth={true} duration={500}><motion.img whileHover={{y:-12}} src={`./Images/${items}.png`} alt={items} className="h-10 gap-12.5 hover:drop-shadow-[0_0_10px_rgb(255,255,255)]" onMouseEnter={()=>setNavAnime(items)} onMouseLeave={()=>setNavAnime("")} /></Link>
                                <motion.figcaption initial={{opacity:0}} animate={navAnime===items?{opacity:1}:undefined} transition={{duration:0.5}} className="text-purple-300 text-[13px] text-shadow-[0_0_10px_rgb(255,255,255)] absolute top-12">{items}</motion.figcaption> 
                        </figure>
                    ))
                }
            </motion.nav>
        </motion.header>
            {/*..................................Android Header.............................. */}
         <header className="md:hidden flex flex-col fixed gap-30 z-80">
             <article className="flex h-[10vh] w-screen items-center gap-15 bg-[rgba(255,200,255,0.1)] backdrop-blur-[20px]">
                 <motion.img initial={{x:-50}} animate={{x:0}} transition={{duration:1}} className="ml-1.25 h-7 bg-purple-300 rounded-[10px]" src="./Images/Menu.png" alt="Menu" onClick={()=>setmobNav((prev)=>(!prev))}/>
                 <motion.img initial={{x:-100}} animate={{x:0}} transition={{duration:1}} className="h-15" src="./Images/Logo.png" alt="InoByte"/>
             </article>
              <motion.nav initial={{x:-100}} animate={mobNav?{x:0}:undefined} className="h-[40vh] w-[20vw] flex flex-col justify-center gap-7 border-r-3 border-white rounded-r-[100%]  bg-[rgba(255,200,255,0.4)] backdrop-blur-[5px]">
                {
                    navItems.map((items,index)=>(
                        <figure  key={index} className="flex flex-col justify-center items-center">
                                <Link smooth={true} to={items} duration={500}><img  src={`./Images/${items}.png`} alt={items} className='h-7.5 gap-12.5' onClick={()=>(setmobNav(false))}/></Link>
                                <figcaption  className="text-purple-300 text-[10px] text-shadow-[0_0_10px_rgb(255,255,255)] ">{items}</figcaption> 
                        </figure>
                    ))
                }
                </motion.nav>
          </header>
        </>
    )

}
