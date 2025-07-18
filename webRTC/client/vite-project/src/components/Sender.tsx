import React, { useEffect, useState } from 'react'

const Sender = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null)
    useEffect(()=>{
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen =()=>{
            socket.send(JSON.stringify({type:'sender'}))
        }
    },[])
   async function startSendingVideo(){
       const pc = new RTCPeerConnection();
       // create offer 
       const offer = await pc.createOffer();  //sdp
       await pc.setLocalDescription(offer);
       socket?.send(JSON.stringify({type:'createOffer',sdp:pc.localDescription}))
    }
  return (
    <div>Sender
        <button onClick={startSendingVideo} >send</button>
    </div>
  )
}

export default Sender
