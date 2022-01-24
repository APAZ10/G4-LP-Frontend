import { Component, OnInit } from '@angular/core';
import { EspeciesService } from 'app/services/especies/especies.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  especies: any = []

  constructor(private grupoServicio: EspeciesService) { }

  ngOnInit(): void {
    new Promise<void>((resolve, reject) => {
      this.grupoServicio.list().subscribe(async especies =>{
        
        this.especies = especies["data"];
        resolve();
      });
    });
  }
}
