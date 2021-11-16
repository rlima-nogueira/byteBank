import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from './services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.email]),
  });





  constructor(
    private autenticacao: AutenticacaoService
  ) { }

  public ngOnInit(): void {
  }

  public fazerLogin(): void {
    this.autenticacao.logIn();
  }

  public getErrorMessageEmail(): string {
    if (this.login.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.login.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  public getErrorMessagePassword(): string {
    if (this.login.get('password').hasError('required')) {
      return 'You must enter a value';
    }

    return this.login.get('password').hasError('password') ? 'Password is incorrect, pleate try again' : '';
  }
}
