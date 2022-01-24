import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { BosqueComponent } from './bosque.component';


@NgModule({
  declarations: [
    GalleryComponent,
    HeaderComponent,
    MapComponent,
    BosqueComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class BosqueModule { }
