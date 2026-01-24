import { Element } from "react-scroll";
import { motion } from "framer-motion"
import { useState } from "react";
export default function Contact(){
    const [email,setEmail] = useState("");
    const [help,setHelp] = useState("");
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState(false)
      const FormHandler= async(e)=>{
        e.preventDefault();
        const data = {email,help}
        setLoading(true);
        try{const req = await fetch("https://helpinobyte.vercel.app/api",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        
        if(req.ok)
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
        catch(err){
            setLoading(false);
            setMessage("Server Error!")}
        
    }
    return(
        <Element name="Contact">
        <motion.section  initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:0.5}} transition={{duration:1}} className="md:h-screen h-[70vh] flex flex-col  md:justify-center justify-center gap-5 items-center overflow-hidden relative z-90">
                <motion.h1 initial={{x:-50}} whileInView={{x:0}} viewport={{once:true,amount:0.5}} transition={{duration:1}} className="text-[35px] text-purple-300 text-shadow-[0_0_20px_rgb(255,255,255)]">Get in touch with us</motion.h1>
                    <motion.form initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:1}} transition={{duration:0.5}} onSubmit={(e)=>FormHandler(e)} className="h-[40vh] w-[60vw] flex flex-col justify-center items-center gap-4 ">
                        <input value={email} required type="email" placeholder="Enter your Email" className="w-62.5 text-center text-purple-300 border-b-2 border-purple-300 outline-none placeholder:text-purple-300 " onChange={(e)=>setEmail(e.target.value)}/>
                        <textarea value={help} required placeholder="How can we help you?" className="md:w-[40vw] w-[80vw] md:h-[15vw] h-37.5 text-purple-300 text-center border-2 rounded-[20px] placeholder:text-purple-300 outline-none " onChange={(e)=>setHelp(e.target.value)}></textarea>
                        <button type="submit" className="h-12.5 w-45  text-purple-200 text-[20px] font-bold rounded-[20px] bg-purple-400 duration-200 hover:scale-115 hover:drop-shadow-[0_0_10px_rgb(255,255,255)] active:scale-100 cursor-[url(Images/Cursor.png),auto]">Submit</button>
                    </motion.form>
                    <motion.div className={`${loading?"block":"hidden"} absolute top-[35%] flex flex-col justify-center items-center z-70`}>
                        <motion.img whileInView={{rotate:360}} transition={{repeat:Infinity,duration:1,ease:"linear"}} src="./Images/HalfLogo.png" className="h-25"/>
                        <p className="text-purple-300 text-[30px]">Please Wait...</p>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} viewport={{once:true,amount:0.5}} transition={{duration:0.5}}  className={`${message===""?"hidden":"block"} md:h-50 md:w-120 h-35 w-80 absolute top-[35%] flex flex-col justify-center items-center gap-3.75 rounded-[30px] bg-purple-800 z-70`}>
                       <p className="text-purple-200 text-[30px]">{message}</p>
                       <button className="h-12.5 w-25 text-[20px] rounded-[20px] text-purple-200  bg-purple-500 duration-100 hover:scale-110 " onClick={()=>setMessage("")}>OK</button>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className={`${loading||message!==""?"block":"hidden"} h-screen w-full absolute  bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] z-60 overflow-hidden`}></motion.div>
        </motion.section>
        </Element>
    )

}





