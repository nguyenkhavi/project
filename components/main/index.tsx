import {useEffect, useState} from 'react'
import ActiveCountry from '../ActiveCountry'
import Header from '../header'
import { Button } from "@chakra-ui/react"
import Loading from '../Loading'
import { Input } from "@chakra-ui/react"


export default function Main({isMobile}){
    const [data, setData] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [active, setActive] = useState(false)

    const filter = ({country, continent}, filters) => {

        if((country.indexOf(filters.country)!= - 1 ) && continent.indexOf(filters.continent)!= - 1 )
            return true
        return false
    }

    const handleChangeCountry = (event) => {
        const key = event.target.value
        const newFilters = {
            country: key,
            continent: ''
        }
        if(key !='')
            setDisplayData(data.filter(country => filter(country, newFilters)))
        else
            setDisplayData(data)
    }
    const handleChangeContinent = (event) => {
        const key = event.target.value
        const newFilters = {
            country: '',
            continent: key
        }
        if(key !='')
            setDisplayData(data.filter(country => filter(country, newFilters)))
        else
            setDisplayData(data)
    }

    useEffect(() => {
        console.log("useEffect")
        const requestUrl = 'https://corona.lmao.ninja/v2/countries'
        fetch(requestUrl).then((response) => {
            return (response.json());
        }).then((data) => {  
            setData(data)
            setIsLoading(false) 
            setActive(data[214])
            setDisplayData(data)
        })
    },[])

    return (
        <>
        <Header />
        {isLoading && <Loading/>}

        {!isLoading && <div className='main'>
                    <div >
                        {active && <ActiveCountry activeCountry={active}/>}
                    </div>


                    {(<div className='table'>
                        <div className='table-header'>LIST OF COUNTRIES OF THE WORLD</div>
                        <div className='row'>
                            <div >COUNTRIES
                                <Input onChange={handleChangeCountry} placeholder="Enter country" />
                            </div>
                            <div >COMTINENTS
                                <Input onChange={handleChangeContinent} placeholder="Enter continent" />
                            </div>
                            <div >INFO
                            </div>
                        </div>
                        <ul>
                            {displayData.map((country, idx) => 
                                <li className='row' key={`${country.countryInfo.iso3}-${idx}`} >
                                    <div>{country.country}</div>
                                    <div>{country.continent}</div>
                                    <div className='btn'><Button onClick={() => setActive(country)}>Details</Button></div>
                                </li> 
                            )}

                        </ul>
                    </div>)}


                </div>}


        </>
    )
}