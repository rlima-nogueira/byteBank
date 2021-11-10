import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDescricaoComponent, ExtratoComponent } from '../extrato.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExtratoRountingModule } from '../routes/extrato.rounting.module';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ExtratoComponent,
    DialogDescricaoComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    ExtratoRountingModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
    ExtratoComponent,
    DialogDescricaoComponent
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}
    }
  ],


})
export class ExtratoModule { }
