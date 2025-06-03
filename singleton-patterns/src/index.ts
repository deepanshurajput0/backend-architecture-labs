import { game } from "./game";
import logger from "./logger";
 


setInterval(()=>{
   game.addGame(Math.random().toString())
   logger()
},1000)




