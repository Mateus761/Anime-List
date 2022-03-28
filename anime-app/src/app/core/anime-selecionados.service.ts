import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from './model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeSelecionadosService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/animes-selecionados'

  public getById(id: number): Observable<Anime> {
    return this.http.get<Anime>(`${this.url}/${id}`)
  }

  public getAll(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.url)
  }

  public delete(id: number  | undefined): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  public add (anime: Anime): Observable<HttpResponse<Anime>> {
    return this.http.post<Anime>(this.url, anime, {observe: 'response'})
  }

  public update (id: number, anime: Anime): Observable<Anime> {
    return this.http.put<Anime>(`${this.url}/${id}`, anime)
  } 
}
