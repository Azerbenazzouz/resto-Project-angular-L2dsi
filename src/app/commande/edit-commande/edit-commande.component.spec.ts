import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommandeComponent } from './edit-commande.component';

describe('EditCommandeComponent', () => {
  let component: EditCommandeComponent;
  let fixture: ComponentFixture<EditCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCommandeComponent]
    });
    fixture = TestBed.createComponent(EditCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
