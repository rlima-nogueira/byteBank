import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './components/login/routes/login.guard';
import { AuthGuard } from './shared/routes/auth.guard';



export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'extrato',
    canLoad: [AuthGuard],
    loadChildren: () => import('./components/extrato/modules/extrato.module').then((m) =>  m.ExtratoModule),
  },
  {
    path: 'novo-gasto',
    canLoad: [AuthGuard],
    loadChildren: () => import('./components/novo-gasto/modules/novo-gasto.module').then((m) =>  m.NovoGastoModule),
  },
  {
    path: 'editar-gasto',
    canLoad: [AuthGuard],
    loadChildren: () => import('./components/novo-gasto/modules/novo-gasto.module').then((m) =>  m.NovoGastoModule),
  },
  {
    path: 'login',
    canLoad: [LoginGuard],
    loadChildren: () => import('./components/login/modules/login.module').then((m) =>  m.LoginModule),
  },
  {
    path: 'novo-cartao',
    canLoad: [AuthGuard],
    loadChildren: () => import('./components/novo-cartao/modules/novo-cartao.module').then((m) =>  m.NovoCartaoModule),
  },
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRountingModule { }
