import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss']
})
export class BtnMyLocationComponent{

  constructor( 
    private mapService: MapService,
    private placeService: PlacesService,
    private router:Router
    ) { }

  goToMyLocation(){
    if( !this.placeService.isUserLocationReady) throw Error('No hay ubicacion de usuario');
    if( !this.mapService.isMapReady) throw Error('No hay mapa disponible');

    this.placeService.getUserLocation()
      .then(coords =>{
        this.mapService.myFlyTo( coords );
      })
  }


}
