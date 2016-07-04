import { Injectable, Inject } from "@angular/core";
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { OmdbMovie } from "./models";

@Injectable()
export class OmdbService {
    apiUrl: string = "http://www.omdbapi.com/";

    constructor(private http: Http) { }
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return new Observable(error.message || error);
    }

    search(query: string) : Observable<OmdbMovie[]>{
        //http://www.omdbapi.com/?s=Star+wars&y=&plot=short&r=json
        let args: URLSearchParams = new URLSearchParams();
        args.append("s", query);
        args.append("plot", "short");
        args.append("r", "json");

        return this.http.get(this.apiUrl, { search: args })
               .map( response => 
                   response.json().Search
                )
               .catch(this.handleError);
    }
    
    find(id:string): Observable<OmdbMovie> {
        return this.http.get(`${this.apiUrl}?i=${encodeURI(id)}&y=&plot=short&r=json`)
               .map( response => 
                   response.json()
                )
               .catch(this.handleError);}
               
    findSeason(id:string, season:number): Observable<OmdbMovie> {
        return this.http.get(`${this.apiUrl}?i=${encodeURI(id)}&season=${encodeURI(season.toString())}&y=&plot=short&r=json`)
               .map( response => 
                   response.json()
                )
               .catch(this.handleError);}
}