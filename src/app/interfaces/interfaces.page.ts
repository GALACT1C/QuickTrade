import  {Component} from '@angular/core';;
import {NumericValueAccessor} from '@ionic/angular';

export interface iProducto{
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    categoria: number
};

export interface iInmobiliaria extends iProducto{
    m2: number,
    nbanyos: number,
    descripcion: string,
    nhabitaciones: number,
    localidad: string
};

export interface iTecnologia extends iProducto{
    estado: number
};

export interface iMotor extends iProducto{
    vehiculo: number,
    km: number,
    anyos: number
};