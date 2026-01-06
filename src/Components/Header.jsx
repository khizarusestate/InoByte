import { useState,useEffect } from "react";
import { motion } from "framer-motion";
export default function Header({isGetStarted,activeTab,setTab}){
    const navItems = ["Home","Services","Contact","Blog"];
    const [mobNav,setmobNav] = useState(false);
    const [animOnCTA,setAnimONCTA] = useState(false);
    const [navAnime,setNavAnime] = useState("");
    const ActivetabCSS="border-b-2 border-purple-300 drop-shadow-[0_0_8px_rgb(255,255,255)]"
    useEffect(()=>{
        if(isGetStarted){
            const time = setTimeout(()=>{
                setAnimONCTA(true);
            },1000)
        return()=>clearTimeout(time)
        }
    },[isGetStarted])
    return(<>
            {/*..................................Dextop Header.............................. */}
       <motion.header className="md:flex hidden justify-center items-center gap-30 fixed z-20">
            <motion.img initial={{x:480}}  animate={animOnCTA?{x:0}:undefined} transition={{duration:1}} className="h-25" src="./Images/Logo.png" alt="InoByte"/>
            <motion.nav initial={{y:-100}} animate={animOnCTA?{y:0}:undefined} transition={{duration:1}} className="flex justify-center gap-12.5">
                {
                    navItems.map((items,index)=>(
                        <figure key={index} className="flex flex-col justify-center items-center">
                                <motion.img whileHover={{y:-9}} src={`./Images/${items}.png`} alt={items} className={`h-12.5 gap-12.5 hover:cursor-pointer hover:drop-shadow-[0_0_10px_rgb(255,255,255)] ${activeTab===items?ActivetabCSS:undefined}`} onMouseEnter={()=>setNavAnime(items)} onMouseLeave={()=>setNavAnime("")} onClick={()=>setTab(items)}/>
                                <motion.figcaption initial={{opacity:0}} animate={navAnime===items?{opacity:1}:undefined} transition={{duration:0.5}} className="text-purple-300 text-shadow-[0_0_10px_rgb(255,255,255)] absolute top-16.25">{items}</motion.figcaption> 
                        </figure>
                    ))
                }
                </motion.nav>
        </motion.header>
            {/*..................................Android Header.............................. */}
         <header className="md:hidden flex flex-col fixed gap-30 z-20">
             <div className="flex h-[10vh] w-screen items-center gap-15 ">
                 <motion.img initial={{x:-50}} animate={animOnCTA?{x:0}:undefined} transition={{duration:0.5}} className="ml-1.25 h-7" src="./Images/Menu.png" alt="Menu" onClick={()=>setmobNav((prev)=>(!prev))}/>
                 <motion.img initial={{x:-100}} animate={animOnCTA?{x:0}:undefined} transition={{duration:0.5}} className="h-15" src="./Images/Logo.png" alt="InoByte"/>
             </div>
              <motion.nav initial={{x:-100}} animate={mobNav?{x:0}:undefined} className="h-[40vh] w-[20vw] flex flex-col justify-center gap-7 rounded-[20px] bg-[rgba(255,200,255,0.4)] backdrop-blur-[5px]">
                {
                    navItems.map((items,index)=>(
                        <figure  key={index} className="flex flex-col justify-center items-center">
                                <img  src={`./Images/${items}.png`} alt={items} className='h-7.5 gap-12.5' onClick={()=>(setTab(items),setmobNav(false))}/>
                                <figcaption  className="text-purple-300 text-[10px] text-shadow-[0_0_10px_rgb(255,255,255)] ">{items}</figcaption> 
                        </figure>
                    ))
                }
                </motion.nav>
          </header>
        </>
    )
}