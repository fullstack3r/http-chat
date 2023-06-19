import  express  from "express";
import mensajesroutes from "./routes/mensajes.routes.js"

const app = express();


app.use("/mensaje", mensajesroutes);

app.listen(3000, (()=>{

}));