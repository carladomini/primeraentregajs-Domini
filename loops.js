let eleccion = prompt ('Ingresar si quiere alquilar o comprar')
console.log (eleccion)

function ingresar (eleccion){
    if (eleccion == "alquilar" || eleccion == "comprar" ){
        if (eleccion =="alquilar") {
           let precio = +prompt('Ingresar precio entre $8000 a $100000')  
           if (precio >= 8000 && precio <= 100000) {
           for (let i=8000; i<100000; i++){
            alert (i);    
           }
    }else alert ('Ingreso un precio incorrecto')
} else {
            let precio= +prompt('Ingresar precio entre $$42000 a $$260000')  
            if (precio >= 42000 && precio <= 260000) {
                for (let i=42000; i<260000;i++){
                    alert (i);  
}
    } else alert('Ingreso un precio incorrecto')
}

}else alert ('Ingresar la opcion correcta')
}

ingresar (eleccion);

class casa{
    constructor(direccion, precio){
        this.direccion = direccion;
        this.precio = precio;
    }
}

const casa1 = new casa ("Garibaldi", "18000");
const casa2 = new casa ("Yrigoyen 1066","260000");
console.log(casa1);
console.log(casa2);

let inmuebles = []
inmuebles.push(casa1)
inmuebles.push(casa2)
console.log(inmuebles[0])

const casas = [
    {nombre: 'Garibaldi', precio: 18000},
    {nombre: 'Yrigoyen', precio: 260000},
]

const nombres = casas.map((el) => el.nombre)
console.log(nombres)


