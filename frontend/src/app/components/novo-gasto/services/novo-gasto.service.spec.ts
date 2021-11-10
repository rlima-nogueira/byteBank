import { TestBed } from '@angular/core/testing';

import { NovoGastoService } from './novo-gasto.service';

describe('NovoGastoService', () => {
  let service: NovoGastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoGastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
