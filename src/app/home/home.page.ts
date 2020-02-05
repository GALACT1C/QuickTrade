import { Component } from '@angular/core';
import {iProducto,iInmobiliaria, iTecnologia, iMotor} from "../interfaces/interfaces.page";
import {DetailServices} from '../details/details.services';
import { AlertController } from '@ionic/angular';

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
      this.listado2.push(
        {id : this.listado2.length + 1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria, estado : this.estado}
      );
    alert("La inserción se ha efectuado con éxito");
    }
    //Motor
    else if(this.categoria == 4){
      this.listado2.push(
        {id : this.listado2.length + 1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria, vehiculo : this.vehiculo, km : this.km, anyos : this.anyos}
      );
      alert("La inserción se ha efectuado con éxito");
    }
    //Inmobiliaria
    else if(this.categoria == 3){
      this.listado2.push(
        {id : this.listado2.length + 1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria, m2 : this.m2vivienda, nbanyos : this.nbanyos, nhabitaciones : this.nhabitaciones, localidad : this.localidad}
      );
      alert("La inserción se ha efectuado con éxito");
    }
    //Hogar
    else{
      this.listado2.push(
        {id : this.listado2.length + 1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria}
      );
      alert("La inserción se ha efectuado con éxito");
    }
  }

  constructor(private service : DetailServices) {}
  ngOnInit(){
    this.listado2=this.service.getListado();
  }

}

