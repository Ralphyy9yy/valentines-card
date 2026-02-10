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
    "SURE BA? 🥺",
    "apas ta! 💕",
    "Pretty please? 🌹",
    "Think again! 😊",
    "ayaw kauwaw! 💋",
    "yesss na laagiiii! 😉",
    "hilak ko ronn! 😭",
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
    // Create confetti-style heart animation
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const heart = document.createElement('div')
        heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][i % 5]
        heart.style.cssText = `
          position: fixed;
          font-size: ${Math.random() * 2 + 1}rem;
          pointer-events: none;
          z-index: 9999;
          left: ${Math.random() * 100}%;
          top: -50px;
        `
        
        document.body.appendChild(heart)
        
        let x = 0, y = 0, frame = 0, rotation = 0
        const xVelocity = (Math.random() - 0.5) * 6
        const yVelocity = Math.random() * 3 + 3
        const rotateVelocity = Math.random() * 10 - 5
        
        const animate = () => {
          if (frame > 120) {
            heart.remove()
            return
          }
          x += xVelocity
          y += yVelocity
          rotation += rotateVelocity
          frame++
          
          heart.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotation}deg)`
          heart.style.opacity = Math.max(0, 1 - (frame - 90) / 30)
          requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }, i * 40)
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
function Customization({ girlfriendName, customMessage, onNameChange, onMessageChange, onGenerateLink }) {
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

        <button
          onClick={onGenerateLink}
          className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
        >
          📋 Copy Shareable Link
        </button>
      </div>
    </div>
  )
}

// Main App Component
export default function App() {
  // Helper function to get URL parameters
  const getUrlParam = (param, defaultValue) => {
    const params = new URLSearchParams(window.location.search)
    const value = params.get(param)
    return value ? decodeURIComponent(value) : defaultValue
  }

  const [response, setResponse] = useState(null)
  const [girlfriendName, setGirlfriendName] = useState(() => 
    getUrlParam('name', 'Beautiful')
  )
  const [customMessage, setCustomMessage] = useState(() =>
    getUrlParam('message', 'Every moment with you feels like a dream come true. Thank you for being my sunshine on cloudy days. 💕')
  )
  const [showCustomization, setShowCustomization] = useState(false)

  // Generate shareable link
  const generateShareLink = () => {
    const baseUrl = window.location.origin + window.location.pathname
    const params = new URLSearchParams({
      name: girlfriendName,
      message: customMessage
    })
    return `${baseUrl}?${params.toString()}`
  }

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
          onGenerateLink={() => {
            const link = generateShareLink()
            navigator.clipboard.writeText(link).then(() => {
              alert('✨ Shareable link copied to clipboard! Send it to your special someone. 💕')
            }).catch(() => {
              alert('Copy this link: ' + link)
            })
          }}
        />
      )}

      <div className="z-10 w-full px-4 md:px-8">
        {/* GIF on top */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTl0enVscW90bWEzeGpmN3NtMjFoYW9wNWE3dm90cGdvNGZ2ZmI4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zZbf6UpZslp3nvFjIR/giphy.gif" 
            alt="Romantic hearts"
            className="w-40 h-40 md:w-56 md:h-56 rounded-2xl shadow-lg border-4 border-pink-300"
          />
        </div>

        <h1 className="text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
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