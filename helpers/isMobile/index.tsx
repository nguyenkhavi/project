import { useState, useEffect } from "react";

export default function isMobile(){
    const [dimensions,setDemensions] = useState({
        width: 0,
        height: 0
    })

    const changeWindowSize = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setDemensions({width, height})
    }

    useEffect(() => {
        window.addEventListener('resize', changeWindowSize)
        return () => {
            window.removeEventListener('resize', changeWindowSize)
        }        
    },[dimensions])

    return dimensions.width && dimensions.width < 786
}