import { Producto } from "./producto";
import { Talla } from "./talla";
import { Usuario } from "./usuario";

export interface DetalleFactura {
    cantidadPedida:number;
    tallaPedida:Talla;
    usuario:Usuario;
    productos:Producto;

    }
