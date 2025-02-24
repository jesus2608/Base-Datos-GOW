import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interface/user.interface';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router:Router){}
  onLogin():void{

    this.authService.login('martosman@gmail.com','1234')
    .subscribe( user => {
      window.location.href= "/personajes";
    }
    )
  }
  onLogout(){
    this.authService.logout();
  }
  get user():User | undefined{
    return this.authService.currentUser;
  }




}
