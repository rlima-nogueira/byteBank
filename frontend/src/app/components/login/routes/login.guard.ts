import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  public token: string;
  constructor(
    private router: Router
  ) {
    this.token = sessionStorage.getItem('token');
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.token) {
      this.router.navigate(['extrato']);
      return false;
    }

    return true;
  }
}
