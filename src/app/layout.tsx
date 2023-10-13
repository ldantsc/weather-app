import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const inter = Lato({ subsets: ['latin'], variable: "--font-lato", weight: "400" })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'WeatherApp create by dants.dev using OpenWeather API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
