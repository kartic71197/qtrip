import React from 'react'

const Button = ({ children }) => {
  return (
    <div className="font-semibold p-3 rounded-lg text-green-500 bg-black">{children}</div>
  )
}

export default Button