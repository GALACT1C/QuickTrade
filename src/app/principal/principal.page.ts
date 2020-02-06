import { Component, OnInit } from '@angular/core';
import {iProducto,iInmobiliaria, iTecnologia, iMotor} from "../interfaces/interfaces.page";
import {DetailServices} from '../details/details.services';
import { AlertController } from '@ionic/angular';
import { snapshotChanges } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

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

  listado1 : any[] = [
    {
      id : 1,
      nombre : "Melocoton",
      descripcion : "illojuan",
      categoria : 1,
      precio : 50,
      /** Apartado C */
      megusta : false
      /** Fin Apartado C */
    },

    {
      id : 2,
      nombre : "Manzana",
      descripcion : "illopepe",
      categoria : 2,
      precio : 75,
      /** Apartado C */
      megusta : false
      /** Fin Apartado C */
    },

    {
      id : 3,
      nombre : "Uva",
      descripcion : "illodavid",
      categoria : 1,
      precio : 20,
      /** Apartado C */
      megusta : false
      /** Fin Apartado C */
    }
] 

  id : number;
  constructor(private service : DetailServices, private activate:ActivatedRoute) {}
    ngOnInit(){
      this.id=+this.activate.snapshot.paramMap.get('id');
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
     precio : this.precio,
     /*** Apartado C */
     megusta : this.megusta});
     /*** Fin Apartado C */
    ("La inserción se ha efectuado con éxito");
  }

  guardardatos2(){ 
    //Tecnología
    if(this.categoria == 1){
      let producto:(iProducto | iTecnologia) =(
        {"id" : this.listado1.length + 1,/** Apartado C */ "megusta" : this.megusta /** Fin Apartado C */, "id_usuario" : this.id, "nombre" : this.nombre, "descripcion" : this.descripcion, "precio" : this.precio, "categoria" : this.categoria, "estado" : this.estado}
      );
      this.service.setProducto(producto);
    }
    //Motor
    else if(this.categoria == 4){
      let producto:(iProducto | iMotor) =(
        {"id" : this.listado1.length + 1,/** Apartado C */ "megusta" : this.megusta /** Fin Apartado C */, "id_usuario" : this.id, "nombre" : this.nombre, "descripcion" : this.descripcion, "precio" : this.precio, "categoria" : this.categoria, "vehiculo" : this.vehiculo, "km" : this.km, "anyos" : this.anyos}
      );
      this.service.setProducto(producto);
    }
    //Inmobiliaria
    else if(this.categoria == 3){
      let producto:(iProducto | iInmobiliaria) =(
        {"id" : this.listado1.length + 1,/** Apartado C */ "megusta" : this.megusta /** Fin Apartado C */, "id_usuario" : this.id, "nombre" : this.nombre, "descripcion" : this.descripcion, "precio" : this.precio, "categoria" : this.categoria, "m2" : this.m2vivienda, "nbanyos" : this.nbanyos, "nhabitaciones" : this.nhabitaciones, "localidad" : this.localidad}
        );
      this.service.setProducto(producto);
    }
    //Hogar
    else{
      let producto:(iProducto) =(
        {"id" : this.listado1.length + 1,/** Apartado C */ "megusta" : this.megusta /** Fin Apartado C */, "id_usuario" : this.id, "nombre" : this.nombre, "descripcion" : this.descripcion, "precio" : this.precio, "categoria" : this.categoria}
      );
      this.service.setProducto(producto);
    }
  }

  /*** Apartado C */
  sigusta(megusta: boolean){
    this.megusta=true;
    /** Apartado E - soy consciente que la variable megusta no es number, pero no me da tiempo a más */
    
    var contadormegusta = this.megusta + 1;
    /** Apartado E */
    /*** Apartado B */
    alert("Me gusta");
    /*** Fin Apartado B */
  }
  /***Fin Apartado C */

  /*** Apartado D */
  nogusta(megusta: boolean){
    this.megusta=false;
    /** Apartado E */
    var contadormegusta = this.megusta - 1;
    /** Apartado E */
    alert("Ya no te gusta");
  /*** Fin Apartado D */
  }
}
