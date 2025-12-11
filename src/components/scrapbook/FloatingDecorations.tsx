'use client'

export default function FloatingDecorations() {
  // Reduced romantic decoration emojis for better performance
  const decorations = [
    { emoji: '💕', top: '10%', left: '5%', size: 28, delay: 0 },
    { emoji: '✨', top: '22%', right: '8%', size: 22, delay: 1 },
    { emoji: '🌹', top: '45%', right: '5%', size: 30, delay: 2 },
    { emoji: '💗', top: '58%', left: '6%', size: 32, delay: 0.5 },
    { emoji: '🌸', top: '75%', right: '7%', size: 26, delay: 1.5 },
    { emoji: '💝', top: '30%', left: '93%', size: 24, delay: 2.5 },
    { emoji: '⭐', top: '65%', left: '94%', size: 20, delay: 0.8 },
    { emoji: '💖', top: '88%', right: '92%', size: 26, delay: 1.8 },
  ]

  return (
    <>
      <div 
        className="floating-container"
        aria-hidden="true"
      >
        {decorations.map((deco, i) => (
          <span
            key={i}
            className="floating-emoji"
            style={{
              top: deco.top,
              left: deco.left,
              right: deco.right,
              fontSize: deco.size,
              animationDelay: `${deco.delay}s`,
            }}
          >
            {deco.emoji}
          </span>
        ))}
      </div>

      <style jsx>{`
        .floating-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .floating-emoji {
          position: absolute;
          opacity: 0.25;
          animation: gentleFloat 6s ease-in-out infinite;
          will-change: transform;
          filter: blur(0.3px);
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
      `}</style>
    </>
  )
}

