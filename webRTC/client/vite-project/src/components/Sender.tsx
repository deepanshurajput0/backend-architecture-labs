import React, { useEffect, useState } from 'react'

const Sender = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null)

  useEffect(() => {
    const s = new WebSocket('ws://localhost:8080')
    s.onopen = () => {
      s.send(JSON.stringify({ type: 'sender' }))
    }
    setSocket(s)
  }, [])

  async function startSendingVideo() {
    if (!socket) return

    const pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    })

    let remoteDescriptionSet = false
    const pendingCandidates: RTCIceCandidate[] = []

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.send(JSON.stringify({ type: 'iceCandidate', candidate: event.candidate }))
      }
    }

    socket.onmessage = async (event) => {
      const data = JSON.parse(event.data)

      if (data.type === 'createAnswer') {
        await pc.setRemoteDescription(new RTCSessionDescription(data.sdp))
        remoteDescriptionSet = true
        pendingCandidates.forEach(c => pc.addIceCandidate(c))
      } else if (data.type === 'iceCandidate') {
        const candidate = new RTCIceCandidate(data.candidate)
        if (remoteDescriptionSet) {
          await pc.addIceCandidate(candidate)
        } else {
          pendingCandidates.push(candidate)
        }
      }
    }

    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    for (const track of stream.getTracks()) {
      pc.addTrack(track, stream)
    }

    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)

    socket.send(JSON.stringify({ type: 'createOffer', sdp: pc.localDescription }))
  }

  return (
    <div>
      Sender
      <button onClick={startSendingVideo}>send</button>
    </div>
  )
}

export default Sender
