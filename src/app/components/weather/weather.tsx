import { motion } from "framer-motion"
import "./styles.css"


/* Função para mudar a imagem do widget de acordo com o que esta sendo recebido da API*/

function setImageWeather(props: string) {
    if (props === '01d') {
        return './clear_day.svg'
    } else if (props === '01n') {
        return './clear_night.svg'
    } else if (props === '02d' || props === '03d' || props === '04d') {
        return './clouds_day.svg'
    } else if (props === '02n' || props === '03n' || props === '04n') {
        return './clouds_night.svg'
    } else if (props === '09d' || props === '10d' || props === '09n' || props === '10n') {
        return './rain.svg'
    } else if (props === '11d' || '11n') {
        return './thunderstorm.svg'
    } else if (props === '13d' || '13n') {
        return './snow.svg'
    } else {
        return './mist.png'
    }
}



export default function Weather(props: any) {
    /* Desestruturação do objeto data */
    const { data } = props


    return (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ delay: 1, duration: 0.6 }} id="container-weather" className="flex justify-center items-center h-full scale-80 md:scale-100  transform-gpu">
            <div id="weather" className="flex flex-col justify-around xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[280px] md:h-[280px] w-[270px] h-[270px] m-1 p-1 rounded-3xl">
                <div id="container-top-info" className="flex justify-around grow-0">
                    <div id="describe">
                        <h1 className="text-3xl font-bold text-gray-600">{data.weather}</h1>
                        <div id="humidity" >
                            <p className="text"><span className="text-sm font-bold pr-1">{data.humidity}%</span>Humidity</p>
                        </div>
                    </div>
                    <div id="container-img">
                        <img className="w-[64px] opacity-75 animate-pulse" src={setImageWeather(data.icon)} />
                    </div>
                </div>
                <div id="2" className="flex justify-around grow-1">
                    <div className="flex">
                        <ul className="self-end">
                            <li className="text-sm">Min </li>
                            <li className="text-sm">Max </li>
                        </ul>
                        <ul className="self-end">
                            <li className="text-sm font-bold pl-[5px]">{data.minTemperature.toFixed()} ºC</li>
                            <li className="text-sm font-bold pl-[5px]">{data.maxTemperature.toFixed()} ºC</li>
                        </ul>
                    </div>
                    <div className="text-end">
                        <h3 className="text-4xl font-bold text-gray-600 mb-1">{data.temperature.toFixed()} ºC</h3>
                        <p className="text-md font-bold">{data.city}</p>
                        <p className="text-sm font-thin">{data.state}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}