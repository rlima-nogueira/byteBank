import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IGastos } from 'src/app/shared/interfaces/gastos';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NovoGastoService {
  private gasto: IGastos;
  private URL = environment.api;

  constructor(
    private httpClient: HttpClient,
  ) {  }

  public cadastrar(gasto: IGastos): Observable<IGastos> {
    this.popular(gasto);
    return this.httpClient.post<IGastos>(`${this.URL}/gastos`, gasto);
  }

  private popular(gasto: IGastos): void {
    gasto.data = new Date();
  }

  public carregarGastoPorUsuario(): Observable<Array<IGastos>> {
    const emailSessionStorage = sessionStorage.getItem('email');
    return this.httpClient.get<Array<IGastos>>(`${this.URL}/gastos`).pipe(
      map((gastos) =>
        gastos = gastos.filter((email) => {
          return email.email === emailSessionStorage;
        }),
      ),
    );
  }

  public carregarGastoPorUsuarioEspecifico(id: number): Observable<Array<IGastos>> {

    return this.httpClient.get<Array<IGastos>>(`${this.URL}/gastos/${id}`);
  }

  public carregarTodosGastos(): Observable<Array<IGastos>> {
    return this.httpClient.get<Array<IGastos>>(`${this.URL}/gastos` );
  }

  public atualizar(gasto: IGastos): Observable<Array<IGastos>> {
    return this.httpClient.put<Array<IGastos>>(`${this.URL}/gastos/${gasto.id}`, gasto);
  }


  public excluirGasto(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.URL}/gastos/${id}`);
  }


}
