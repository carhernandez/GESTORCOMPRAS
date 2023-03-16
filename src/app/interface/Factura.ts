import { Carrito } from "./carrito";
import { Producto } from "./producto";
import { Usuario } from "./usuario";

export interface Factura{

idFactura: number;
fecha:Date;
usuario:Usuario;
carrito:Carrito;
producto:Producto;
iva:number;
total:number;

}
