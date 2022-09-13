
// 
const home = (req, res) =>{ 
    res.send("Bienvenidos Estudiantes SENA - Controlador Contactos");
};


// Funcion que multiplica el numero recibido por 5
const operacion =   (req, res) =>{ 
    const { numero } = req.params;
    
    let resultado = numero * 5; 
    
    res.send(`El resultado es ${resultado}`);
};


export {
    home,
    operacion
}