import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoCartaoRoutingModule } from '../routes/novo-cartao-routing.module';
import { NovoCartaoComponent } from '../novo-cartao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { NovoCartaoService } from '../services/novo-cartao.service';


@NgModule({
  declarations: [
    NovoCartaoComponent
  ],
  imports: [
    CommonModule,
    NovoCartaoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  exports: [
    NovoCartaoComponent
  ],
  providers: [
    NovoCartaoService
  ]
})
export class NovoCartaoModule { }
