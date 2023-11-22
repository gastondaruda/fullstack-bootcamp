import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Countries() {

    const [countryName, setCountryName] = useState("")
    const [countries, setCountries] = useState([])


    const handleSearch = (e) => {
        setCountryName(e.target.value)
    }

    const handleShow = (e) => {
        console.log(e)
        setCountryName(e)
    }

    useEffect(() => {
        axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => {
            setCountries(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err)) 
    },[countryName])

    return (
        <div>
            <h6>Find Countries</h6>
            <input 
                type='text'
                onChange={handleSearch}
            />
            <>
                {
                    countryName === "" ? <span>Please, enter a country...</span> :
                    countries.length >= 10 ? <span>Too many matches, specify another filter...</span> :
                    countries.length === 1 ?
                        <div>
                            <h3>{countries[0].name.common}</h3>
                            <h5>Capital - {countries[0].capital[0]}</h5>
                            <p>Population - {countries[0].population}</p>
                            <div>
                                <h5>Languages</h5>
                                <ul>
                                    {
                                        Object.values(countries[0].languages).map(e => <li key={e}>{e}</li>)
                                    }                                    
                                </ul>
                                <img alt={countries[0].name.common} src={countries[0].flags.png}/>
                                <span>{}</span>
                            </div>
                        </div> : 
                    <ul>
                        {
                        countries.map((country,i) => 
                            <>
                                <li key={i}>{country.name.official}</li>
                                <button onClick={() => handleShow(country.name.official)}>Show</button>
                            </>
                        )
                        }
                    </ul>
                }
            </>
        </div>
    )
}
