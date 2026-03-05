import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./header";
import CircuitBackground from "./components/CircuitBackground"; // Add this

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kousha Amouzesh',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CircuitBackground /> Add this - it will appear on all pages
        {children}
      </body>
    </html>
  )
}