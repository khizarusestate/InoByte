import { motion } from "framer-motion";
import {Element} from 'react-scroll'
import {useEffect,useState} from 'react'
export default function Services({activeTab}){
    const [anime,setAnime] = useState(false);
     const services = [{Title:"Web Development",img:"WebDev"},{Title:"Android Apps Development",img:"AndAppDev"},{Title:"Software Development",img:"SoftDev"},{Title:"IT Consulting",img:"ITCon"},{Title:"SEO",img:"SEO"},{Title:"Google Ads",img:"AdsService"}];
    return(
             <Element name="Services">
             <section   className="h-screen relative overflow-hidden">
                  <motion.h1 initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,opacity:{duration:2}}} viewport={{once:true,amount:1}} className="text-center text-purple-300 md:text-[50px] text-[30px] font-bold border-b-white border-b-4 rounded-b-[100%]">EXPLORE OUR EXPERTIES</motion.h1>
                  <header  className="md:w-[40vw] absolute md:top-[30%] top-[12%] md:left-[1%] flex flex-col md:gap-5 gap-90">
                       <motion.h2 initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true,amount:0.5}} transition={{duration:1,opacity:{duration:2}}} className="text-[30px] text-purple-300 text-center text-shadow-[0_0_20px_rgb(255,255,255)]">From Design to Deployment Complete IT Services</motion.h2>
                       <motion.p  initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:0.5}} transition={{duration:1,opacity:{duration:2}}} className="text-purple-200 md:text-[17px] text-[12px] text-center">We offer end-to-end IT services designed to support businesses in an ever-evolving digital landscape. From web and mobile application development to custom software, UI/UX design, and digital solutions, our services are focused on quality, innovation, and performance. We work closely with our clients to understand their goals and deliver scalable, secure, and reliable technology solutions that drive efficiency, growth, and long-term success.</motion.p>
                  </header>
                  <motion.article initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,opacity:{duration:2}}} viewport={{once:true,amount:1}} className="h-full w-full absolute md:top-0 top-[5%] md:left-[20%] left-[-4%]">
                    <motion.img  animate={{rotate:360}} transition={{duration:5, repeat:Infinity, ease:"linear"}} src="./Images/HalfLogo.png" className="md:h-50 h-25 absolute top-[39%] left-[43%]"/>
                    {
                        services.map((items,index)=>(
                            <motion.figure key={index} initial={index===0?{y:160,x:80,opacity:0}:index===1?{y:160,x:-100,opacity:0}:index===2?{x:185,opacity:0}:index===3?{x:-200,opacity:0}:index===4?{y:-160,x:80,opacity:0}:{y:-160,x:-100,opacity:0}} animate={anime?{x:0,y:0,opacity:1}:undefined} viewport={{once:true,amount:0.1}} transition={{duration:0.5,opacity:{duration:2}}} onViewportEnter={()=>setAnime(true)} className={`md:w-[11vw] md:h-[21vh] h-17.5 w-20 absolute ${index===0?"md:top-[20%] top-[30%] md:left-[38%] left-[33%]":index===1?"md:top-[20%] top-[30%] md:left-[52%] left-[57%]":index===2?"md:top-[45%] top-[42%] md:left-[30%] left-[21%]":index===3?"md:top-[45%] top-[42%] md:left-[60%] left-[68%]":index===4?"md:top-[70%] top-[54%]  md:left-[38%] left-[33%]":"md:top-[70%] top-[54%] md:left-[52%] left-[57%]"} flex flex-col justify-center items-center md:rounded-[30px] rounded-[20px] bg-purple-300 shadow-[0_0_10px_rgb(255,255,255)]`}>
                                <img src={`./Images/${items.img}.png`} alt={items.Title} className="md:h-17.5 h-7.5" />
                                <figcaption className="text-purple-500 md:text-[15px] text-[10px] font-bold text-center">{items.Title}</figcaption>
                            </motion.figure>
                        ))
                    }
                    </motion.article>
                </section>
                </Element>
    )
}