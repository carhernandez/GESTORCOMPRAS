import { TestBed } from '@angular/core/testing';

import { RegistroProductosService } from './registro-productos.service';

describe('RegistroProductosService', () => {
  let service: RegistroProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
