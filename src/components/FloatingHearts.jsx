import React, { useEffect, useState } from 'react'

// Component for floating hearts in the background
export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Create floating hearts periodically
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }
      setHearts(prev => [...prev, newHeart])

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, 6000)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left + '%',
            bottom: '-20px',
            animationDelay: heart.delay + 's',
          }}
        >
          ❤️
        </div>
      ))}
    </>
  )
}
