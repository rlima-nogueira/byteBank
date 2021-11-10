import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NovoGastoComponent } from '../novo-gasto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoGastoRountingModule } from '../routes/novo-gasto.rounting.module';
import { AlertasModule } from 'src/app/shared/alertas/alertas.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { NovoGastoService } from '../services/novo-gasto.service';
import { MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
  declarations: [NovoGastoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NovoGastoRountingModule,
    AlertasModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  exports: [
    NovoGastoComponent
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    NovoGastoService
  ],
})
export class NovoGastoModule { }
