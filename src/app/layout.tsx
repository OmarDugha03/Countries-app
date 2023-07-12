import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full p-16 mx-auto my-0 bg-gray-200 flex justify-center content-center'>{children}</body>
    </html>
  )
}
