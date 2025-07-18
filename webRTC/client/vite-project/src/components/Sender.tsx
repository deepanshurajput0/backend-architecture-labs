import React, { useEffect } from 'react'

const Sender = () => {
    useEffect(()=>{
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen =()=>{
            socket.send(JSON.stringify({type:'sender'}))
        }
    },[])
  return (
    <div>Sender</div>
  )
}

export default Sender
