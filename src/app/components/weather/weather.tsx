import { setImageWeather, setAirPoluitionStatus } from "@/app/services/uiFunctions"
import Image from "next/image"
import { motion } from "framer-motion"
import "./styles.css"


export default function Weather(props: any) {

    /* Desestruturação do objeto data */

    const { data } = props

    /*chamando a função para mudar de acordo com o valor do data.airPollution*/
    setAirPoluitionStatus(data.airPollution)

    return (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.6 }} id="container-weather" className="flex justify-center items-center h-full scale-85 md:scale-100  transform-gpu">
            <div id="weather" className="flex flex-col justify-around xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[280px] md:h-[280px] w-[270px] h-[270px] m-2 px-5 xl:m-3 xl:px-8 xl:py-5 py-3 rounded-3xl">
                <div id="container-weather-top-info" className="flex justify-between p-2">
                    <div id="describe-weather" className="flex flex-col">
                        <h1 id="describe" className="text-xl md:text-1xl xl:text-2xl font-bold text-gray-600 pb-1">{data.weather}</h1>
                        <div id="humidity-weather">
                            <p id="humidity" className="text-sm"><span className="text-sm font-bold pr-1">{data.humidity}%</span>Humidity</p>
                        </div>
                        <div id="pollution-weather" className="flex items-center">
                            <div className="pollution-status"> </div>
                            <p id="pollution-desc" className=" pl-2 text-sm">Air Quality</p>
                        </div>
                    </div>
                    <div id="container-icon-weather">
                        <Image src={setImageWeather(data.icon)} width={0} height={0} className="w-[52px] md:w-[58px] xl:w-[64px] opacity-75 animate-pulse" alt="weather condition image"/>
                    </div>
                </div>
                <div id="container-weather-bottom-info" className="flex justify-between p-2">
                    <div id="container-temperatures-min-max" className="flex w-24">
                        <ul id="list-temperatures-text-min-max" className="self-end">
                            <li className="text-sm">Min </li>
                            <li className="text-sm">Max </li>
                        </ul>
                        <ul id="list-temperatures-values-min-max" className="self-end">
                            <li className="text-sm font-bold pl-[5px]">{data.minTemperature.toFixed()} ºC</li>
                            <li className="text-sm font-bold pl-[5px]">{data.maxTemperature.toFixed()} ºC</li>
                        </ul>
                    </div>
                    <div id="container-weather-main" className="text-end pr-4">
                        <h3 id="weather-temperature" className="text-4xl font-bold text-gray-600 mb-1">{data.temperature.toFixed()} ºC</h3>
                        <p  id="weather-city" className="text-md font-bold text-clip">{data.city}</p>
                        <p id="weather-state" className="text-sm font-thin ">{data.state}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
