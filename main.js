class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    vender (cantidad) {
        if (this.cantidad == 0 || this.cantidad - cantidad < 0) {
            alert("No hay cantidad suficiente de " + this.nombre);
            return 0;
        } else {
            this.cantidad -= cantidad;
            alert("Ud. compró " + cantidad + " " + this.nombre);
            return this.precio * cantidad;
        }
    }
}

const lemonpie = new Producto("lemonpie", 100, 50);
const chocotorta = new Producto("chocotorta", 200, 20);
const brownie = new Producto("brownie", 500, 10);

let tarta = prompt ("Ingrese el nombre de la tarta que desea comprar: lemonpie, chocotorta, brownie. O ingrese 'ESC' para finalizar");
let total = 0;

while(tarta != "ESC"){
    let cantidad = prompt ("Ingrese la cantidad de la tarta que desea comprar");
    switch (tarta){
        case "lemonpie":
            total += lemonpie.vender(cantidad);
            break;
        case "chocotorta":
            total += chocotorta.vender(cantidad);
            break;
        case "brownie":
            total += brownie.vender(cantidad);
            break;
        default:
            alert("Ese gusto no está disponible");
            break;
        
    }
    tarta = prompt ("Ingrese el nombre de la tarta que desea comprar: lemonpie, chocotorta, brownie. O ingrese 'ESC' para finalizar");
}

alert ("Ud. gastó un total de $" + total);
