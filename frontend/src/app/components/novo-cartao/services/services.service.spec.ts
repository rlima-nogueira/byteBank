import { TestBed } from '@angular/core/testing';
import { NovoCartaoService } from './novo-cartao.service';



describe('ServicesService', () => {
  let service: NovoCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
