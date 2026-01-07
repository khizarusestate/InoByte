import { motion } from "framer-motion"
export default function Blog({activeTab}){
    const Blogs =  [{Title:"How To Install Windows 11",img:"BlogInfo1.png",link:"https://youtu.be/eK7n0dWx_Fs?si=pjRfp62zbFDyEfKI"},{Title:"Web Development Full Course by Bro Code",img:"BlogInfo2.png",link:"https://youtu.be/HGTJBPNC-Gw?si=AtK8082C6yS23ZM4"},{Title:"OOPS in C++ by Apna College",img:"BlogInfo3.png",link:"https://youtu.be/mlIUKyZIUUU?si=41l8AShI4GaHmuir"},{Title:"Python Full Course by Code with Herry",img:"BlogInfo4.png",link:"https://youtu.be/UrsmFxEIp5k?si=hIHtgGr2xOAKH9_4"}]
    return(
          activeTab==="Blog"&&(
                <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="h-screen w-screen flex md:flex-row flex-col justify-center md:items-end md:gap-7.5 gap-12.5 md:m-0 ">
                    <article className="md:h-[90vh] h-[30vh] md:w-[50vw] flex flex-col justify-center items-center gap-2.5">
                        <motion.img initial={{x:-60}} animate={{x:0}} transition={{duration:0.6}} src="./Images/BlogMain.png" alt="Blog" className="md:h-75 h-30 md:w-[50vw] w-70 border border-purple-300 rounded-[10px] drop-shadow-[0_0_10px_rgb(255,255,255)]"/>
                        <h1 className="text-purple-300 md:text-[35px] text-[25px] font-bold">Cybersecurity Essentials</h1>
                        <p className="text-purple-200 md:text-[16px] text-[12px] text-center">Cybersecurity aims to protect computer systems, networks, and data from unauthorized access, hacking, and malware. It is essential for both organizations and individuals to keep sensitive information safe and ensure secure digital transactions. Tools like firewalls, encryption, and strong passwords are commonly used in cybersecurity.</p>
                    </article>
                    <article className="md:h-[90vh] md:w-[40vw] flex flex-col justify-center items-center gap-2.5 ">
                     {
                       Blogs.map((items,index)=>(
                            <div key={index} className="flex justify-center items-center gap-2.5">
                                <a href={items.link}><motion.img initial={{y:60}} animate={{y:0}} transition={{duration:0.5}} src={`./Images/${items.img}`} alt={items.Title} className="md:h-25 h-15 md:w-50 w-30 border border-purple-300 rounded-[5px] duration-100 hover:drop-shadow-[0_0_20px_rgb(255,255,255)] hover:scale-110 cursor-pointer"/></a>
                                <motion.p initial={{x:60}} animate={{x:0}} transition={{duration:0.5}} className="w-62.5 md:text-[15px] text-[10px] text-purple-300 border-b border-purple-100 text-center">{items.Title}</motion.p>
                            </div>
                        ))
                     }
                     </article>
                </motion.section>
                              

                                
            )
    )
}
