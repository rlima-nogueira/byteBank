import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  public token: string;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  public async logIn(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.angularFireAuth.signInWithPopup(provider).then((result: any) => {

      if (!result){
        return;
      }

      this.token =  result.credential.idToken;
      sessionStorage.setItem('token', this.token);

      sessionStorage.setItem('email', result.user.email);
      this.router.navigateByUrl('extrato');
    });
  }

  public async logOut(): Promise<void> {
    await this.angularFireAuth.signOut();

    sessionStorage.clear();
    this.token = '';
    this.router.navigateByUrl('login');
  }

  public usuarioLogado(): boolean {
    return this.token !== '' ? true : false;
  }
}
