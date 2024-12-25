import React, { useContext, useState } from 'react'
import img from "../../assets/cinemaBox-removebg-preview.png";
import{IsMobileContext} from"../../utilis/IsMobileContext"
import { delay, motion } from "framer-motion";

export default function Navbar() {
    const[activeMenu,setActiveMenu]=useState(false)
    const links =[
        {
            id:1 , link:"home",isActive:true
        },
        {
            id:2 , link:"about"
        },
        {
            id:3 , link:"Moveies"
        },
        {
            id:4 , link:"contact"
        },
    ]
    const{isMobel}=useContext(IsMobileContext)
    return (
        <nav>
            <motion.div className='logo' initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>
                <img src={img} alt="" />
            </motion.div>

            {!isMobel&&(
                <>
                <motion.div className="menu" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>
                <ul>
                {
                links.map((link)=>(
                    <a key={link.id} className={link.isActive ? "active":""}>{link.link}</a>
                )) 
                }
                </ul>
            </motion.div>
            <motion.div className="btn" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>
                <button>get started</button>
            </motion.div>

            </>
            )}

            {isMobel&&(
                <>
                <div className="bar" onClick={()=>{
                    setActiveMenu(!activeMenu)
                }}>
                <div></div>
                <div></div>
                </div>

            <motion.div className={`mobile-menu ${activeMenu?"active":""}`}initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{ delay: 0.25, duration: 1 ,staggerChildren:0.25 }}>
                <ul>
                    {
                        links.map((link) => (
                            <a 
                                key={link.id} 
                                className={link.isActive ? "active" : ""}
                            >
                                {link.link}
                            </a>
                        ))
                    }
                </ul>
                </motion.div>

                </>
            )}

        </nav>
    )
}
