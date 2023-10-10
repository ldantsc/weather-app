import { userLocale } from "./userLocale";

export class WeatherApi {

    _city: string
    _key: string

    constructor(city: string) {
        this._city = city;
        this._key = "dae1470781a876b1e32c0d552970e76e";
    }

    /* Conversor Kelvin para Celsius*/

    convertTemperatureFahrenheitToCelsius(temperature: number) {
        const kelvinConvert = 273.15
        return temperature - kelvinConvert;
    };

    /* Função de coordenadas que retorna latitude e longitude */

    async getCoordinates() {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this._city}&limit=1&appid=${this._key}&lang={pt_br}`);
        const coordinates = await response.json();

        /*se as coordenadas não foram definidas pelo usuário a api retornara bad request 400, 
        sendo assim utilizar as coordenadas de localização do user */

        if (coordinates.cod === "400") {
            const localResult: any = await userLocale()
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${localResult.city}&limit=1&appid=${this._key}&lang={pt_br}`)
            const coordinates = await response.json();

            interface LocalCoordinates {
                city: string;
                latitude: number;
                longitude: number;
            }

            const localCoordinates: LocalCoordinates = {
                city: coordinates[0].name,
                latitude: coordinates[0].lat,
                longitude: coordinates[0].lon
            };

            return localCoordinates;
        }

        interface LocalCoordinates {
            city: string;
            latitude: number;
            longitude: number;
        }

        const localCoordinates: LocalCoordinates = {
            city: coordinates[0].name,
            latitude: coordinates[0].lat,
            longitude: coordinates[0].lon
        };

        return localCoordinates;

    }

    /* Dados ja convertidos de temperaturas */

    async temperatures() {
        const coordinates = await this.getCoordinates();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this._key}`);
        const localTemperatures = await response.json();

        interface Temperatures {
            city: string;
            weather: string;
            weatherDescription: string;
            humidity: number;
            temperature: number;
            feelsLike: number;
            minTemperature: number;
            maxTemperature: number;
        }

        const temperatures: Temperatures = {
            city: coordinates.city,
            weather: localTemperatures.weather[0].main,
            weatherDescription: localTemperatures.weather[0].description,
            humidity: localTemperatures.main.humidity,
            temperature: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.temp),
            feelsLike: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.feels_like),
            minTemperature: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.temp_min),
            maxTemperature: this.convertTemperatureFahrenheitToCelsius(localTemperatures.main.temp_max),
        }


        return temperatures;
    }
}