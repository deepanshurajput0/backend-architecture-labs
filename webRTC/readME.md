# WebRTC 

## What is Webrtc 

WebRTC is the core/only protocol that lets you do real time media communication from inside a browser.

You use WebRTC for applications that require sub second latency. 
Examples include

    Zoom/Google meet (Multi party call)

    Omegle, teaching (1:1 call)

    30FPS games (WebRTC can also send data)


## P2P

WebRTC is a peer to peer protocol. This means the you directly send your media over to the other person without the need of a central server

<img width="1428" height="612" alt="Screenshot 2025-07-16 114106" src="https://github.com/user-attachments/assets/31ba96be-5273-412f-851e-a33ba8c97bce" />

You do need a central server for signalling and sometimes for sending media as well (turn). We’ll be discussing this later


## Signalling 

Both the browsers need to exchange their address before they can start talking to each other. A signaling server is used for that. 
It is usually a websocket server but can be anything (http)

<img width="1275" height="712" alt="Screenshot 2025-07-16 115019" src="https://github.com/user-attachments/assets/f1392573-00b0-4db8-a8fc-17470a3ff5b1" />




## Stun (Session Traversal Utilities for NAT)
It gives you back your publically accessable IPs. It shows you how the world sees you


