import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { MallResponse, Params } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MallService {

    private baseUrl: string = environment.baseUrl;
    private localBaseUrl: string = environment.localbaseUrl;

    constructor( private http: HttpClient) { }

    listMall(){
        const url = `${this.localBaseUrl}/malls`;
        return this.http.get<MallResponse>(url)
    }

    listStoreByMall( query:string ){
      const url = `${ this.localBaseUrl }/malls/mall/${ query }`
      return this.http.get<MallResponse>(url)
    }
    pricesCompare( query:string ){
      const queryProcessed = query.toLocaleLowerCase().trim().concat();
      const url = `${ this.localBaseUrl }/malls/product/${ queryProcessed }`
      return this.http.get<MallResponse>(url);
    }
    getTodo({mallSelected, productSearch}:Params){
      const url = `${this.localBaseUrl}/malls/budget?mall=${mallSelected}&productName=${productSearch}`;
      return this.http.get<MallResponse>(url);
    }

}