'use client'

interface StickerProps {
  type: 'smile' | 'heart' | 'star' | 'flower' | 'rainbow' | 'kiss' | 'couple' | 'ring' | 'rose' | 'love'
  size?: number
  className?: string
}

export default function Sticker({ 
  type, 
  size = 40,
  className = ''
}: StickerProps) {
  const stickers = {
    smile: '🥰',
    heart: '💕',
    star: '⭐',
    flower: '🌸',
    rainbow: '🌈',
    kiss: '💋',
    couple: '💑',
    ring: '💍',
    rose: '🌹',
    love: '💗'
  }

  return (
    <span 
      className={`inline-block animate-wiggle ${className}`}
      style={{ 
        fontSize: size,
        filter: 'drop-shadow(2px 2px 4px rgba(197, 75, 108, 0.2))'
      }}
    >
      {stickers[type]}
    </span>
  )
}
