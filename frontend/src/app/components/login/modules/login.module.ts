import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '../routes/login-routing.module';
import { LoginComponent } from '../login.component';
import { AutenticacaoService } from '../services/autenticacao.service';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [LoginComponent],
  providers: [
    AutenticacaoService
  ]
})
export class LoginModule { }
