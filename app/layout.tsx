import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'jas — Weekly Tech Rundown',
  description: 'An interactive weekly newsletter covering emerging tech, legacy systems, and everything in between.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-surface text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
