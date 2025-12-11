'use client'

interface DoodleProps {
  type: 'heart' | 'star' | 'swirl' | 'arrow' | 'circle'
  color?: string
  size?: number
  className?: string
}

export default function Doodle({ 
  type, 
  color = 'currentColor', 
  size = 40,
  className = ''
}: DoodleProps) {
  const doodles = {
    heart: (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M20 35C20 35 5 25 5 15C5 8 10 5 15 5C18 5 20 8 20 8C20 8 22 5 25 5C30 5 35 8 35 15C35 25 20 35 20 35Z" 
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="doodle-line"
        />
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M20 5L24 15L35 16L27 24L29 35L20 29L11 35L13 24L5 16L16 15L20 5Z" 
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="doodle-line"
        />
      </svg>
    ),
    swirl: (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M20 5C28 5 35 12 35 20C35 28 28 32 22 32C16 32 12 28 12 23C12 18 16 15 20 15C24 15 26 18 26 21" 
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="doodle-line"
        />
      </svg>
    ),
    arrow: (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M5 35C10 25 15 20 35 5M35 5L25 8M35 5L32 15" 
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="doodle-line"
        />
      </svg>
    ),
    circle: (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle 
          cx="20" 
          cy="20" 
          r="15" 
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
          fill="none"
          className="doodle-line"
        />
      </svg>
    )
  }

  return (
    <div className={`inline-block ${className}`}>
      {doodles[type]}
    </div>
  )
}
