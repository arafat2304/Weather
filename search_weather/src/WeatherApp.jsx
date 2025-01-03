import { useState } from "react"
import InfoBox from "./InfoBox"
import Search_Box from "./Search_Box"
export default function WeatherApp(){

    let[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:13.52,
        humidity:77,
        temp:14.05,
        tempMax:14.05,
        tempMin:14.05,
        weather:"fog",
    })

    let handleSearch=(result)=>{
    setWeatherInfo(result)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App By Arafat</h1>
            <Search_Box handleSearch={handleSearch}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}