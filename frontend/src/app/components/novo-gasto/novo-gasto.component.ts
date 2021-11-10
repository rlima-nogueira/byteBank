import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGastos } from 'src/app/shared/interfaces/gastos';

import { NovoGastoService } from './services/novo-gasto.service';

import firebase from 'firebase/app';
import { NovoCartaoService } from '../novo-cartao/services/novo-cartao.service';
import { ICartao } from 'src/app/shared/interfaces/cartao';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-novo-gasto',
  templateUrl: './novo-gasto.component.html',
  styleUrls: ['./novo-gasto.component.scss']
})
export class NovoGastoComponent implements OnInit, AfterViewInit {
  @Output() public aoCadastrar = new EventEmitter<IGastos>();
  public form: FormGroup;
  public mensagemAlerta: string;
  public cartoes$: Observable<ICartao> = this.novoCartaoService.buscarTodosCartoes();
  public dadosGasto;

  @ViewChild('cadastrarNovoGasto', {static: false}) public cadastrarNovoGasto: TemplateRef<any>;
  @ViewChild('editarGasto', {static: false}) public editarGasto: TemplateRef<any>;
  public selecionarTemplate: TemplateRef<any>;



  constructor(
    private formBuilder: FormBuilder,
    private novoGastoService: NovoGastoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private novoCartaoService: NovoCartaoService,
    private cd: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this.carregarDadosParaEditarGasto();
    this.iniciarFormularioCadastro();
  }

  private carregarDadosParaEditarGasto(): void {
    this.activatedRoute.fragment.subscribe((dadosGasto) => {
      this.dadosGasto = dadosGasto;
    });
  }

  public ngAfterViewInit(): void {
    if (this.dadosGasto) {
      this.form.addControl('pago', new FormControl(this.dadosGasto.pago, Validators.required));
      this.form.patchValue(this.dadosGasto);
      this.selecionarTemplate = this.editarGasto;
      this.cd.detectChanges();
      return;
    }
    this.selecionarTemplate = this.cadastrarNovoGasto;
    this.cd.detectChanges();
  }

  private iniciarFormularioCadastro(): void {
    this.form = this.formBuilder.group({
      valor: ['', Validators.required],
      descricao: ['', Validators.required],
      dataGasto: [''],
      cartao: ['']
    });
  }

  public editar(): void {
    const gastos = {...this.form.value, email: this.dadosGasto.email, id: this.dadosGasto.id, data: this.dadosGasto.data};
    if (this.form.invalid) {
      return;
    }

    this.novoGastoService.atualizar(gastos).subscribe(() => {
      this.aoCadastrar.emit(gastos);
      this.router.navigateByUrl('extrato');
    }, (e) => {
      console.log(e);
    });
  }

  public verificarCheckbox(event: MatCheckboxChange): void {
    this.form.patchValue({
      pago: event.checked
    });
  }

  public cadastrar(): void {
    const gastos = {...this.form.value, pago: false, email: sessionStorage.getItem('email')};

    if (this.form.invalid) {
      return;
    }

    this.novoGastoService.cadastrar(gastos).subscribe(() => {
      this.aoCadastrar.emit(gastos);
      this.form.reset();
      this.router.navigateByUrl('extrato');
    }, (e) => {
      console.log(e);
    });
  }

}
