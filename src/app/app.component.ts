import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PracticaFinal';
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.authService.checkAuthenticacion()
    .subscribe(()=>console.log('Finalizada la validacion de autenticacion'))
  }
}
