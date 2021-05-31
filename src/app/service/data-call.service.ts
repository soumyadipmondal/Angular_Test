import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MovieConentSchema } from '../interface/movie-content.i'

@Injectable({
  providedIn: 'root'
})
export class DataCallService {

  constructor(private _http: HttpClient) { }
  contentUrl = "https://gateway.marvel.com/v1/public/characters?apikey=6871af630ca51742153d2db8dbf10dcb&hash=609bb5211dbf0e54c53e927bb92f5ee7&ts=1"
  getMovieDescription(searchParam){
    if(searchParam !== ''){
     this.contentUrl= `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchParam}&apikey=6871af630ca51742153d2db8dbf10dcb&hash=609bb5211dbf0e54c53e927bb92f5ee7&ts=1`
      console.log("h1", this._http.get<MovieConentSchema>(this.contentUrl));
      return this._http.get<MovieConentSchema>(this.contentUrl);
    }else{
      console.log(this._http.get<MovieConentSchema>(this.contentUrl))
      return this._http.get<MovieConentSchema>(this.contentUrl);
    }
    
  }
}
