import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbAccordionConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Bosque } from 'app/interfaces/bosques';
import { BosquesService } from 'app/services/bosques/bosques.service';
//import { LikeService } from 'app/services/like/like.service';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  introJS = introJs();

  establecimientos: any[] = [
      {
        tipo: "Parques",
        descripcion: "Buscar bosques con parques, áreas abiertas, etc."
      },
      {
        tipo: "Deportes",
        descripcion: "Buscar bosques para practicar deportes como fútbol, basket, ciclismo, etc."
      },
      {
        tipo: "Animales",
        descripcion: "Buscar bosques que cuentan con una gran cantidad de fauna."
      }
  ]

  bosques: Bosque[] = [];
  bosquesPopular: any[] = []
  bosquesNorte: any[] = []
  bosquesSur: any[] = []
  bosquesCentro: any[] = []

  constructor(
    private renderer : Renderer2,
    config: NgbAccordionConfig,
    private bosqueService: BosquesService,
    //private likeService: LikeService
  ) {
      config.closeOthers = true;
      config.type = 'info';
      if(window.innerWidth>=992){
        this.introJS.setOptions({
          steps: [
            { 
              intro: "Bienvenido a Forest Lover"
            },
            {
              element: "#nav1",
              intro: "Página de Inicio"
            },
            {
              element: "#nav2",
              intro: "Noticias sobre bosques"
            },
            {
              element: "#nav3",
              intro: "Página para contactarnos"
            },
            {
              element: "#nav4",
              intro: "Conoce el equipo"
            },
            {
              element: "#popular",
              intro: "Navega por los distintos bosques"
            }
          ]
        });
      }   
  }

  ngOnInit() {
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('index-page');
      this.introJS.start();
      /*Agregando las bosques*/
      this.initData();
  }
  
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
  }

  private async initData(): Promise<void> {
    await this.fetchbosques();
  }

  private fetchbosques(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.bosqueService.list().subscribe(async bosques => {
        for (let bosque of bosques["data"]) {
          //await this.fetchLikes(bosque);
          this.locatebosque(bosque);
        }
        this.bosques = bosques;
        resolve();
      });
    });
  }

  /*private fetchLikes(bosque: bosque): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.likeService.list(bosque.id).subscribe(likes => {
        bosque.likes = likes.length;
        resolve();
      });
    });
  }*/

  private locatebosque(bosque: Bosque): void {
    let datos = {nombre: bosque.nombre, url: bosque.img_url, id: bosque.id};
    /*if(bosque.likes > 3){
      this.bosquesPopular.push(datos);
    }*/
    if(bosque.zona.toLocaleLowerCase() === "norte"){
      this.bosquesNorte.push(datos);
    }else if(bosque.zona.toLocaleLowerCase() === "centro"){
      this.bosquesCentro.push(datos);
    }else if(bosque.zona.toLocaleLowerCase() === "sur"){
      this.bosquesSur.push(datos);
    }
  }

}
