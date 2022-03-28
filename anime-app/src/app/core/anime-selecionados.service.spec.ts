import { TestBed } from '@angular/core/testing';

import { AnimeSelecionadosService } from './anime-selecionados.service';

describe('AnimeSelecionadosService', () => {
  let service: AnimeSelecionadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeSelecionadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
