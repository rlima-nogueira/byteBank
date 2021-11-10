import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { AutenticacaoService } from './components/login/services/autenticacao.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public icones = {
    faBars,
    faSignOutAlt
  };

  constructor(
    private auteticacao: AutenticacaoService,
    public location: Location
  ) {}


  public sairSistema(): void {
    this.auteticacao.logOut();
  }

}
