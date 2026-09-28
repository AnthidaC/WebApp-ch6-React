import { useState } from 'react'

function App() {
  // State 1: Button color and text toggle
  const [isRed, setIsRed] = useState(true)

  // State 2: Dynamic text and color (onChange)
  const [text, setText] = useState('Hello world')
  const [color, setColor] = useState('#ff007f')

  // State 3: Counter (Count Up / Count Down)
  const [count, setCount] = useState(1)

  return (
    <div className="container">

      {/* Component 1: Toggle Button */}
      <div className="section">
        <button
          onClick={() => setIsRed(!isRed)}
          className={`toggle-btn ${isRed ? 'is-red' : 'is-blue'}`}
        >
          {isRed ? 'Go Blue' : 'Go Red'}
        </button>
      </div>

      <hr className="divider" />

      {/* Component 2: Text and Color Display */}
      <div className="section">
        <p className="text-display" style={{ color: color }}>
          {text}
        </p>
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text-input"
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="color-input"
          />
        </div>
      </div>

      <hr className="divider" />

      {/* Component 3: Counter */}
      <div className="section">
        <p className="counter-value">{count}</p>
        <div className="counter-buttons">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="action-btn"
          >
            Count Up
          </button>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="action-btn"
          >
            Count Down
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
