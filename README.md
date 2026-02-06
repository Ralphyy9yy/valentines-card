# Valentine's Day Web Application

A beautiful, interactive "Will You Be My Valentine?" web application built with React, Vite, and Tailwind CSS.

## Features

✨ **Interactive Elements**
- Animated "Yes" button with success animation
- Playful "No" button that moves away when hovered
- Floating heart animations in the background
- Confetti effect on "Yes" response
- Heart burst celebration animation

🎨 **Design & Styling**
- Romantic soft color palette (pink, red, pastel tones)
- Modern, responsive UI for mobile and desktop
- Smooth animations and transitions
- Beautiful typography with Dancing Script and Poppins fonts

🎵 **Features**
- Customizable girlfriend's name
- Personalized romantic message
- Background music toggle
- Settings panel for customization
- Mobile-friendly interface

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will automatically open in your browser at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
valentine-app/
├── src/
│   ├── components/
│   │   ├── FloatingHearts.jsx      # Animated floating hearts background
│   │   ├── MessageDisplay.jsx      # Romantic message display
│   │   ├── ValentineButtons.jsx    # Yes/No interactive buttons
│   │   ├── SuccessAnimation.jsx    # Success screen after "Yes"
│   │   └── Customization.jsx       # Customization panel
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles and animations
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── postcss.config.cjs              # PostCSS configuration

```

## Usage

1. **Customize the Message**
   - Click the ⚙️ settings button in the top-left corner
   - Enter her name
   - Add your personalized romantic message
   - Click settings again to close the panel

2. **Interact with the App**
   - Click "Yes 💖" to see the success animation
   - Try hovering over "No 😢" button (it moves away!)
   - Click the 🎵 button to toggle background music
   - Click "Let's Start Again 💫" to reset and ask again

## Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript

## Customization Options

### Colors
Edit `tailwind.config.js` to change the valentine theme colors:
- `valentine-light`: Light pink (#ffe0e6)
- `valentine-pink`: Pink (#ff69b4)
- `valentine-red`: Red (#ff1744)
- `valentine-dark`: Dark red (#c2185b)

### Fonts
- **Dancing Script** - For titles and romantic text
- **Poppins** - For body text and buttons

### Animations
Available animations in `index.css`:
- `float` - Gentle floating effect
- `bounce-gentle` - Soft bouncing
- `heartbeat` - Pulsing heart effect
- `wiggle` - Button wiggle

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips & Tricks

- The background automatically creates floating hearts
- The "No" button has different behavior on mobile devices
- Music can be toggled on/off with the sound icon
- Messages are stored in component state (refresh to reset)
- Add more encouragement messages in `ValentineButtons.jsx`

## License

Feel free to use and modify this project for personal use!

---

Made with ❤️ for Valentine's Day
