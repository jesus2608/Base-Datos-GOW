import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Datum } from '../../interfaces/personaje.interface';
import { filter, switchMap, tap } from 'rxjs';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit{
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.rutaActivada.params
      .pipe(
        switchMap ( ({id}) => this.service.getPersonajesById( id ))
      ).subscribe ( persona => {
        if ( !persona ) return this.router.navigateByUrl('/');
        this.personajeForm.reset ( persona );     
        return;
      })
  }
  constructor(private service: PersonajeService, 
    private rutaActivada: ActivatedRoute,
    private router:Router,
    private snackbar : MatSnackBar,
    private dialog: MatDialog
  ){}
  showSnackbar(message: string):void{
    this.snackbar.open(message,'done', { duration: 2000})
  }
  public personajeForm = new FormGroup({
    id: new FormControl<Number>(0),
    img: new FormControl<string>(''),
    character: new FormControl<string>('', { nonNullable: true }),
    voiceActor: new FormControl<string>(''),
    appearsIn: new FormControl<string>(''),
    alias: new FormControl<string>(''),
    species: new FormControl<string>(''),
    gender: new FormControl<string>(''),
    about: new FormControl<string>(''),
    quote: new FormControl<string>('', { nonNullable: true }),
  })

  get personaje(): Datum{
    const personaje = this.personajeForm.value as Datum;
    return personaje;
  }
  onSubmit():void{
    if(this.personajeForm.invalid) return;
    if(this.personaje.id){
      this.service.updatePersonaje(this.personaje).subscribe(persona=>{
        this.router.navigate(['/personajes/edit', this.personaje.id]);
        this.showSnackbar(`${persona.character} actualizado`)
      })
    }else{
    this.service.addPersonaje(this.personaje).subscribe(persona=>{
      this.router.navigate(['/personajes/edit', this.personaje.id]);
      this.showSnackbar(`${persona.character} creado`)
    })
  }
  }
  onDelete(){
    if ( !this.personaje.id ) throw Error('Personaje es requerido');
  
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: {name: this.personajeForm.value}
    });
  
    dialogRef.afterClosed()
    .pipe(
      //filter( result => result === true),filtramos, si es “true” pasa
      filter ((result:boolean) => result),
      switchMap( ()=> this.service.deletePersonaje( this.personaje.id) ),
      filter ( (wasDeleted:boolean)=>wasDeleted),
      tap ( wasDeleted => console.log({wasDeleted})
      )
    )
    .subscribe(result => {
      this.router.navigate(['/heroes'])
    });
  
  


}
}
