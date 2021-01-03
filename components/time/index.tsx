import {useState, useEffect} from 'react'

export default function Time(){
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = String(date.getFullYear());
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const today = time + '-' + mm + '/' + dd + '/' + yyyy;


    console.log("time render", today)
    console.log(new Date())

    return (
        <div className='time'>{today}</div>
    )
}