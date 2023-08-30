import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCharacterComponent } from './pokemon-character.component';

describe('PokemonCharacterComponent', () => {
  let component: PokemonCharacterComponent;
  let fixture: ComponentFixture<PokemonCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCharacterComponent]
    });
    fixture = TestBed.createComponent(PokemonCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
