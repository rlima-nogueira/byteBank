import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '../routes/login-routing.module';
import { LoginComponent } from '../login.component';
import { AutenticacaoService } from '../services/autenticacao.service';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
  providers: [
    AutenticacaoService
  ]
})
export class LoginModule { }
