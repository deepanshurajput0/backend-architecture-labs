import express,{Application,Request,Response} from 'express'

export const app:Application = express()

app.use(express.json())

app.post("/sum",(req:Request,res:Response)=>{
      try {
        const { a, b } = req.body
        if(!a || !b){
           return res.status(400).json({message:"All fields are required"})
        } 
        let ans = a + b;
        return res.status(200).json({ans})
      } catch (error) {
        console.log(error)
      }                     
})


