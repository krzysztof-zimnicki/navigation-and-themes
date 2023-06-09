import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spring-y Navigation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any"/>
      <body className='bg-white dark:bg-black'>{children}</body>
    </html>
  )
}
