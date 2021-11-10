import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/components/login/services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanLoad {
  private isAuthenticated: boolean = false;
  private token: string;
  constructor(
    private autenticacao: AutenticacaoService,
    private router: Router
  ) {
    this.token = sessionStorage.getItem('token');
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.token) {
      this.router.navigateByUrl('login');
      return false;
    }

    return true;
  }


}
