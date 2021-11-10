import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private autenticacao: AutenticacaoService
  ) { }

  public ngOnInit(): void {
  }

  public fazerLogin(): void {
    this.autenticacao.logIn();
  }

}
