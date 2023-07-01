import React, { useEffect, useState } from 'react'
import "./css/style.css"
const Tempapp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6538e9f2964c557dbc07e772a371ccc4`
            const response = await fetch(url)
            const resJson = await response.json()
            setCity(resJson.main)
        }


        fetchApi()

    }, [search])
    return (
        <div className='container'>
            <div className='box'>
                <div className='inputData'>
                    <input type='search' className='inputField'
                        value={search} onChange={(event) => { setSearch(event.target.value) }} />
                </div>


                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div className='info'>
                        <h2 className='location'>
                            <i class="fa-solid fa-street-view"></i>{search}
                        </h2>
                        <h1 className='temp'>
                            {city.temp}°C                      </h1>
                        <h5 className='temp2'>
                            Min : {city.temp_min}°C  | Max: {city.temp_max}°C
                        </h5>
                    </div>
                )

                }
            </div>

        </div>


    )
}
export default Tempapp