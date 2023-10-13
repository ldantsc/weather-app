import { userLocale } from "./userLocale";

export class WeatherApi {

    _city: string
    _key: string

    constructor(city: string, key: any = process.env.WEATHER_API_KEY) {
        this._city = city;
        this._key = key;
    }

    /* Conversor Kelvin para Celsius*/

    convertTemperatureFahrenheitToCelsius(temperature: number) {
        const kelvinConvert = 273.15
        return temperature - kelvinConvert;
    };

    /* Função de coordenadas que retorna latitude e longitude */
    /* OpenWeather API */

    async getCoordinates() {

        interface LocalCoordinates {
            city: string;
            state: string
            latitude: number;
            longitude: number;
        }

        /* Obter coordenadas por input do user */
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this._city}&limit=1&appid=${this._key}&lang={pt_br}`);
        var coordinates = await response.json();

        /* Coordenadas não foi definidas pelo user a API retornara bad request 400,
        utilizar as coordenadas de localização do user - Google Reverse Geolocation-API */

        if (coordinates.cod === '400') {
            const localResult: any = await userLocale()
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${localResult.city}&limit=1&appid=${this._key}&lang={pt_br}`)
            const coordinates = await response.json();

            const localCoordinates: LocalCoordinates = {
                city: coordinates[0].name,
                state: coordinates[0].state,
                latitude: coordinates[0].lat,
                longitude: coordinates[0].lon
            };
            
            return localCoordinates;
        }

        const localCoordinates: LocalCoordinates = {
            city: coordinates[0].name,
            state: coordinates[0].state,
            latitude: coordinates[0].lat,
            longitude: coordinates[0].lon
        };

        return localCoordinates;
    }

    /*OpenWeather Air Poluition API*/

    async airPollutionData() {
        const coordinates = await this.getCoordinates()
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this._key}`);
        const data = await response.json();
        return data.list[0];
    }

    /* Dados convertidos de temperaturas */

    async temperatures() {
        const airCondition = await this.airPollutionData();
        const coordinates = await this.getCoordinates();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this._key}`);
        const localTemperatures = await response.json();

        interface Temperatures {
            state: string;
            city: string;
            icon: string
            weather: string;
            weatherDescription: string;
            time: number
            humidity: number;
            temperature: number;
            feelsLike: number;
            minTemperature: number;
            maxTemperature: number;
            airPollution: number;
        }

        const temperatures: Temperatures = {
            state: coordinates.state,
            city: coordinates.city,
            icon: localTemperatures.weather[0].icon,
            weather: localTemperatures.weather[0].main,
            weatherDescription: localTemperatures.weather[0].description,
            time: localTemperatures.timezone,
            humidity: localTemperatures.main.humidity,
            temperature: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.temp),
            feelsLike: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.feels_like),
            minTemperature: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.temp_min),
            maxTemperature: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.temp_max),
            airPollution: airCondition.main.aqi
        }
        console.log(temperatures)

        return temperatures;

    }
};
