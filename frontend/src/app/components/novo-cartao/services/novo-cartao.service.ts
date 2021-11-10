import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICartao } from 'src/app/shared/interfaces/cartao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovoCartaoService {
  private URL = environment.api;
  constructor(
    private httpClient: HttpClient
  ) { }

  public buscarTodosCartoes(): Observable<ICartao> {
    return this.httpClient.get<ICartao>(`${this.URL}/cartao`);
  }

  public cadastrar(cartao: ICartao): Observable<ICartao> {
    return this.httpClient.post<ICartao>(`${this.URL}/cartao`, cartao);
  }

}
