import {useState, useEffect} from 'react'
import getToday from '../../helpers/getToday'

export default function Time(){
    const tempToday = getToday()
    const [today, setToday] = useState(tempToday)

    useEffect(() => {
        setInterval(() => {
            setToday(getToday())
        },1000)
    },[today])

    return (
        <div className='time'>{today}</div>
    )
}