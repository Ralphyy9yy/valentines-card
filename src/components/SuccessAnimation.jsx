import React, { useEffect, useState } from 'react'
import FloatingHearts from './FloatingHearts'

// Component displayed after user clicks "Yes"
export default function SuccessAnimation({ girlfriendName, onReset }) {
  const [showMessage, setShowMessage] = useState(false)
  const [hearts, setHearts] = useState([])
  const [letterOpen, setLetterOpen] = useState(false)

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

      {/* Letter Modal */}
      {letterOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4 animate-in">
          <div className="bg-white/98 rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-bounce-gentle border-4 border-pink-300">
            {/* Letter Header */}
            <div className="text-center mb-8 border-b-2 border-pink-200 pb-6">
              <h2 className="text-4xl md:text-5xl font-dancing font-bold text-red-600 mb-2">
                💌 A Letter For You 💌
              </h2>
              <p className="text-pink-600 font-poppins text-sm">From your Valentine</p>
            </div>

            {/* Letter Content */}
            <div className="font-poppins text-gray-700 space-y-4 mb-8">
              <p className="text-lg leading-relaxed">
                My Dearest {girlfriendName},
              </p>

              <p className="text-lg leading-relaxed italic">
                On this special day, I wanted to tell you all the things that make you so incredibly special to me. Every moment spent with you is a blessing I never take for granted.
              </p>

              <p className="text-lg leading-relaxed">
                You are my inspiration, my strength, and my greatest joy. The way you smile lights up my entire world. Your laugh is my favorite sound, and your presence is my peace.
              </p>

              <p className="text-lg leading-relaxed">
                I promise to love you with all my heart, to support your dreams, and to be by your side through every moment of our journey together. You deserve all the happiness in the world, and I want to spend my life giving it to you.
              </p>

              <p className="text-lg leading-relaxed">
                Thank you for saying yes. You've just made me the happiest person alive. I can't wait to create thousands of beautiful memories with you, to laugh together, to dream together, and to build a beautiful life filled with love.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-red-600">
                Forever yours,
                <br />
                — Your Valentine 💕
              </p>
            </div>

            {/* Close Button */}
            <div className="flex gap-4">
              <button
                onClick={() => setLetterOpen(false)}
                className="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-all hover:scale-105"
              >
                Close Letter
              </button>
              <button
                onClick={onReset}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:shadow-lg text-white font-semibold rounded-lg transition-all hover:scale-105"
              >
                Start Over 💫
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Title */}
        <h1 className="font-dancing text-5xl md:text-6xl font-bold text-red-600 mb-6 animate-bounce-gentle">
          ✨ YES! ✨
        </h1>

        {/* Success Confirmation */}
        {showMessage && (
          <div className="animate-bounce-gentle">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-pink-600 mb-4">
              Yay! You just made me the happiest person! ❤️
            </h2>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto mb-8 border-2 border-pink-300">
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Dear {girlfriendName},
              </p>
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                This is the best day of my life! I can't wait to spend every moment creating beautiful memories with you. You are my everything – my love, my inspiration, and my greatest blessing.
              </p>
              <p className="font-poppins text-lg md:text-xl text-pink-600 font-semibold">
                I love you so much! 💕
              </p>
            </div>

            {/* Interactive Letter Envelope */}
            <button
              onClick={() => setLetterOpen(true)}
              className="mb-8 inline-block text-6xl md:text-7xl hover:scale-110 transition-transform duration-300 animate-pulse cursor-pointer"
              title="Click to open your letter"
            >
              💌
            </button>

            <p className="font-poppins text-sm text-pink-600 mb-6 italic">
              Click the envelope above to read your letter! 💕
            </p>

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
              className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-poppins font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Let's Start Again 💫
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse-soft 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
