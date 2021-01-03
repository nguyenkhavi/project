import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Image, Text } from "@chakra-ui/react"

export default function ActiveCountry({activeCountry}){
    return(
        <>
            {activeCountry && 
            <div className='active'>
                <div className='img-header'>
                    <img src={activeCountry.countryInfo.flag}/>
                    <div>
                        <Text fontSize="6xl">{activeCountry.country}</Text>
                        <Text fontSize="3xl"><b>Population: </b>{activeCountry.population}</Text>
                        <Text fontSize="3xl"><b>Continent: </b>{activeCountry.continent}</Text>
                    </div>
                </div>

                <Table variant="simple">
                <TableCaption>Today in {activeCountry.country}</TableCaption>
                <Thead>
                    <Tr>
                    <Th>Today cases</Th>
                    <Th>Today deaths</Th>
                    <Th>Today recovered</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{activeCountry.todayCases}</Td>
                        <Td>{activeCountry.todayDeaths}</Td>
                        <Td>{activeCountry.todayRecovered}</Td>
                    </Tr>
                </Tbody>
                </Table>

                <Table variant="simple">
                <TableCaption>COVID-19 pandemic in {activeCountry.country}</TableCaption>
                <Thead>
                    <Tr>
                    <Th>Cases</Th>
                    <Th>Deaths</Th>
                    <Th>Recovered</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{activeCountry.cases}</Td>
                        <Td>{activeCountry.deaths}</Td>
                        <Td>{activeCountry.recovered}</Td>
                    </Tr>
                </Tbody>
                </Table>

            </div>}
            
        </>
    )
}