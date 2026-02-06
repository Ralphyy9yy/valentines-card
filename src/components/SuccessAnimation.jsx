import React, { useEffect, useState } from 'react'
import FloatingHearts from './FloatingHearts'

// Component displayed after user clicks "Yes"
export default function SuccessAnimation({ girlfriendName, onReset }) {
  const [showMessage, setShowMessage] = useState(false)
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Show message after a short delay
    const timer = setTimeout(() => setShowMessage(true), 500)
    
    // Create heart burst effect
    createHeartBurst()
    
    return () => clearTimeout(timer)
  }, [])

  const createHeartBurst = () => {
    const burstHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      angle: (i / 30) * Math.PI * 2,
      distance: 150,
    }))
    setHearts(burstHearts)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Burst Hearts */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="fixed text-4xl animate-heart-burst pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(
              calc(-50% + ${Math.cos(heart.angle) * heart.distance}px),
              calc(-50% + ${Math.sin(heart.angle) * heart.distance}px)
            )`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Success Message */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Title */}
        <h1 className="font-dancing text-5xl md:text-6xl font-bold text-valentine-dark mb-6 animate-bounce-gentle">
          ✨ YES! ✨
        </h1>

        {/* Success Confirmation */}
        {showMessage && (
          <div className="animate-bounce-gentle">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-valentine-pink mb-4">
              Yay! You just made me the happiest person! ❤️
            </h2>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto mb-8 border-2 border-valentine-light">
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Dear {girlfriendName},
              </p>
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                This is the best day of my life! I can't wait to spend every moment creating beautiful memories with you. You are my everything – my love, my inspiration, and my greatest blessing.
              </p>
              <p className="font-poppins text-lg md:text-xl text-valentine-pink font-semibold">
                I love you so much! 💕
              </p>
            </div>

            {/* Celebration Text */}
            <div className="text-4xl md:text-5xl mb-8 space-y-2">
              <div className="animate-bounce-gentle" style={{ animationDelay: '0s' }}>
                ❤️
              </div>
              <div className="animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
                💕
              </div>
              <div className="animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>
                💖
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={onReset}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-valentine-pink to-valentine-red text-white font-poppins font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Let's Start Again 💫
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
