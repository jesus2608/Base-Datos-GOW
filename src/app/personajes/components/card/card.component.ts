import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/personaje.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  constructor(private router: Router){}
ngOnInit(): void {
  if (!this.personaje) throw Error ('Personaje es requerido')
}
@Input()
public personaje!:Datum;

public detalle(id: number){
window.location.href=("/personajes/"+id); 
}
public actualizar(id:number){
  window.location.href=("/personajes/edit/"+id);
}

}
