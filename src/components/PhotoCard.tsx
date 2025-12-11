'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PhotoCardProps {
  src: string
  caption: string
  rotation?: number
  tapePosition?: 'top' | 'left' | 'right'
}

export default function PhotoCard({ 
  src, 
  caption, 
  rotation = 0,
  tapePosition = 'top'
}: PhotoCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div 
      className="photo-card relative group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Tape decoration */}
      <div className={`tape tape-${tapePosition}`} />
      
      {/* Photo container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm">
        {!imageError ? (
          <Image
            src={src}
            alt={caption}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Placeholder if image doesn't exist
          <div className="photo-placeholder w-full h-full flex items-center justify-center">
            <div className="text-center p-4">
              <span className="text-4xl mb-2 block">📸</span>
              <span className="text-white/80 text-sm font-handwriting">
                Memory goes here
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Caption */}
      <p className="mt-3 font-handwriting text-lg md:text-xl text-gray-600 text-center">
        {caption}
      </p>

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm"
        style={{
          boxShadow: '0 0 30px rgba(255, 203, 164, 0.4)'
        }}
      />
    </div>
  )
}
