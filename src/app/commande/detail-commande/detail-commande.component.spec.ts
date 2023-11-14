import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandeComponent } from './detail-commande.component';

describe('DetailCommandeComponent', () => {
  let component: DetailCommandeComponent;
  let fixture: ComponentFixture<DetailCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCommandeComponent]
    });
    fixture = TestBed.createComponent(DetailCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
