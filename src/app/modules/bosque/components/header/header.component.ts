import { Component, Input, OnInit } from '@angular/core';
import { Bosque } from 'app/interfaces/bosques';
import { BosquesService } from 'app/services/bosques/bosques.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  bosque: Bosque;

  constructor(private bosqueService: BosquesService) { }

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

  like(bosque: Bosque){
    console.log("estoy aqui")
    console.log(bosque)
    this.bosqueService.addLike(bosque.id,bosque.likes+1).subscribe(data =>{
      //console.log(data)
      location.reload()
    })
    
  }

}
