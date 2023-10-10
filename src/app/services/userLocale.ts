export async function userLocale() {
    return new Promise((resolve, reject) => {
        // Verifica se o navegador suporta a API de Geolocalização
        if ("geolocation" in navigator) {
            // Obtém as coordenadas do usuário
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const userLocaleCoordinates = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    resolve(userLocaleCoordinates);
                },
                function (error) {
                    reject(error);
                }
            );
        } else {
            reject("A geolocalização não é suportada pelo seu navegador.");
        }
    });
}