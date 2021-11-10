import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoCartaoService } from './services/novo-cartao.service';

@Component({
  selector: 'app-novo-cartao',
  templateUrl: './novo-cartao.component.html',
  styleUrls: ['./novo-cartao.component.scss']
})
export class NovoCartaoComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: NovoCartaoService
  ) { }

  public ngOnInit(): void {
    this.iniciarFormulario();
  }

  private iniciarFormulario(): void {
    this.form = this.formBuilder.group({
      numeroCartao: ['', Validators.required],
      nomeCartao: ['', Validators.required],
    });
  }

  public cadastrar(): void {
    if (this.form.invalid) {
      return;
    }
    this.service.cadastrar(this.form.value).subscribe(() => {
      this.router.navigateByUrl('extrato');
    }, (e) => {
      console.log(e);
    });
  }

}
