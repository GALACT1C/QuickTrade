import { Injectable } from "@angular/core";
import {iProducto,iInmobiliaria, iTecnologia, iMotor} from "../interfaces/interfaces.page";
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()
export class DetailServices{
    constructor(private db: AngularFireDatabase){

    }

    getProductos():firebase.database.Reference{
      let ref =this.db.database.ref("Productos");
      return ref;
    }

    setProducto(producto:{}){
      let ref = this.db.database.ref("Productos");
      let ref2 = ref.push(producto);
    }
}
