import { TestBed } from '@angular/core/testing';

import { CommandeProduitService } from './commande-produit.service';

describe('CommandeProduitService', () => {
  let service: CommandeProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
