import { Color } from "./color";
import { Genero } from "./genero";
import { Marca } from "./marca";
import { Talla } from "./talla";

export interface Producto {
  saveProduct(value: any): unknown;

  idProducto:number;
  descripcion:string;
  detalle:string;
  marca:Marca;
  color:Color;
  genero:Genero;
  talla:Talla;
  valor:number;
  imagen:string;
  cantidad:number;
  masBuscados:number;

}
