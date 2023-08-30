import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonCharacter} from "../models/pokemonCharacter";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonCharacterList: PokemonCharacter[] = [];
  pokemonListTemp: any = [];
  _pokemons:  any[] =[]

  constructor(public http: HttpClient) {
  }

  /**
   *
   */
  async getPokemonList(): Promise<PokemonCharacter[]> {
     const pageSize = 10;
     const totalPokemons = 100;
     for (let offset = 0; offset < totalPokemons; offset += pageSize) {
       const url = `http://localhost:8080/pokemon-api/pokemons?limit=${pageSize}&offset=${offset}`;
       try {
         const response = await fetch(url);
         const data = await response.json();
         const results = data.results;

         for (const [index, item] of results.entries()) {
           const id = offset + index + 1; // IDs start from 1
           const {name} = item;
           const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
           this.pokemonCharacterList.push(new PokemonCharacter(id, name, imageUrl));
         }
       } catch (error) {
         console.error('Error fetching pokemon data');
         return []
       }
     }
     return this.pokemonCharacterList;
   }

  /**
   *
   * @param pokemon
   */
  getPokemonType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }

  get(name: string): Observable<any> {
    const apiUrl = `http://localhost:8080/pokemon-api/pokemons/`;
    const url = `${apiUrl}${name}`;
    return this.http.get<any>(url);
  }
}
