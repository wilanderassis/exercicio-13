import { Filmes } from './../shared/filmes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  url = 'assets/FILMES.json'

  constructor(
    private http: HttpClient
  ) { }

  getFilmes(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(`${this.url}`)
    .pipe(map((obj)=>{
      return obj['filmes']
    }))
  }

}
