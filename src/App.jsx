import { useState } from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
export default function App(){
      const [activetab,setTab] = useState("")
      const [isGetStarted,setGetStarted] = useState(false);
 return(<>
           
           <Header 
           activeTab={activetab}
           setTab={setTab}
           isGetStarted={isGetStarted}/>
           <Hero 
           setGetStarted={setGetStarted}
           isGetStarted={isGetStarted}
           setTab={setTab}/>
           <Home 
           activeTab={activetab}/>
           <Services activeTab={activetab}/>
           <Contact
           activetab={activetab}/>
           <Blog
           activeTab={activetab}/>
           </>)
}