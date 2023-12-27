import './App.css'
import TextForm from './Components/TextForm'
import Navbar from './Components/Navbar'
import About from './Components/About'
import { useState } from 'react'
import Alert from './Components/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
      showAlert('Dark mode Enabled', 'Success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode Enabled', 'Success')
    }
  }
  return (
    <Router>
      <div>
        <Navbar
          title="TextUtils"
          About="About TextUtils"
          Aboutlink="aboutme"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyse"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
