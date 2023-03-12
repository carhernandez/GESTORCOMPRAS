import { Producto } from "./producto";
import { Usuario } from "./usuario";

export interface Carrito{

 estado:string;
 usuario:Usuario;
 producto:Producto;
 cantidad:number;

}
