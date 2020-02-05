import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {iProducto,iInmobiliaria, iTecnologia, iMotor} from "../interfaces/interfaces.page";
import {DetailServices} from '../details/details.services';
@Component({
    selector: 'app-details',
})
export class details implements OnInit{

    constructor(private _activatedRoute: ActivatedRoute,private detalles: DetailServices){

    }
    id: number;
    listado3:(iProducto | iInmobiliaria | iTecnologia | iMotor)
    ngOnInit() {
        this.id = +this._activatedRoute.snapshot.paramMap.get('id');
        this.listado3 = this.detalles.getListado2(this.id)
        console.log(this.listado3.id);
      }
}