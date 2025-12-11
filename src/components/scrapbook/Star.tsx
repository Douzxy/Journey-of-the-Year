'use client'

interface StarProps {
  size?: number
  color?: string
  className?: string
  style?: React.CSSProperties
}

export default function Star({ 
  size = 24, 
  color,
  className = '',
  style
}: StarProps) {
  return (
    <span 
      className={`star inline-block ${className}`}
      style={{ 
        fontSize: size, 
        color: color,
        ...style 
      }}
    />
  )
}
