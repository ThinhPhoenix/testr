import React from 'react'

export default function Error({children}) {
  return (
    <p className="text-[#c00202] bg-[#ff303098] px-2 rounded-md">Error: {children}</p>
  )
}