'use client'

import React, { useCallback } from 'react'

interface SocketProviderProps {
    children:React.ReactNode
}

interface ISocketContext {
    sendMessage:(msg:string)=> string;
}


const SocketContext = React.createContext<ISocketContext | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> =({children})=>{
    const sendMessage:ISocketContext["sendMessage"] = useCallback((msg:string)=>{
        console.log("Send Message",msg) 
    },[])
    return (
        <SocketContext.Provider value={{sendMessage}} >
          {children}
        </SocketContext.Provider>
    )
}