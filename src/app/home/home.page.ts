import { Component } from '@angular/core';
import {iProducto,iInmobiliaria, iTecnologia, iMotor} from "../interfaces/interfaces.page";
import {DetailServices} from '../details/details.services';
import { AlertController } from '@ionic/angular';
import { snapshotChanges } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre : string = "";
  descripcion : string = "";
  categoria : number = 2;
  precio : number = 0;
  m2vivienda : number = 0;
  nbanyos : number = 0;
  nhabitaciones : number = 0;
  localidad : string = "";
  estado: number = 1;
  vehiculo : number = 1;
  km : number = 0;
  anyos : number = 0;
  megusta : boolean = false;
  id_usuario : number;
  listado1 : any[] = [
    {
      id : 1,
      nombre : "Juan",
      descripcion : "illojuan",
      categoria : 1,
      precio : 50
    },

    {
      id : 2,
      nombre : "Pepe",
      descripcion : "illopepe",
      categoria : 2,
      precio : 75
    },

    {
      id : 3,
      nombre : "David",
      descripcion : "illodavid",
      categoria : 1,
      precio : 20
    }
] 

  constructor(private service : DetailServices) {}
    ngOnInit(){
      let ref=this.service.getProductos();
      ref.once('value', snapshot =>{
        snapshot.forEach(child =>{
          let value = child.val();
          this.listado1.push(value)
          })
      })
  }

  listado2 : (iProducto | iInmobiliaria | iTecnologia | iMotor)[];
  public alertController: AlertController;

  guardardatos(){
    this.listado1.push(
     {nombre : this.nombre,
     descripcion : this.descripcion,
     categoria : this.categoria,
     precio : this.precio});
    alert("La inserción se ha efectuado con éxito");
  }

  guardardatos2(){ 
    //Tecnología
    if(this.categoria == 1){
      let producto:(iProducto | iTecnologia) =(
        {id : this.listado1.length + 1, id_usuario : this.id_usuario, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria, estado : this.estado, megusta : this.megusta}
      );
      this.service.setProducto(producto);
    }
    //Motor
    else if(this.categoria == 4){
      let producto:(iProducto | iMotor) =(
        {id : this.listado1.length + 1, id_usuario : this.id_usuario, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria, vehiculo : this.vehiculo, km : this.km, anyos : this.anyos, megusta : this.megusta}
      );
      this.service.setProducto(producto);
    }
    //Inmobiliaria
    else if(this.categoria == 3){
      let producto:(iProducto | iInmobiliaria) =(
        {id : this.listado1.length + 1, id_usuario : this.id_usuario, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria, m2 : this.m2vivienda, nbanyos : this.nbanyos, nhabitaciones : this.nhabitaciones, localidad : this.localidad, megusta : this.megusta}
        );
      this.service.setProducto(producto);
    }
    //Hogar
    else{
      let producto:(iProducto) =(
        {"id" : this.listado1.length + 1, id_usuario : this.id_usuario, "nombre" : this.nombre, "descripcion" : this.descripcion, "precio" : this.precio, "categoria" : this.categoria, megusta : this.megusta}
      );
      this.service.setProducto(producto);
    }
  }
}

