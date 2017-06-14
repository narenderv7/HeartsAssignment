import { Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class HttpService {
    public http:Http;
    private url : string = 'https://mqhn735g8d.execute-api.us-east-1.amazonaws.com';
    constructor(http:Http){
        this.http = http;
    };

  public getBrands(){
      return this.http.get(this.url+'/makes')
        .mergeMap((res) => res.json())
        .filter((res) => res['is_in_navigation'] );
  };

  public getModels(brandId : string){
      return this.http.get(this.url+'/makes/'+brandId)
        .mergeMap((res) => res.json().models)
        .filter((res) => res['is_in_navigation'] );
  }
}