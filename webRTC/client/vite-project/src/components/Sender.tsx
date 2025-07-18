import React, { useEffect, useState } from 'react'

const Sender = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null)
    useEffect(()=>{
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen =()=>{
            socket.send(JSON.stringify({type:'sender'}))
        }
        setSocket(socket)
    },[])
   async function startSendingVideo(){
    if(!socket){
        return;
    }
       const pc = new RTCPeerConnection();
       // create offer 
       pc.onnegotiationneeded =async()=>{
         const offer = await pc.createOffer();  //sdp
       await pc.setLocalDescription(offer);
       socket?.send(JSON.stringify({type:'createOffer',sdp:pc.localDescription})) ;
       }

       pc.onicecandidate =(event)=>{
           if(event.candidate){
              socket?.send(JSON.stringify({type:'iceCandidate',candidate:event.candidate
              })) ;
           }
       }
       

       socket.onmessage =(event)=>{
            const data = JSON.parse(event.data);
            if(data.type === 'createAnswer'){
                 pc.setRemoteDescription(data.sdp);
            }else if(data.type === 'iceCandidate') {
                  pc.addIceCandidate(data.candidate);        
            }
       }
       const stream = await navigator.mediaDevices.getUserMedia({video:true})
       pc.addTrack(stream.getVideoTracks()[0],stream)
    }
  return (
    <div>Sender
        <button onClick={startSendingVideo} >send</button>
    </div>
  )
}

export default Sender
