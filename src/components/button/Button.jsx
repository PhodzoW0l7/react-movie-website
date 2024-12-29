import React from 'react'

const Button = () => {
  return (
    <button className={`btn ${props.className}`onClick}>
      
    </button>
  )
Button.propType={
    onClick:propTypes.func
}

export default Button
