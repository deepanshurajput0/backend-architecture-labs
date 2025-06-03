import { useState } from 'react'

import './App.css'
import { useSocket } from './context/SocketProvider'

function App() {
  const { sendMessage } = useSocket()
  const [message,setMessage] = useState<string>('')
  return (
    <>
      <h1> Chat app</h1>
      <input onChange={(e)=>setMessage(e.target.value)}  type='text' placeholder='Enter the message' />
      <button onClick={()=>sendMessage(message)} >Send Message</button>
    </>
  )
}

export default App
