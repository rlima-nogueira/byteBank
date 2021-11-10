import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '../routes/login-routing.module';
import { LoginComponent } from '../login.component';
import { AutenticacaoService } from '../services/autenticacao.service';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent],
  providers: [
    AutenticacaoService
  ]
})
export class LoginModule { }
