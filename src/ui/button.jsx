import React from 'react'

export default function Button({children, primaryColor, backgroundColor, borderColor,onClick}) {

    const buttonStyle = {
        color: primaryColor,
        backgroundColor,
        border: `1px solid ${borderColor}`,
        
        
    }


  return (
    <button style={buttonStyle} className='rounded px-7 py-1' onClick={onClick}>{children}</button>
  )
}
