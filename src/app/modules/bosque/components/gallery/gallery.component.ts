import { Component, OnInit } from '@angular/core';
import { EspeciesService } from 'app/services/especies/especies.service';
import { RecorridosService } from 'app/services/recorridos/recorridos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  especies: any = []
  recorridos: any = []

  constructor(private grupoServicio: EspeciesService, private recorridoServicio: RecorridosService ) { }

  ngOnInit(): void {
    new Promise<void>((resolve, reject) => {
      this.grupoServicio.list(window.location.pathname.split("/").pop()).subscribe(async especies =>{   
        this.especies = especies["data"];
      });
      this.recorridoServicio.list(window.location.pathname.split("/").pop()).subscribe(async recorridos =>{
        this.recorridos = recorridos["data"];
      });
      resolve();
    });
  }
}
