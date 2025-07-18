import React, { useEffect, useRef, useState } from 'react';

const Receiver = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    setSocket(socket);

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'receiver' }));
    };

    const pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });

    pcRef.current = pc;

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.send(JSON.stringify({ type: 'iceCandidate', candidate: event.candidate }));
      }
    };

    pc.ontrack = (event) => {
      console.log('Received track:', event.streams);
      if (videoRef.current) {
        videoRef.current.srcObject = event.streams[0];
      }
    };

    socket.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'createOffer') {
        await pc.setRemoteDescription(data.sdp);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socket.send(JSON.stringify({ type: 'createAnswer', sdp: pc.localDescription }));
      } else if (data.type === 'iceCandidate') {
        await pc.addIceCandidate(data.candidate);
      }
    };

    // return () => {
    //   pc.close();
    //   socket.close();
    // };
  }, []);

  return (
    <div>
      {/* Receiver */}
      <video ref={videoRef} autoPlay playsInline style={{ width: '600px', border: '2px solid black',  transform: 'scaleX(-1)' }} />
    </div>
  );
};

export default Receiver;
