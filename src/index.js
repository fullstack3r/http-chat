import  express  from "express";
const app = express();

let message = [
    "patatas",
    "huevos",
    "pan"

]

app.get("/mensaje",(req, res)=>{
    res.send(message);
})

app.listen(3000, (()=>{

}));