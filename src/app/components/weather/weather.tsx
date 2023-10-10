
import "./styles.css"

export default function Weather(props: any) {

    const { data } = props

    return(
        <div id="container-weather" className="flex justify-center items-center h-full">
            <div id="weather" className="flex flex-col justify-around xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[280px] md:h-[280px] w-[270px] h-[270px] m-3 rounded-3xl">
                <div id="container-top-info" className="flex justify-around grow-0">
                    <div id="describe">
                        <h1 className="text-3xl font-bold text-gray-600">{data.describe}</h1>
                        <p id="air">Air</p>
                    </div> 
                    <div id="container-img">
                        <img className="w-20"  src="/Day.svg"/>
                    </div>  
                </div>
                <div id="2" className="flex justify-around grow-1">
                    <div className="flex">
                        <ul className="self-end">
                            <li className="text-sm">Min <span>{data.min}</span> ºC</li>
                            <li className="text-sm">Max <span>{data.max}</span> ºC</li>
                        </ul>
                    </div>
                    <div className="text-end">
                        <h2 className="text-xl">Sunday</h2>
                        <h3 className="text-4xl font-bold text-gray-600">{data.temp} ºC</h3>
                        <p className="text-2xl ">{data.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}