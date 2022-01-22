import { Component, Input, OnInit } from '@angular/core';
import { Bosque } from 'app/interfaces/bosques';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  bosque: Bosque;

  constructor() { }

  ngOnInit(): void {
    /*
    fetch("../../../assets/data/bosques.json")
      .then(response => response.json())
      .then(data => {
        
        let listaBosques = data.bosques;
        for(let bosque of listaBosques as any){
          if(("/bosques/"+bosque.id)===window.location.pathname){
            document.getElementById("nombre").textContent=bosque.nombre
            document.getElementById("direccion").textContent=bosque.direccion
            document.getElementById("precio").textContent=bosque.precio
            document.getElementById("descripcion").textContent=bosque.descripcion
            document.getElementById("coordenadas").textContent=bosque.coordenadas[0]+","+bosque.coordenadas[1]
          }
        }
      })
      .catch(console.error);
    */
  }

}
