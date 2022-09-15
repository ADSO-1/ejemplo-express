
// Middleware
const home = (req, res) =>{ 
    res.send("Bienvenidos Estudiantes SENA - Primer Servidor ExpressJS");
};


// Middleware que multiplica el numero recibido por 5
const operacion =   (req, res) =>{ 
    const { numero } = req.params;
    
    let resultado = numero * 5; 
    
    res.json({
        "resultado" : resultado
    });

};

// Middleware que multiplica el numero recibido por 5
const saludo =   (req, res) =>{ 
    const { nombre } = req.params; 
    
    res.json({
        "saludo" : "Bienvenido Sr(a)",
        "nombre" : nombre
    });
};


export {
    home,
    operacion,
    saludo
}