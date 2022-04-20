import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService, MapService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef
  constructor( 
    private placesService:PlacesService,
    private mapService: MapService
    ) { }

  ngAfterViewInit(): void {
    if( !this.placesService.useLocation) throw Error('No hay placeService.userLocation');
    
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });

      const popup = new Popup()
        .setHTML(`
          <h3>Usted esta aqui</h3>
          <span>Ubicacion en tiempo real</span>
        `);
      
      new Marker( { color:'red'})
        .setLngLat(this.placesService.useLocation)
        .setPopup( popup)
        .addTo(map);

    this.mapService.setMap( map );

    if(this.mapService.isMapReady){
      console.log('mapa listo');
      
      if( localStorage.getItem('store')){
        const store = localStorage.getItem('store') || '';
        this.placesService.getPlacesByQuery(store);
      }
    };
    
  }

}
