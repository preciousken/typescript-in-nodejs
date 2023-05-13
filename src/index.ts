import express, {Request,Response,NextFunction } from "express";
const app = express();


app.get("/", (req:Request,res:Response): void=>{
    try {
        res.json({
            status:true,
            message:" You are welcome comrade"
        })
    } catch (error) {
        console.log(error);
        res.json({
            status:false,
            message: "You've got some errors"
        })
    }
})


app.listen("5000",() =>{
    console.log('server running! ');
    
});