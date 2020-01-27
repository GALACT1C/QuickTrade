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
  categoria1 : Number = 1;
  categoria2 : Number = 1;
  km : Number = 0;
  anyos : Number = 0;
  constructor() {}

}
