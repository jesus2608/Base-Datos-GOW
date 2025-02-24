import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from '../../../environments/enviroments';
import { catchError, map, Observable, of } from 'rxjs';
import { Datum, Personajes } from '../interfaces/personaje.interface';

@Injectable({providedIn: 'root'})
export class PersonajeService {
    private baseURL: string = enviroments.baseURL;
    constructor(private httpClient: HttpClient) { }
    getPersonajes():Observable<Datum[]>{
        console.log(this.baseURL);
        return this.httpClient.get<Datum[]>(`${this.baseURL}/personajes`);
    }
    getPersonajesById(id:string): Observable<Datum|undefined>{
        return this.httpClient.get<Datum>(`${this.baseURL}/personajes/${id}`)
        .pipe(
            catchError(error=>of(undefined))
        )
    }
    addPersonaje(personaje: Datum){
        return this.httpClient.post<Datum>(`${this.baseURL}/personajes`, personaje);
    }
    updatePersonaje(personaje:Datum){
        if(!personaje.id) throw Error('No has ingresado un personaje');
        return this.httpClient.patch<Datum>(`${this.baseURL}/personajes/${personaje.id}`,personaje)
    }
    deletePersonaje( id: number ): Observable<boolean> {

        return this.httpClient.delete(`${ this.baseURL }/personajes/${ id }`)
          .pipe(
            map( resp => true),
      catchError ( err => of(false))
          );
      }


    
    
}