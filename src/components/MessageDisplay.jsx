import React from 'react'

// Component to display the romantic message
export default function MessageDisplay({ customMessage }) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl border-2 border-valentine-light hover:shadow-3xl transition-shadow">
        <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed text-center italic">
          {customMessage}
        </p>
        <div className="flex justify-center gap-2 mt-6 text-2xl animate-pulse-slow">
          <span>💖</span>
          <span>💕</span>
          <span>💗</span>
        </div>
      </div>
    </div>
  )
}
