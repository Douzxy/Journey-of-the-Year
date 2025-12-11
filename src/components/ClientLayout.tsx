'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '@/context/LanguageContext'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import SmoothScroll from '@/components/SmoothScroll'
import MusicPlayer from '@/components/MusicPlayer'
import LoginPage from '@/components/LoginPage'

function AuthenticatedLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <LanguageProvider>
      <SmoothScroll>
        {children}
      </SmoothScroll>
      <MusicPlayer />
    </LanguageProvider>
  )
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AuthenticatedLayout>{children}</AuthenticatedLayout>
    </AuthProvider>
  )
}
