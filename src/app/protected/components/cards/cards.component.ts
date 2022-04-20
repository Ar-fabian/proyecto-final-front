import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from 'src/app/maps/services';

interface store{
  nameStore: string;
}
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  stores:store[]=[
    {
      nameStore:'centro mayor'
    },
    {
      nameStore:'Plaza de las americas',
    },
    {
      nameStore:'Plaza central',
    },
    {
      nameStore:'Titan plaza',
    },
    {
      nameStore:'EL eden',
    },
    {
      nameStore:'Centro comercial Andino',
    },
    {
      nameStore:'Mercurio',
    },
    {
      nameStore:'hayuelos',
    }
  ]
  constructor( private router: Router,
               private placeService: PlacesService) { }
  openMap( query:string){

    
    localStorage.setItem('store', query);   
    
    this.router.navigateByUrl('/map/screen');
    this.placeService.getPlacesByQuery( query);

  }
  

}
