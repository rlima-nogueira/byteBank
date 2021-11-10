import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoCartaoComponent } from '../novo-cartao.component';

const routes: Routes = [
  {
    path: '',
    component: NovoCartaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoCartaoRoutingModule { }
