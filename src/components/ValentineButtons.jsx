import React, { useState } from 'react'

// Component for Yes and No buttons with interactive behavior
export default function ValentineButtons({ onYes, onNo }) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noMessages, setNoMessages] = useState([
    "SURE BA? 🥺",
    "apas ta! 💕",
    "Pretty please? 🌹",
    "Think again! 😊",
    "ayaw kauwaw! 💋",
    "yesss na laagiiii! 😉",
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const [messageVisible, setMessageVisible] = useState(false)

  // Handle mouse enter on No button - move it away
  const handleNoHover = () => {
    const maxX = window.innerWidth - 200
    const maxY = window.innerHeight - 200
    
    const randomX = Math.random() * maxX - maxX / 2
    const randomY = Math.random() * maxY - maxY / 2
    
    setNoButtonPos({ 
      x: randomX, 
      y: randomY 
    })

    // Show encouraging message
    const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)]
    setCurrentMessage(randomMessage)
    setMessageVisible(true)

    setTimeout(() => setMessageVisible(false), 2000)
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Buttons Container */}
      <div className="relative h-32 w-full flex justify-center items-center">
        {/* Yes Button - Fixed Position */}
        <button
          onClick={onYes}
          className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-valentine-pink to-valentine-red text-white font-poppins font-bold text-xl md:text-2xl rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all hover:-rotate-3 active:scale-95 z-20"
        >
          Yes 💖
        </button>

        {/* No Button - Moves Away */}
        <button
          onMouseEnter={handleNoHover}
          onClick={() => {
            handleNoHover()
            onNo()
          }}
          style={{
            transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px) scale(0.9)`,
          }}
          className="absolute px-6 md:px-10 py-3 md:py-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-poppins font-semibold text-lg md:text-xl rounded-full shadow-lg transition-all cursor-not-allowed"
        >
          No 😢
        </button>
      </div>

      {/* Encouraging Message */}
      {messageVisible && (
        <div className="text-center animate-bounce-gentle">
          <p className="font-poppins text-valentine-pink text-lg font-semibold">
            {currentMessage}
          </p>
        </div>
      )}

      {/* Mobile Friendly Message */}
      <p className="text-center font-poppins text-gray-600 text-sm md:text-base md:hidden">
        (The "No" button is shy on mobile! 😄)
      </p>
    </div>
  )
}
