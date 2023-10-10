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

    const api = new WeatherApi(submitValue);
    api.temperatures()
      .then((data: any) => {
        setTemperatures(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, [submitValue]);

  return (
    <main id="container-main" className="w-screen h-screen grid grid-cols-1 md:scale-1">
      <div id="container-header">
        <Search value={cityValue} event={function event(e: any) { setCityValue(e.target.value) }} />
      </div>
      <div id="container-weather" className="row-span-1">
        {temperatures && typeof temperatures === 'object' && 'city' in temperatures && (
          <Weather data={temperatures} />
        )}
      </div>
      <div id="container-footer">
        <Footer />
      </div>
    </main>
  )
}
