export default function Blog(activeTab){
    return(
                <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="h-screen w-screen flex justify-center items-end gap-7.5">
                    <article className="h-[90vh] w-[50vw] flex flex-col justify-center items-center gap-2.5">
                        <motion.img initial={{x:-60}} animate={{x:0}} transition={{duration:0.6}} src="./Images/BlogMain.png" alt="Blog" className="h-75 w-[50vw] border border-purple-300 rounded-[10px] drop-shadow-[0_0_10px_rgb(255,255,255)]"/>
                        <h1 className="text-purple-300 text-[35px] font-bold">Cybersecurity Essentials</h1>
                        <p className="text-purple-200 text-center">Cybersecurity aims to protect computer systems, networks, and data from unauthorized access, hacking, and malware. It is essential for both organizations and individuals to keep sensitive information safe and ensure secure digital transactions. Tools like firewalls, encryption, and strong passwords are commonly used in cybersecurity.</p>
                    </article>
                    <article className="h-[90vh] w-[40vw] flex flex-col justify-center items-center gap-2.5 ">
                     {
                        [{Title:"How To Install Windows 11",img:"BlogInfo1.png"},{Title:"Web Development Full Course by Bro Code",img:"BlogInfo2.png"},{Title:"OOPS in C++ by Apna College",img:"BlogInfo3.png"},{Title:"Python Full Course by Code with Herry",img:"BlogInfo4.png"}]
                        .map((items,index)=>(
                            <div key={index} className="flex justify-center items-center gap-2.5">
                                <motion.img initial={{y:60}} animate={{y:0}} transition={{duration:0.5}} src={`./Images/${items.img}`} alt={items.Title} className="h-25 w-50 border border-purple-300 rounded-[5px] duration-100 hover:drop-shadow-[0_0_20px_rgb(255,255,255)] hover:scale-110 cursor-pointer"/>
                                <motion.p initial={{x:60}} animate={{x:0}} transition={{duration:0.5}} className="w-62.5 text-[15px] text-purple-300 border-b border-purple-100 text-center">{items.Title}</motion.p>
                            </div>
                        ))
                     }
                     </article>
                </motion.section>
                              

                                
            )
    )
}