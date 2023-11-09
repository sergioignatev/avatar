'use client'
import { useState } from "react"
const Theme = ({theme,setTheme}:{theme:string,setTheme:any}) => {
    
  return (
    <div data-theme={theme}>
<h1 onClick={()=>setTheme('aqua')}>Agua</h1>
<h1 onClick={()=>setTheme('coffee')}>Coffee</h1>
    </div>
  )
}

export default Theme