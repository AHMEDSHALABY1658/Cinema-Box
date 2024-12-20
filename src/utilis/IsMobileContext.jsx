import {createContext, useEffect, useState} from "react"


export const IsMobileContext =  createContext();



export function IsMobileProvider({children}){

    const [isMobel,setIsMobile] = useState(null)

        const checkMobile = (e) =>{
            console.log("yes")
            setIsMobile(e.matches)
        }

        useEffect(()=>{
            window.matchMedia("(max-width:1024px)").addEventListener("change",checkMobile)
            setIsMobile(window.matchMedia("(max-width:1024px").matches)
        },[])

    return<IsMobileContext.Provider value={{isMobel}}>
        {children}
    </IsMobileContext.Provider>
    }