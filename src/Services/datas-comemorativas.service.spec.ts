import { TestBed } from '@angular/core/testing';

import { DatasComemorativasService } from './datas-comemorativas.service';

describe('DatasComemorativasService', () => {
  let service: DatasComemorativasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasComemorativasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
