import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre : string = "";
  descripcion : string = "";
  categoria :Number = 2;
  precio : Number = 0;
  m2vivienda : Number = 0;
  nbanyos : Number = 0;
  nhabitaciones : Number = 0;
  localidad : string = "";


  constructor() {}

}
