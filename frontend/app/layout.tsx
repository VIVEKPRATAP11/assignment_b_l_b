import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'book-luxury-boat',
  description: 'Created by Vivek',
  generator: 'vivek',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
