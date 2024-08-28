import React from 'react'
import '../../App.css'

const Button = ({title}) => {
  return (
   <a href='https://wa.link/at5ion' target='_blank'> <button className="book-now-btn">
    {title}
  </button></a>
  )
}

export default Button
