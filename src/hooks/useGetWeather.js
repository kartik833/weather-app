import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'

const WeatherApi='9fb6ed02ea74d121f4bd898f70a374e0'

function useGetWeather() {

    const [loading, setloading] = useState(false)
  const [location, setlocation] = useState(null)
  const [error, seterror] = useState(null)   
  const [weather, setweather] = useState([])
  const [lat, setlat] = useState([])
  const [long, setlong] = useState([])

    const fetchWeatherData=async()=>{

        try {
          const res=await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WeatherApi}&units=metric`)
        const data=await res.json()
        setweather(data)
        } catch (e) {
    
          seterror('Could not fetch weather')
        }finally{
        setloading(false)
        }
    
        
      }
      useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            seterror('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setlat(location.coords.latitude)
          setlong(location.coords.longitude)
          await fetchWeatherData()
        })();   
      }, [lat,long]);
    
     return [loading,error,weather]
    //  return [loading,true,[]]
    
}

export default useGetWeather