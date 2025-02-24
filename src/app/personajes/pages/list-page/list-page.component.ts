import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import { Datum, Personajes } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements AfterViewInit {
  public personajes : Datum[] =[];
  constructor(private servicio : PersonajeService){}
  ngAfterViewInit(): void {
    this.servicio.getPersonajes()
   .subscribe(personaje =>
 this.personajes= personaje)
 console.log(this.personajes)
  }
  

  

}
