import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokemonCharacter } from "../models/pokemonCharacter";
import { PokemonService } from "../services/pokemon.service";

@Component({
  selector: 'app-pokemon-character-list',
  templateUrl: './pokemon-character-list.component.html',
  styleUrls: ['./pokemon-character-list.component.css']
})
export class PokemonCharacterListComponent implements OnInit {

  pokemonCharacterList: any = [];
  pagedPokemonList: PokemonCharacter[] = [];
  pageSize = 12; // Number of items per page
  currentPage = 0;
  loading: boolean = true;
  pokemonCharacters: PokemonCharacter[] = [];
  filteredPokemonCharacters: PokemonCharacter[] = [];
  searchTerm: string = '';

  constructor(public pokemonService: PokemonService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Initialize component by loading Pokemon data
    this.loading = true;
    this.changeDetectorRef.detectChanges();
    console.log("is loading", this.loading);

    this.pokemonService.getPokemonList().then(pokemonCharacters => {
      // Load and filter the Pokemon data
      this.pokemonCharacterList = pokemonCharacters;
      this.updatePagedPokemonList();
      this.pokemonCharacters = pokemonCharacters;
      this.filteredPokemonCharacters = pokemonCharacters;
      this.loading = false;
      this.changeDetectorRef.detectChanges();
    }).catch(error => {
      // Handle loading error
      this.loading = true;
      this.changeDetectorRef.detectChanges();
      console.error('Error:', error);
    });
  }

  /**
   * Filter the list of Pokémon characters based on the search term.
   * Reset the paged list to show the full paginated list when the search term is empty.
   */
  filterPokemonCharacters(): void {
    if (this.searchTerm.trim() === '') {
      this.updatePagedPokemonList();
    } else {
      this.pagedPokemonList = this.pokemonCharacters.filter((character) =>
        character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  /**
   * Handle page change event from the paginator.
   * @param event The page change event
   */
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.updatePagedPokemonList();
  }

  /**
   * Update the paged list of Pokémon characters based on the current page.
   */
  private updatePagedPokemonList(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedPokemonList = this.pokemonCharacterList.slice(startIndex, startIndex + this.pageSize);
  }
}
