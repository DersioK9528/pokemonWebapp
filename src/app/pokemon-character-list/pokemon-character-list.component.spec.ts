import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCharacterListComponent } from './pokemon-character-list.component';

describe('PokemonCharacterListComponent', () => {
  let component: PokemonCharacterListComponent;
  let fixture: ComponentFixture<PokemonCharacterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCharacterListComponent]
    });
    fixture = TestBed.createComponent(PokemonCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
