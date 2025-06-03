'use client'

import React from 'react'

interface SocketProviderProps {
    children:React.ReactNode
}

interface ISocketContext {
    sendMessage:(msg:string)=> string;
}


const SocketContext = React.createContext<ISocketContext | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> =({children})=>{
    return (
        <SocketContext.Provider value={null} >
          {children}
        </SocketContext.Provider>
    )
}