import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'MagicBox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-800 text-slate-100 container mx-auto p-4`}>
        {children}
        </body>
    </html>
  )
}
