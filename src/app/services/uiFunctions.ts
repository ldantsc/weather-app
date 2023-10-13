/* Função para mudar a imagem do widget de acordo com o que esta sendo recebido da API*/

export function setImageWeather(props: string) {
    if (props === '01d') {
        return '/clear_day.svg'
    } else if (props === '01n') {
        return '/clear_night.svg'
    } else if (props === '02d' || props === '03d' || props === '04d') {
        return '/clouds_day.svg'
    } else if (props === '02n' || props === '03n' || props === '04n') {
        return '/clouds_night.svg'
    } else if (props === '09d' || props === '10d' || props === '09n' || props === '10n') {
        return '/rain_all.svg'
    } else if (props === '11d' || props === '11n') {
        return '/thunderstorm.svg'
    } else if (props === '13d' || props === '13n') {
        return '/snow.svg'
    }
    return './mist.svg'
}

/* Mudar cor de acordo com a poluição do ar (data.airPollution) */

export function setAirPoluitionStatus(props: number) {

    const root = document.documentElement

    if (props === 1) {
        return root.style.setProperty('--background-air-pollution', '#A2F37C')
    } else if (props === 2) {
        return root.style.setProperty('--background-air-pollution', '#BFD07B')
    } else if (props === 3) {
        return root.style.setProperty('--background-air-pollution', '#E0C900')
    } else if (props === 4) {
        return root.style.setProperty('--background-air-pollution', '#FC8A22')
    } else {
        return root.style.setProperty('--background-air-pollution', '#E12828')
    }
}