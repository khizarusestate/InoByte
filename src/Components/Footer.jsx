import {Link} from 'react-scroll'
import {motion} from'framer-motion'
export default function Footer(){
    const contactInfo = [{Title:"Call us on",icon:"WhatsappIcon",info:"+923277522098"},{Title:"Mail us on",icon:"EmailIcon",info:"services.inobyte@gmail.com"},{Title:"Our Location",icon:"LocationIcon",info:"Gujranwala, Punjab, Pakistan",link:"https://share.google/qYmmmTTJcwZPf2ePb"}]
    const navLinks = ["Home","About","Services","Contact"]
    return(
        <>
        <footer className="flex flex-col justify-center items-center gap-[60px]">
           <motion.section initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}} viewport={{once:true,amount:0.9}} className="flex flex-col justify-center items-center border-purple-300">
                <img src="./Images/Logo.png" alt="InoByte" className="md:h-[120px] h-[80px] "/>
                <p className="text-center text-purple-200 md:text-[16px] text-[10px] font-bold">From software development and cloud services to digital transformation and IT consulting, we provide comprehensive technology solutions that empower businesses to innovate, compete, and grow in an increasingly connected world</p>
           </motion.section>
           <section className='flex justify-center items-center md:gap-[100px] gap-[10px]'>
                <motion.article initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}} viewport={{once:true,amount:0.9}}className="h-[15vh] md:w-[30vw] w-[60vw] flex flex-col justify-center items-center gap-[10px]">
                   <h1 className="w-full text-center text-purple-800 md:text-[40px] text-[20px] font-bold">CONTACT US</h1>
                   {
                       contactInfo.map((items,index)=>(
                           <div key={index} className="flex justify-center items-center gap-[10px]">
                               <img src={`./Images/${items.icon}.png`} alt={items.Title} className="md:h-[30px] h-[15px]"/>
                               <a href={index===0?`tel:${items.info}`:index===1?`mailto:${items.info}`:items.link}>
                                <address className="md:text-[20px] text-[12px] text-purple-200">{items.info}</address>
                               </a>
                           </div>
                        ))
                   }
                 </motion.article>
                 <motion.article initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}} viewport={{once:true,amount:0.9}} className="md:w-[30vw] w-[40vw] flex flex-col justify-center items-center md:gap-[10px]">
                     <h1 className="md:text-[40px] text-[20px] text-purple-800 font-bold">QUICK LINKS</h1>
                     <nav>
                         <ul className="flex flex-col justify-center items-center">
                          {
                              navLinks.map((items,index)=>(
                                  <Link key={index} to={items} smooth="true" duration={500}><li className="md:text-[20px] text-purple-300 font-bold  duration-200 hover:scale-120 hover:text-shadow-[0_0_20px_rgb(255,255,255)] active-scale:100 ">{items}</li></Link>
                              ))
                           }
                        </ul>
                   </nav>
               </motion.article>
         </section>
        </footer>
        <Link to="Home" smooth="true" duration={500}><p className='mt-[20px]  text-center md:text-[20px] text-[15px] font-bold text-purple-200 duration-300 hover:text-shadow-[0_0_10px_rgb(255,255,255)] '>Back-To-Top</p></Link>
        <p className='w-full text-purple-800 font-bold md:text-[12px] text-[8px] text-center'>&copy; 2026 InoByte. All rights reserved. Innovative IT Solutions to Power to your Digital Growth</p>
        </>
    )
}