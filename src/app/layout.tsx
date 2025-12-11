import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Journey of 2025 — Edo Priyatna (Dozxy)',
  description: 'A playful scrapbook journey through the year 2025, filled with happy memories and nostalgic moments.',
  keywords: ['journey', '2025', 'scrapbook', 'memories', 'Edo Priyatna', 'Dozxy'],
  icons: {
    icon: '/photos/favicon.png',
    apple: '/photos/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
