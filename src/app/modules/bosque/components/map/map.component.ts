import { AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { Bosque } from 'app/interfaces/bosques';
import * as L from 'leaflet';

/*const iconRetinaUrl = 'assets/img/marker-icon-2x.png';
const iconUrl = 'assets/img/marker-icon.png';
const shadowUrl = 'assets/img/marker-shadow.png';
//const shadowUrl = '../../../../../assets/img/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;*/


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {

  @Input()
  bosque: Bosque;
  
  private map;

  /*
  private initMap(): void {
    fetch("../../../assets/data/bosques.json")
    .then(response => response.json())
    .then(data => {
      let listaBosques = data.bosques;
      for(let bosque of listaBosques as any){
        if(("/bosques/"+bosque.id)===window.location.pathname){
          const lon = bosque.coordenadas[0];
          const lat = bosque.coordenadas[1];
          this.map = L.map('map', {
            center: [ lon, lat ],
            zoom: 17
          });
          const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 14,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          });
          tiles.addTo(this.map);
          var marker=L.marker([lon, lat]).addTo(this.map);
          var popup=marker.bindPopup("<b>Es aqui!</b>");
          popup.openPopup();
        }
      }
    })
    .catch(console.error);
  }
  */

  constructor() {
    //console.log(' pathname => ' + window.location.pathname);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.initMap();
    this.initData();
  }

  private initData(): void {
    const lon = this.bosque.coords.split(',')[0];
    const lat = this.bosque.coords.split(',')[1];
    this.map = L.map('map', {
      center: [ lon, lat ],
      zoom: 17
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 14,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    var marker=L.marker([lon, lat]).addTo(this.map);
    var popup=marker.bindPopup("<b>Es aqui!</b>");
    popup.openPopup();
  }
}
