import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IGastos } from '../../shared/interfaces/gastos';
import { NovoGastoService } from '../novo-gasto/services/novo-gasto.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit{
  public displayedColumns: string[] = ['data', 'dataGasto', 'valor', 'descricao', 'pago', 'acoes'];
  public dataSource;
  public icones = {
    faEdit,
    faTrash
  };

  public gastos: Array<IGastos> = [];
  public totalGastos: number;
  public totalGastosPago: number;

  public formGastos: FormGroup = new FormGroup({
    pago: new FormArray([]),
  });

  public currentDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private novoGastoService: NovoGastoService,
    public dialog: MatDialog,
    private router: Router,
  ) { }


  public ngOnInit(): void {
    this.iniciarFormulario();
    this.buscarGastosPorUsuario();
  }

  public abrirDialogDescricao(valorCampo, descricao): void {
    if (descricao.length < 26 ) {
      return;
    }
    this.dialog.open(DialogDescricaoComponent , {
      data: {
        valorCampo,
        descricao,
      },
      width: '400px',
      height: '300px'
    });
  }

  public editarGasto(campos): void {
    this.router.navigate(['editar-gasto'], {fragment: campos});

    console.log(campos);
  }

  public excluirGasto(valorCampo, id): void {
    const dialogRef = this.dialog.open(DialogDescricaoComponent , {
      data: {
        valorCampo,
        id,
      },
      width: '400px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe((id: number) => {
      if (!id) {
        return;
      }
      this.novoGastoService.excluirGasto(id).subscribe(() => {
          this.buscarGastosPorUsuario();
      });
    });
  }

  public habilitarTooltip(descricao): string {
    return descricao.length > 26 ? 'Ver descrição completa' : '';
  }

  private iniciarFormulario(): void {
    this.formGastos = this.formBuilder.group({
      pago: new FormControl(''),
    });
  }

  private buscarGastosPorUsuario(): void {
    const valoresDosGastosPagos: Array<number> = [];
    const valoresDosGastos: Array<number> = [];


    this.novoGastoService.carregarGastoPorUsuario().subscribe((gastos) => {
      this.gastos = gastos;
      this.dataSource = this.gastos;
      gastos.forEach((valores) => {
        if (valores.pago) {
          valoresDosGastosPagos.push(valores.valor);
        }
        valoresDosGastos.push(valores.valor);
      });
      this.totalGastosPago = valoresDosGastosPagos.reduce((total, numero) => total + numero, 0);

      this.totalGastos = valoresDosGastos.reduce((total, numero) => total + numero, 0);

     });

  }

  public pagarGasto(gasto: IGastos, event: MatCheckboxChange): void {
    const objetoGasto: IGastos = {
      id: gasto.id,
      valor: gasto.valor,
      descricao: gasto.descricao,
      data: gasto.data,
      pago: event.checked,
      email: gasto.email,
      dataGasto: gasto.dataGasto,
    };

    this.novoGastoService.atualizar(objetoGasto).subscribe(() => {
      this.buscarGastosPorUsuario();
    });
  }


}


@Component({
  selector: 'app-dialog-descricao',
  templateUrl: './dialog-descricao.component.html',
})
export class DialogDescricaoComponent  {
  public dadosGasto: Array<IGastos>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    novoGastoService: NovoGastoService,
    public dialogRef: MatDialogRef<DialogDescricaoComponent>,
  ) {
    switch (data.valorCampo) {
      case 'editarGasto':
        novoGastoService.carregarGastoPorUsuarioEspecifico(data.campos.id).subscribe((dadosGasto) => {
          this.dadosGasto = dadosGasto;
        });
        break;
    }
  }
}
