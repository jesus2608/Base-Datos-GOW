import { Pipe, PipeTransform } from '@angular/core';
import { Datum } from '../interfaces/personaje.interface';

@Pipe({
    name: 'personajeImage'
})

export class personajeImage implements PipeTransform {
    transform(personaje:Datum): any {
        if (!personaje.id && !personaje.img ){
            return 'cagaste.png';
          }
          if ( personaje.img ) return personaje.img; 

          return personaje.img
      
    }
}