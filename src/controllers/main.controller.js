let message = [
    "patatas",
    "huevos",
    "pan"
]

export function get (req,res){
    res.send(message);
}

export default{ get};