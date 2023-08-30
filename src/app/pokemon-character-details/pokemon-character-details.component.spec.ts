import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCharacterDetailsComponent } from './pokemon-character-details.component';

describe('PokemonCharacterDetailsComponent', () => {
  let component: PokemonCharacterDetailsComponent;
  let fixture: ComponentFixture<PokemonCharacterDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCharacterDetailsComponent]
    });
    fixture = TestBed.createComponent(PokemonCharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
