import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsModalComponent } from './pokemon-details-modal.component';

describe('PokemonDetailsModalComponent', () => {
  let component: PokemonDetailsModalComponent;
  let fixture: ComponentFixture<PokemonDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsModalComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
