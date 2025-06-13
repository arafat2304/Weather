import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search_Box.css"
import { useState } from 'react';
export default function Search_Box({handleSearch}){

    let[city,setCity]=useState("");
    let [error,setError]=useState(false);
    let API_KEY=import.meta.env.VITE_API_KEY;
    let API_URL=import.meta.env.VITE_API_URL;
    console.log(API_KEY,API_URL);

    let fetchData=async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let res=await response.json()
        let result={
            city,
            temp:res.main.temp,
            tempMin:res.main.temp_min,
            tempMax:res.main.temp_max,
            humidity:res.main.humidity,
            feelsLike:res.main.feels_like,
            weather:res.weather[0].description,
        }
        return result
        }catch(err){
            throw err;
        }
        
       
        
    }

    let handleInput=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let res=await fetchData()
            handleSearch(res)
            setError(false)
        }catch(err){
            setError(true)
        }
        

    }

   
    return(
        <div className='searchBox'>
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="Search City" variant="outlined" value={city} onChange={handleInput}/>
            <br/><br/>
            <Button variant="contained" type='submit'>Search</Button> 
            {error && <p style={{color:"red"}}><br/>No such place exist in API</p>}
            </form>
        </div>
    )
}