import { Component, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/personaje.interface';
import { PersonajeService } from '../../service/personaje.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-personaje-page',
  templateUrl: './personaje-page.component.html',
  styleUrl: './personaje-page.component.css'
})
export class PersonajePageComponent implements OnInit{
public personaje?: Datum;
constructor(
  private servicio : PersonajeService,
  private activate: ActivatedRoute,
  private router : Router
){}
  ngOnInit(): void {
    this.activate.params
    .pipe(
      switchMap(({id})=> this.servicio.getPersonajesById(id))
    )
    .subscribe(personaje =>{
      this.personaje = personaje;
      console.log(personaje);
      return;
    })
  }
  goList():void{
  window.location.href= 'personajes/list';
  }

}
