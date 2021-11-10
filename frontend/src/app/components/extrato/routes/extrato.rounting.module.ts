import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { ExtratoComponent } from '../extrato.component';

export const routes: Routes = [
  {
    path: '',
    component: ExtratoComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      }
    ]
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ExtratoRountingModule { }
