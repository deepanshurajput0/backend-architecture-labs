import {game}from "./game";
import logger from "./logger";
 
setInterval(()=>{
   game.push({
    id: Math.random().toString(),
    whitePlayer:'Daniel',
    blackPlayer:'Parkour',
    Move:[],
   })
   logger()
},1000)

