import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoGastoComponent } from '../novo-gasto.component';

export const routes: Routes = [
  {
    path: '',
    component: NovoGastoComponent,
  }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class NovoGastoRountingModule { }
