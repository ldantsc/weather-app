import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const inter = Lato({ subsets: ['latin'], variable: "--font-lato", weight: "400" })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather App create by dants.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
