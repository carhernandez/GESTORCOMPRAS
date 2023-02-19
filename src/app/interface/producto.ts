import { Color } from "./color";
import { Genero } from "./genero";
import { Marca } from "./marca";
import { Talla } from "./talla";

export interface Producto {
  saveProduct(value: any): unknown;

  id:number;
  descripcion:string;
  marca:Marca;
  color:Color;
  genero:Genero;
  talla:Talla;
  valor:number;
  cantidad:number;

}
