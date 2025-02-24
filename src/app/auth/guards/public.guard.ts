import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({providedIn: 'root'})
export class PublicGuard{
    constructor(private authService: AuthService, private router: Router) { }
    private checkAuthStatus(): boolean | Observable<boolean>{
        return this.authService.checkAuthenticacion()
          .pipe(
            tap( isAuthenticated => console.log('Autenticado: ', isAuthenticated)),
            tap( isAuthenticated => {
              if ( isAuthenticated ){
                window.location.href= "./"
              }
          
            }),
            map ( isAuthenticated => !isAuthenticated)
            
          )
      }
    
         canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
              console.log('Can Match');
              console.log({ route, segments});
          
              return this.checkAuthStatus(); 
            }
           
            canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
              console.log('Can Activate');
              console.log({ route, state});
          
              return this.checkAuthStatus();
            }
          

    
    
}