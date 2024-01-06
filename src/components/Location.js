import React from "react";
import { useState } from "react";
import axios from 'axios';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import DeviceThermostatTwoToneIcon from '@mui/icons-material/DeviceThermostatTwoTone';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SpeedIcon from '@mui/icons-material/Speed';
import DescriptionIcon from '@mui/icons-material/Description';

function  Location()
{
    const[city,setcity]=useState("")
    
    const[weather,setweather]=useState({
        country:"india",
        humidity:0,
        wind:0,
        temp:0,
        visibility:0,
        description:"clear",
        temp_max:0,
        temp_min:0,

    })

   
    const handleClick =()=>
    {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e95bacbfdc714cd17612a7ca8324aea8`)
       


        .then((response) => {
          if(!city){
            <alert></alert>
          }
            setweather({
                country:response.data.sys.country,
                humidity:response.data.main.humidity,
                temp:response.data.main.temp-273,
                wind:response.data.wind.speed,
                visibility:response.data.sys.visibility,
                description:response.data.weather[0].description,
                lon:response.data.coord.lon,
                lat:(response.data.coord.lat*1.8+32),
                
             })
        })
        
    }
return(
<>
    <div className="search">
      <div className="searchbar">
        <h1>Weather Forecasting</h1>
      
          
      
        <input type="text" placeholder="Enter City Name" value={city} onChange={(e)=>{
            setcity(e.target.value);
        }} />
        <button type="submit" onClick={handleClick} class="icon"><TravelExploreIcon/></button>
        </div>
        <div className="cilmate">
      <div className="box">
        <div className="card1">
  <div className="card-body1">
    <h2 className="card-title1">Country</h2>
    <h3>{weather.country}</h3>
    <div className="g">
      <PublicTwoToneIcon  sx={{fontSize:40}}/>
      
      </div>
  
    </div>

    
  </div>
  <div className="card1">
  <div className="card-body1">
    <h2 className="card-title1">Temp</h2>
    <div className="g2">
    <DeviceThermostatTwoToneIcon  sx={{fontSize:40}}/>
    </div>
    <h3>{Math.round(weather.temp)}°C</h3>
  
</div>
</div>
<div className="card1">
  <div className="card-body1">
    <h2 className="card-title1">Humidity</h2>
    <div className="g2">
    < AirIcon  sx={{fontSize:40}}/>
    </div>
    <h3>{Math.round(weather.humidity)}%</h3>
  
</div>
</div>
</div>
<div className="bottom">
        <div className="card1">
  <div className="card-body">
    <h2 className="card-title1">Visibility</h2>
    <div className="g3">
    < VisibilityIcon  sx={{fontSize:40}}/>
    </div>
    <h3>{weather.visibility}mi</h3>
    </div>

    
  </div>
  <div className="card1">
  <div className="card-body1">
    <h2 className="card-title1">Wind</h2>
    <div className="g2">
    < SpeedIcon  sx={{fontSize:40}}/>
   
    </div>
    <h3>{Math.round(weather.wind)}Km/h</h3>
  
</div>
</div>
<div className="card1">
  <div className="card-body1">
    <h2 className="card-title1">Description</h2>
    <div className="g2">
    < DescriptionIcon  sx={{fontSize:40}}/>
    </div>
    <h3>{weather.description}</h3>
  
</div>
</div>
</div>

</div>
<div className="left">
 
           <div className="log">
  <div className="log-card">
    <h4>Log:{weather.lon}</h4>
    <h4>Lat:{weather.lat}</h4>
    
    
    
  
</div>
<div className="city">
<div >
<h4>{city},{weather.country}</h4>
</div>
</div>
<div className="side">
<div className="temp">
<h1>{Math.round(weather.temp)}°C</h1>

</div>
  </div>


</div>

</div>
</div>
  </>   
  
)
}

export default Location;
