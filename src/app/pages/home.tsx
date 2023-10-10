"use client"
import { useState, useEffect } from 'react'
import { WeatherApi } from "../services/WeatherApi"
import Weather from "../components/weather/weather"
import Search from "../components/search/search"
import Footer from "../components/footer/footer"


export default function Home() {

  const [cityValue, setCityValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [temperatures, setTemperatures] = useState(null);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitValue(cityValue);
    }, 2000);
    return () => clearTimeout(timer);
  }, [cityValue]);
  
  useEffect(() => {
    // Dentro deste useEffect, faça a chamada à API e atualize o estado de temperatures
    const api = new WeatherApi(submitValue);
    api.temperatures()
    .then((data: any) => {
      // Quando os dados estiverem prontos, atualize o estado
      setTemperatures(data);
    })
    .catch((error) => {
        // Lida com erros aqui, se houver algum
        console.error('Erro:', error);
      });
    }, [submitValue]);

    const dataWeather = {
      city: temperatures?.city,
      temp: temperatures?.temperature.toFixed(0),
      min: temperatures?.minTemperature.toFixed(0),
      max: temperatures?.maxTemperature.toFixed(0),
      describe: temperatures?.weather,
    }
    
    return (
      <main id="container-main" className="w-screen h-screen grid grid-cols-1 md:scale-1">
      <div id="container-header">
        <Search value={cityValue} event={function event(e: any) { setCityValue(e.target.value) }} />
      </div>
      <div id="container-weather" className="row-span-1">
        {temperatures && typeof temperatures === 'object' && 'city' in temperatures && (
          <Weather data={dataWeather}/>
        )}
      </div>
      <div id="container-footer">
        <Footer />
      </div>
    </main>
  )
}