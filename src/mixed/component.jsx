// React-style file to trigger prettier + eslint
import React from "react"

export const Button = (props) => {
  return <button onClick={()=>{console.log("clicked")}} > Click me </button>
}