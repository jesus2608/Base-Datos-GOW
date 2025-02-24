import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajePageComponent } from './pages/personaje-page/personaje-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { PersonajeRoutingModule } from './personajes-rooting.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { personajeImage } from './pipes/personaje.image.pipe';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonajePageComponent,
    SearchPageComponent,
    ListPageComponent,
    NewPageComponent,
    LayoutPageComponent,
    CardComponent,
    personajeImage,
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    PersonajeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
 
  
    
  
  ],  providers: [
      provideAnimationsAsync(),
      provideHttpClient()
    ],
})
export class PersonajesModule { }
