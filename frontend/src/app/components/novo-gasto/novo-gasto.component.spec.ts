import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoGastoComponent } from './novo-gasto.component';
import { NovoGastoModule } from './modules/novo-gasto.module';

describe('NovoGastoComponent', () => {
  let component: NovoGastoComponent;
  let fixture: ComponentFixture<NovoGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoGastoComponent ],
      imports: [ NovoGastoModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`#${NovoGastoComponent.prototype.cadastrar.name}
    should trigger (@Output aoCadastrar) when called`, () => {
      spyOn(component.aoCadastrar, 'emit');
      fixture.detectChanges();

      component.cadastrar();
      expect(component.aoCadastrar.emit).toHaveBeenCalled();
  });
});
