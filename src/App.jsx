import React, { useState, useEffect, useCallback } from 'react'

// Optimized Floating Hearts Background Component - Reduced count
function FloatingHearts() {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${10 + Math.random() * 5}s`,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-3xl opacity-20"
          style={{
            left: heart.left,
            animation: `float-up ${heart.animationDuration} linear infinite`,
            animationDelay: heart.animationDelay,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

// Message Display Component
function MessageDisplay({ customMessage }) {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-pink-200 transition-transform duration-300 hover:scale-105">
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed font-medium">
          {customMessage}
        </p>
      </div>
    </div>
  )
}

// Valentine Buttons Component
function ValentineButtons({ onYes }) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noButtonText, setNoButtonText] = useState('No')
  const [noClickCount, setNoClickCount] = useState(0)
  const [yesButtonScale, setYesButtonScale] = useState(1)
  const [isNoPositioned, setIsNoPositioned] = useState(false)

  const noMessages = [
    'No',
    'Are you sure?',
    'Really?',
    'Think again!',
    'Last chance!',
    'You might regret this!',
    'Yes is better! ❤️'
  ]

  const handleNoHover = useCallback(() => {
    const newCount = noClickCount + 1
    setNoClickCount(newCount)
    
    if (newCount < noMessages.length) {
      setNoButtonText(noMessages[newCount])
    }
    
    setYesButtonScale(prev => Math.min(prev + 0.2, 2))
    
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 80
    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY
    
    setNoButtonPos({ x: randomX, y: randomY })
    setIsNoPositioned(true)
  }, [noClickCount])

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={onYes}
        className="px-12 py-6 bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl md:text-3xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 border-4 border-white"
        style={{ 
          transform: `scale(${yesButtonScale})`,
        }}
      >
        Yes! 💕
      </button>
      
      <button
        onMouseEnter={handleNoHover}
        onClick={handleNoHover}
        onTouchStart={handleNoHover}
        className="px-8 py-4 bg-gray-300 text-gray-700 text-lg md:text-xl font-semibold rounded-full shadow-md hover:bg-gray-400 transition-all duration-200"
        style={isNoPositioned ? {
          position: 'fixed',
          left: `${noButtonPos.x}px`,
          top: `${noButtonPos.y}px`,
        } : {}}
      >
        {noButtonText}
      </button>
    </div>
  )
}

// Optimized Success Animation Component
function SuccessAnimation({ girlfriendName, onReset }) {
  useEffect(() => {
    // Reduced heart count from 100 to 30
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement('div')
        heart.innerHTML = ['❤️', '💕', '💖'][i % 3]
        heart.style.cssText = `
          position: fixed;
          left: 50%;
          top: 50%;
          font-size: 2rem;
          pointer-events: none;
          z-index: 9999;
        `
        
        const angle = (Math.PI * 2 * i) / 30
        const velocity = 8
        const vx = Math.cos(angle) * velocity
        const vy = Math.sin(angle) * velocity
        
        document.body.appendChild(heart)
        
        let x = 0, y = 0, frame = 0
        const animate = () => {
          if (frame > 60) {
            heart.remove()
            return
          }
          x += vx
          y += vy
          frame++
          heart.style.transform = `translate(${x}px, ${y}px) scale(${1 - frame / 80})`
          heart.style.opacity = Math.max(0, 1 - frame / 60)
          requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }, i * 20)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="z-10 text-center px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-8">
            Yay! 🎉
          </h1>
          
          {/* Dancing Cat GIF */}
          <div className="mb-8">
            <img 
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTk0bHQ4amNqZ2x6dWN3dXpkYnk3NXI5bDZ5bHoyNmVjNzhjamdyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TjSPQgowhhJdHgvnwA/giphy.gif"
              alt="Dancing cat celebration"
              className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl shadow-2xl border-4 border-pink-300"
            />
          </div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-10 max-w-2xl mx-auto border-4 border-pink-300 mb-8">
          <p className="text-2xl md:text-3xl text-gray-800 mb-6 leading-relaxed">
            I knew you'd say yes, {girlfriendName}! ❤️
          </p>
          <p className="text-xl text-gray-700 mb-4">
            You've just made me the happiest person in the world! 🌟
          </p>
          <p className="text-lg text-pink-600 font-semibold">
            Happy Valentine's Day, my love! 💕
          </p>
        </div>

        <button
          onClick={onReset}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Start Over ✨
        </button>
      </div>
    </div>
  )
}

// Customization Component
function Customization({ girlfriendName, customMessage, onNameChange, onMessageChange }) {
  return (
    <div className="fixed top-20 left-4 z-40 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-sm border-2 border-pink-200">
      <h3 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
        <span>✨</span> Customize Your Message
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Their Name:
          </label>
          <input
            type="text"
            value={girlfriendName}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors"
            placeholder="Enter name..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Message:
          </label>
          <textarea
            value={customMessage}
            onChange={(e) => onMessageChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors resize-none"
            rows="4"
            placeholder="Write your heart out..."
          />
        </div>
      </div>
    </div>
  )
}

// Main App Component
export default function App() {
  const [response, setResponse] = useState(null)
  const [girlfriendName, setGirlfriendName] = useState('Beautiful')
  const [customMessage, setCustomMessage] = useState(
    'Every moment with you feels like a dream come true. Thank you for being my sunshine on cloudy days. 💕'
  )
  const [showCustomization, setShowCustomization] = useState(false)

  const handleYes = useCallback(() => {
    setResponse('yes')
  }, [])

  if (response === 'yes') {
    return (
      <SuccessAnimation 
        girlfriendName={girlfriendName}
        onReset={() => {
          setResponse(null)
          setShowCustomization(false)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-red-50 to-pink-50">
      <FloatingHearts />

      <button
        onClick={() => setShowCustomization(!showCustomization)}
        className="fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 duration-200 border-2 border-pink-200"
        title="Customize message"
      >
        <span className="text-2xl">⚙️</span>
      </button>

      {showCustomization && (
        <Customization 
          girlfriendName={girlfriendName}
          customMessage={customMessage}
          onNameChange={setGirlfriendName}
          onMessageChange={setCustomMessage}
        />
      )}

      <div className="z-10 w-full px-4 md:px-8">
        <h1 className="text-center text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Will You Be My Valentine?
        </h1>

        <p className="text-center text-2xl md:text-3xl text-pink-500 mb-12 font-semibold">
          Dear {girlfriendName} 💕
        </p>

        <MessageDisplay customMessage={customMessage} />

        <ValentineButtons onYes={handleYes} />
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes float-up {
          from {
            bottom: -50px;
            transform: translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          to {
            bottom: 100vh;
            transform: translateX(50px) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}