import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailServices } from '../details/details.services';
import { snapshotChanges } from '@angular/fire/database';

@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.page.html',
  styleUrls: ['./misproductos.page.scss'],
})
export class MisproductosPage implements OnInit {

  constructor(private activate:ActivatedRoute,private service:DetailServices) { }

  id:number;
  producto =[];
  ngOnInit() {
    this.producto=[];
    this.id=+this.activate.snapshot.paramMap.get('id');
    let ref=this.service.getProductos();
    ref.orderByChild('id_usuario').equalTo(this.id).once('value', snapshot =>{
      snapshot.forEach(child =>{
        var value = child.val();
        this.producto.push(value);
      })
    })
  }

  borrar(id: number){
    var ref=this.service.getProductos();
    ref.orderByChild('id').equalTo(id).once('value', snapshot =>{
      this.producto=[];
      snapshot.forEach(child =>{
        var value = child.key;
        ref.child(value).remove;
      })
    })
  }

}
