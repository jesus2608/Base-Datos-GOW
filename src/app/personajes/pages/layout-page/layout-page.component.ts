import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/service/auth.service';
import { User } from '../../../auth/interface/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  constructor(private router:Router, private authService: AuthService){}
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Añadir', icon: 'add', url: './new-personaje'},
    { label: 'Buscar', icon: 'search', url: './search'},
  ]

  onLogout(){
    this.authService.logout();
    window.location.href= "/auth/login"
  }
  listado(){
    window.location.href="/personajes/list"
  }
  crearPersonaje(){
    window.location.href="/personajes/new-personaje"
  }
  filtrado(){
    window.location.href="/personajes/search-page"
  }

  get user():User |undefined{
    return this.authService.currentUser;
  }



}
