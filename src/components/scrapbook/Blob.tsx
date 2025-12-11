'use client'

interface BlobProps {
  color?: string
  className?: string
}

export default function Blob({ 
  color = 'var(--peach)', 
  className = '' 
}: BlobProps) {
  return (
    <div 
      className={`blob animate-float ${className}`}
      style={{ 
        background: color,
        animationDelay: `${Math.random() * 3}s`
      }}
    />
  )
}
