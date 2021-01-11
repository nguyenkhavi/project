import {useState, useEffect} from 'react'
import getToday from '../../helpers/getToday'

export default function Time() {
    const [today, setToday] = useState('')

    useEffect(() => {
        setToday(getToday)
        const t = setInterval(() => {
            setToday(getToday())
        },1000)
        return () => {
            clearInterval(t)
        }
    },[])

    return (
        <div className='time'>{today}</div>
    )
}