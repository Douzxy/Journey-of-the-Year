'use client'

interface TornPaperProps {
  children: React.ReactNode
  className?: string
}

export default function TornPaper({ children, className = '' }: TornPaperProps) {
  return (
    <div className={`torn-edge bg-white p-6 ${className}`}>
      {children}
    </div>
  )
}
