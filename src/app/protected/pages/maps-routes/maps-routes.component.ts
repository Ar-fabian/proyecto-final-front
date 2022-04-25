import { Component, OnInit } from '@angular/core';
import { MapService, PlacesService } from 'src/app/maps/services';
import { MallService } from '../../services/mall.service';
import { Feature } from '../../../maps/interfaces/places';

@Component({
  selector: 'app-maps-routes',
  templateUrl: './maps-routes.component.html',
  styleUrls: ['./maps-routes.component.scss']
})
export class MapsRoutesComponent implements OnInit {
  maps:string[]=[];
  constructor( private mallService:MallService,
               private placeService:PlacesService,
               private mapService:MapService) { }

  
  ngOnInit(): void {
    this.mallService.listMall()
    .subscribe( resp =>{
      resp.malls?.forEach( mall =>{
        if( !this.maps.includes(mall.mall)){
          this.maps.push(mall.mall);
        }
      })
    });
  }
  get isLoadingPlaces():boolean{
    return this.placeService.isLoadingPlaces;
  }
  get places():Feature[]{
    return this.placeService.places;
  }

  getMarkerByMall( mall:string ){
    this.placeService.getPlacesByQuery( mall );
    this.mapService.getMap;
    if( this.mapService.getMap!.getLayer('RouteString')){
        this.mapService.getMap!.removeLayer('RouteString');
        this.mapService.getMap!.removeSource('RouteString');
    }
  }

  getDirections(){
    if( !this.placeService.useLocation ) throw Error('No hay userLocation');
    const start = this.placeService.useLocation;
    const end = this.places[0].center as [number,number];
    this.mapService.getRouteBetweenPoints( start, end);
    this.placeService.deletePlaces();
  }

}
