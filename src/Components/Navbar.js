import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const activetheme = (el) => {
    for (let i of document.getElementsByClassName('themecolor')) {
      i.style.removeProperty('border')
    }
    document.getElementById(el).style.border = '3px solid SkyBlue'
  }

  const changeTheme = (el) => {
    let s = el.target.id
    if (s === 'dark') {
      s = '#343a40'
    } else if (s === 'light') {
      s = 'white'
    }
    if (s === 'white' || s === 'yellow') {
      document.body.style.color = 'black'
    } else {
      document.body.style.color = 'white'
    }
    document.body.style.backgroundColor = s
    activetheme(el.target.id)
  }
  const modeName = () => {
    if (props.mode === 'dark') {
      return { color: 'white' }
    } else {
      return { color: 'black' }
    }
  }
  return (
    <div className="className">
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.About}
                </Link>
              </li>
            </ul>
            <div className="theme" style={{ display: 'flex' }}>
              <div
                className="themecolor"
                id="red"
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  margin: '0.5rem',
                }}
                onClick={(e) => {
                  changeTheme(e)
                }}
              ></div>
              <div
                className="themecolor"
                id="blue"
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'blue',
                  borderRadius: '50%',
                  margin: '0.5rem',
                }}
                onClick={(e) => {
                  changeTheme(e)
                }}
              ></div>
              <div
                className="themecolor"
                id="yellow"
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'yellow',
                  borderRadius: '50%',
                  margin: '0.5rem',
                }}
                onClick={(e) => {
                  changeTheme(e)
                }}
              ></div>
              <div
                className="themecolor"
                id="dark"
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: '#343a40',
                  borderRadius: '50%',
                  margin: '0.5rem',
                }}
                onClick={(e) => {
                  changeTheme(e)
                }}
              ></div>
              <div
                className="themecolor"
                id="light"
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  margin: '0.5rem',
                  border: '3px solid SkyBlue',
                }}
                onClick={(e) => {
                  changeTheme(e)
                }}
              ></div>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={modeName()}
              >
                {props.mode.charAt(0).toUpperCase() +
                  props.mode.slice(1) +
                  ' Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = { title: PropTypes.string, About: PropTypes.string }
