'use client'

import { useEffect, useRef } from 'react'

export default function GlitterEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Reduced particle count for better performance
    const particleCount = 15
    const particles: HTMLDivElement[] = []
    
    // Romantic pink/rose colors
    const colors = ['#E8A0BF', '#C54B6C', '#FFB6C1', '#DCD6F7', '#F7E7CE']
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'glitter-particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 3}s`
      particle.style.animationDuration = `${2 + Math.random() * 2}s`
      
      const size = 4 + Math.random() * 4
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      
      particle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`
      
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <>
      <div 
        ref={containerRef}
        className="glitter-container"
        aria-hidden="true"
      />

      <style jsx global>{`
        .glitter-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 999;
          overflow: hidden;
        }

        .glitter-particle {
          position: absolute;
          border-radius: 50%;
          animation: glitterTwinkle 3s ease-in-out infinite;
          will-change: opacity, transform;
        }

        @keyframes glitterTwinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 0.6;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}

