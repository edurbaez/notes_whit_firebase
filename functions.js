 const suma= (a,b)=> {
    return a * b;
}

let objetoX={
    "sa":"primero",
    "se":"segunto",
    "si":"tercero"

}


//transformar una objeto en arrays
//de un obj obtiene los valore
let valores= Object.values(objetoX)
//de un obj obtiene los clave key
let clavesKeys= Object.keys(objetoX)
//de un obj obtiene los arras de array con key==valores
let keys_y_valores=Object.entries(objetoX)

66