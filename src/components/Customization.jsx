import React from 'react'

// Component for customizing the message and girlfriend's name
export default function Customization({ girlfriendName, customMessage, onNameChange, onMessageChange }) {
  return (
    <div className="fixed top-24 left-4 right-4 md:left-auto md:right-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md z-50 border-2 border-valentine-light">
      <h3 className="font-poppins text-2xl font-bold text-valentine-dark mb-4">
        Customize Your Message 💕
      </h3>

      {/* Name Input */}
      <div className="mb-6">
        <label className="block font-poppins font-semibold text-valentine-dark mb-2">
          Her Name:
        </label>
        <input
          type="text"
          value={girlfriendName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter her name"
          className="w-full px-4 py-2 border-2 border-valentine-light rounded-lg font-poppins focus:outline-none focus:border-valentine-pink transition-colors"
        />
      </div>

      {/* Message Input */}
      <div className="mb-6">
        <label className="block font-poppins font-semibold text-valentine-dark mb-2">
          Your Message:
        </label>
        <textarea
          value={customMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Enter your romantic message"
          rows="5"
          className="w-full px-4 py-2 border-2 border-valentine-light rounded-lg font-poppins focus:outline-none focus:border-valentine-pink transition-colors resize-none"
        />
      </div>

      {/* Info Text */}
      <p className="font-poppins text-sm text-gray-600 italic">
        💡 Tip: Click the settings button again to close this panel.
      </p>
    </div>
  )
}
