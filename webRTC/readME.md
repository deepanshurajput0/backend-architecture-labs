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

<img width="1270" height="801" alt="Screenshot 2025-07-16 112231" src="https://github.com/user-attachments/assets/da6c8a8a-2d29-4859-a244-494781ef101c" />


## Ice candidates
ICE (Interactive Connectivity Establishment) candidates are potential networking endpoints that WebRTC uses to establish a connection between peers. Each candidate represents a possible method for two devices (peers) to communicate, usually in the context of real-time applications like video calls, voice calls, or peer-to-peer data sharing.

An ICE candidate is a potential network path that can be used to establish a connection between two peers. These are combinations of:

    IP address

    Port number

    Transport protocol (UDP/TCP)

Each ICE candidate represents one possible way to send and receive data.

## Why do we need ICE candidates?

When two devices want to talk (peer-to-peer), they need to figure out:

    Which IP address to use (public or private)?

    Is there a firewall or NAT blocking direct connection?

    Do we need help from STUN or TURN servers?

ICE helps gather and test all possible routes and then chooses the best working path.

## What is TURN Server 

A TURN server (Traversal Using Relays around NAT) is a server that helps two peers communicate when a direct peer-to-peer (P2P) connection is not possible due to strict firewalls or NAT (Network Address Translation).

🔄 The ICE process usually tries:

    Host candidate → direct local IP

    Server Reflexive candidate → via STUN (public IP)

    Relay candidate → via TURN server

If the first two fail, it uses TURN.

## 🚑 That’s where TURN comes in:

A TURN server acts like a middleman/relay:

    You send your video/audio to the TURN server.

    TURN server forwards it to the other peer.

    And vice versa.

This is not peer-to-peer, but it ensures the call still works.



