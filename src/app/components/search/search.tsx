import { useState, useEffect } from 'react'
import { WeatherApi } from '@/app/services/WeatherApi';
import './styles.css'



export default function Search(props: any) {

    return (
        <div id="header" className="flex justify-center items-center h-full text-center">
            <div id="container-search" className="flex justify-center items-center scale-x-65 scale-y-70 sm:scale-75 md:scale-90 lg:scale-100 md:scale transform-gpu">
                <img id='image-search' src="/search.svg" alt="" />
                <input id="input-search" className="search-input" type="text" value={props.value} onChange={props.event} placeholder="Type your city here..."></input>
            </div>
        </div>
    )
}
