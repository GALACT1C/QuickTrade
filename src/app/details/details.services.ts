import { Injectable } from "@angular/core";
import {iProducto,iInmobiliaria, iTecnologia, iMotor} from "../interfaces/interfaces.page";
@Injectable()
export class DetailServices{
    listado1:(iProducto | iInmobiliaria | iTecnologia | iMotor)[] = [
        {
            id: 1,
            nombre: "Manolo",
            descripcion: "Compra pan",
            categoria: 3,
            precio: 1.20,
          },
      
          {
            id: 2,
            nombre : "Pepe",
            descripcion : "illopepe",
            categoria : 2,
            precio : 75
          },
      
          {
            id: 3,
            nombre : "David",
            descripcion : "illodavid",
            categoria : 1,
            precio : 20
          }
    ]

    getListado() : iProducto[]{
        return this.listado1;
    }

    getListado2(id : Number) : iProducto{
      return this.listado1.find(x => x.id == id)
    }
}
