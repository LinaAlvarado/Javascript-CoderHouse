let miArray = [];
let entrada = prompt(`Seleccionar Producto Del 1 Al 4
1. Jean
2. Camiseta
3. Reloj
4. Tennis`).toLowerCase();
while (entrada != 'fin') {
    switch (entrada) {
        case "1":
            alert("Jean");
            let precioProducto1 = 200000;
            console.log(precioProducto1);
            miArray.push(200000);
            break;
        case "2":
            alert("Camiseta");
            let precioProducto2 = 120000;
            console.log(precioProducto2);
            miArray.push(120000);
            break;
        case "3":
            alert("Reloj");
            let precioProducto3 = 50000;
            console.log(precioProducto3);
            miArray.push(50000);
            break;
        case "4":
            alert("Tennis");
            let precioProducto4 = 200000;
            console.log(precioProducto4);
            miArray.push(200000);
            break;
        default:
            alert("No Escribiste o no existe el producto");
            break;
    }
    entrada =  prompt(`¿Quieres seleccionar otro producto? / Para finalizar compra escribe "Fin"
    1. Jean
    2. Camiseta
    3. Reloj
    4. Tennis`).toLowerCase();
}

function suma() {
    let suma1 = 0;
    for ( i = 0; i < miArray.length; i++) {
        suma1 += miArray[i];
    }
    if (suma1 <= 200000) {
        document.write(`<p>Precio Total: ${suma1}</p>`);
    } else {
        let descuento = suma1 * 0.15;
        let precioFinal_total = suma1 - descuento;
        document.write(`<p>Precio Total: ${suma1}</p>`);
        document.write(`<p>Tu Descuento Fue: ${descuento}</p>`)
        document.write(`<p>Precio Total a Pagar Es: ${precioFinal_total}</p>`);
    }
}
suma()