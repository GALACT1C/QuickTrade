import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {iProducto,iInmobiliaria, iTecnologia, iMotor} from "../interfaces/interfaces.page";
import {DetailServices} from '../details/details.services';
import { snapshotChanges } from '@angular/fire/database';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit{

  constructor(private _activatedRoute: ActivatedRoute,private detalles: DetailServices){

  }
  id: number;
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
  listado3:(iProducto | iInmobiliaria | iTecnologia | iMotor)
  ngOnInit() {
      this.id = +this._activatedRoute.snapshot.paramMap.get('id');
      let ref = this.detalles.getProductos();
      ref.orderByChild('id').equalTo(this.id).once("value",snapshot =>{
        snapshot.forEach(child =>{
          this.nombre = child.val().nombre;
          this.descripcion = child.val().descripcion;
          this.categoria = child.val().categoria;
          this.precio = child.val().precio;
        })
      })
    }
}