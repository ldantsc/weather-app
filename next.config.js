/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    }
}

module.exports = nextConfig
