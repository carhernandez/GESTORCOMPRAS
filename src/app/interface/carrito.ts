import { Producto } from "./producto";
import { Usuario } from "./usuario";

export interface Carrito{
 cantidadPedida: any;
 tallaPedida: any;

 idCarrito: number;
 estado:string;
 //usuario:Usuario;
 producto:Producto;
 cantidad:number;

}
