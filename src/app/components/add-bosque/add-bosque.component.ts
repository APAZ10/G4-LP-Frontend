import { Component, OnInit } from '@angular/core';
import { Bosque } from 'app/interfaces/bosques';
import { BosquesService } from 'app/services/bosques/bosques.service';

@Component({
  selector: 'app-add-bosque',
  templateUrl: './add-bosque.component.html',
  styleUrls: ['./add-bosque.component.css']
})
export class AddBosqueComponent implements OnInit {

  constructor(private bosqueService: BosquesService) { }

  addBosque(bosque) {
    
    this.bosqueService.add(bosque).subscribe(() => {
      location.reload();
    });

  }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

  }
  
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
