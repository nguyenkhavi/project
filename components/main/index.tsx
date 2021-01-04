import {useEffect, useState} from 'react'
import ActiveCountry from '../ActiveCountry'
import Header from '../header'
import { Button } from "@chakra-ui/react"
import { Select } from "@chakra-ui/react"
import Loading from '../Loading'


export default function Main(){
    const [data, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const requestUrl = 'https://corona.lmao.ninja/v2/countries'
        fetch(requestUrl).then((response) => {
        return (response.json());
        }).then((data) => {  
            setData(data)
            setIsLoading(false)    
       
        })
    },[])


    const vn = data[214]
    const [active, setActive] = useState(false)
    return (
        <>
        <Header/>
        {isLoading && <Loading/>}
        {!isLoading && <div className='main'>
                <div >
                    {active && <ActiveCountry activeCountry={active}/>}
                </div>
                <div className='table'>
                    <div className='table-header'>LIST OF COUNTRIES OF THE WORLD</div>
                    <div className='row'>
                        <div >COUNTRY</div>
                        <div >COMTINENTS</div>
                        <div >INFO</div>
                    </div>
                    <ul>
                        {data.map(country => 
                        <li className='row' key={country.countryInfo.iso3} >
                            <div>{country.country}</div>
                            <div>{country.continent}</div>
                            <div className='btn'><Button onClick={() => setActive(country)}>Details</Button></div>
                        </li> 
                        )}
                    </ul>
                </div>
        </div>}
        </>
    )
}