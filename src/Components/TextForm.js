import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to UpperCase', 'Success')
  }
  const handleLowerClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to LowerCase', 'Success')
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const clear = () => {
    setText('')
    props.showAlert('Text Deleted', 'Danger')
  }
  // const undoText = () => {
  //   setText(undo)
  //   props.showAlert('Text Restored', 'Success')
  // }

  const [text, setText] = useState('')
  const splitArr = text.split(' ')
  const words = () => {
    return splitArr.filter((el) => {
      return el.length !== 0
    }).length
  }

  const length = () => {
    let char = 0
    for (let i of splitArr) {
      char += i.length
    }
    return char
  }

  return (
    <>
      <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary btn-change mx-2 my-2"
          onClick={handleUpClick}
        >
          {' '}
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2 btn-change"
          onClick={handleLowerClick}
        >
          {' '}
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-2 my-2 btn-change" onClick={clear}>
          {' '}
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>
          {words()} words and {length()} characters
        </p>
        <p>{0.008 * words()} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter your text to preview it'}</p>
      </div>
    </>
  )
}
