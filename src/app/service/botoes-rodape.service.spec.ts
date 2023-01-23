import { TestBed } from '@angular/core/testing';

import { BotoesRodapeService } from './botoes-rodape.service';

describe('BotoesRodapeService', () => {
  let service: BotoesRodapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotoesRodapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
