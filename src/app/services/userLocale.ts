export async function userLocale(): Promise<unknown> {
    return new Promise((resolve, reject) => {

        // Verifica se o navegador suporta a API de Geolocalização

        if ("geolocation" in navigator) {

            // Obtém as coordenadas do usuário

            navigator.geolocation.getCurrentPosition(
                async function (position) {

                    /* Google Geolocation API Reverse */

                    const apiGoogleKey = process.env.GOOGLE_API_KEY
                    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=administrative_area_level_1&key=${apiGoogleKey}`);
                    const data = await response.json();

                    const localUser = {
                        city: data.results[0].address_components[0].long_name,
                        state: data.results[0].address_components[0].short_name,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    resolve(localUser);
                },
                function (error) {
                    reject(error);
                }
            );
        } else {
            reject("A geolocalização não disponivel");
        }
    });
}