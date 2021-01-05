import { useState, useEffect } from "react";

export default function isMobile(){
    const [width,setWidth] = useState(0)

    const changeWidth = () => {
        const width = window.innerWidth
        setWidth(width)
    }

    useEffect(() => {
        changeWidth()
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }        
    },[])

    return width < 786
}