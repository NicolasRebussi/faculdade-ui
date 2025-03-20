/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FaculdadeService } from './faculdade.service';

describe('Service: Faculdade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaculdadeService]
    });
  });

  it('should ...', inject([FaculdadeService], (service: FaculdadeService) => {
    expect(service).toBeTruthy();
  }));
});
