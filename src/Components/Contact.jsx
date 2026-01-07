import { motion } from "framer-motion"
import { useState } from "react";
export default function Contact({activetab}){
    const contactInfo = [{Title:"Call us on",icon:"WhatsappIcon",info:"+923277522098"},{Title:"Mail us on",icon:"EmailIcon",info:"services.inobyte@gmail.com"},{Title:"Our Location",icon:"LocationIcon",info:"Gujranwala, Punjab, Pakistan",link:"https://share.google/qYmmmTTJcwZPf2ePb"}]
    const [email,setEmail] = useState("");
    const [help,setHelp] = useState("");
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState(false)
      const FormHandler= async(e)=>{
        e.preventDefault();
        const data = {email,help}
        setLoading(true);
        try{const req = await fetch("https://inobyte-backand-production.up.railway.app/help",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        
        if(req.status===201)
            {   
                setLoading(false);
                setMessage("Your Request Was Sent");
                setEmail("");
                setHelp("");
            }
        else
            { 
              setLoading(false);
              setMessage("UnExpected Error Occur!");
            }

        }
        catch(err){console.log("Server Error!")}
        
    }
    return(
         activetab==="Contact"&&(
                <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="h-screen flex flex-col  md:justify-end justify-center gap-5 items-center">
                    <motion.h2 initial={{x:-60}} animate={{x:0}} transition={{duration:0.5}} className="text-[35px] text-purple-300 text-shadow-[0_0_20px_rgb(255,255,255)]">Get in touch with us</motion.h2>
                    <form onSubmit={(e)=>FormHandler(e)} className="h-[40vh] w-[60vw] flex flex-col justify-center items-center gap-4 ">
                        <input value={email} required type="email" placeholder="Enter your Email" className="w-62.5 text-center text-purple-300 border-b-2 border-purple-300 outline-none placeholder:text-purple-300 z-50" onChange={(e)=>setEmail(e.target.value)}/>
                        <textarea value={help} required placeholder="How can we help you?" className="md:w-[40vw] w-[80vw] md:h-[15vw] h-37.5 text-purple-300 text-center border-2 rounded-[20px] placeholder:text-purple-300 outline-none z-50" onChange={(e)=>setHelp(e.target.value)}></textarea>
                        <button type="submit" className="h-12.5 w-45  text-purple-200 text-[20px] font-bold rounded-[20px] bg-purple-400 cursor-pointer duration-200 hover:scale-115 hover:drop-shadow-[0_0_10px_rgb(255,255,255)] active:scale-100 z-50">Submit</button>
                    </form>
                    <motion.div initial={{y:60}} animate={{y:0}} transition={{duration:0.5}} className="flex md:flex-row flex-col md:gap-25 gap-2.5">
                        {
                            contactInfo.map((items,index)=>(
                                <div key={index} className="md:h-25 h-15 md:w-[320px] w-62.5 flex flex-col justify-center items-center md:gap-1.25 rounded-[20px] bg-purple-400 z-50">
                                  <h1  className="md:text-[20px] text-[10px] text-purple-100">{items.Title}</h1>
                                  <address className="flex justify-center items-center md:gap-2.5 gap-1.25 ">
                                      <img src={`./Images/${items.icon}.png`} alt={items.Title} className="md:h-10 h-5"/>
                                      <a className="text-purple-100 font-bold md:text-[16px] text-[13px]" href={index===0?`tel: ${items.info}`:index===1?`mailto: ${items.info}`:`${items.link}`}>{items.info}</a>
                                 </address>
                                </div>
                            ))
                        }
                    </motion.div>
                    <motion.div className={`${loading?"block":"hidden"} absolute top-[35%] flex flex-col justify-center items-center z-70`}>
                        <motion.img animate={{rotate:360}} transition={{repeat:Infinity,duration:1,ease:"linear"}} src="./Images/HalfLogo.png" className="h-25"/>
                        <p className="text-purple-300 text-[30px]">Please Wait...</p>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}  className={`${message===""?"hidden":"block"} h-50 w-120 absolute top-[35%] flex flex-col justify-center items-center gap-3.75 rounded-[30px] bg-purple-400 z-70`}>
                       <p className="text-purple-200 text-[30px]">{message}</p>
                       <button className="h-12.5 w-25 text-[20px] rounded-[20px] text-purple-200  bg-purple-500 duration-100 hover:scale-110 cursor-pointer" onClick={()=>setMessage("")}>OK</button>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className={`${loading||message!==""?"block":"hidden"} h-full w-full absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] z-60`}></motion.div>
                </motion.section>
            )
    )

}



