import {Component, Inject, Input, OnInit} from '@angular/core';
import {PokemonCharacter} from "../models/pokemonCharacter";
import {MessengerService} from "../services/messenger.service";
import {PokemonDetailsModalComponent} from "../pokemon-details-modal/pokemon-details-modal.component";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-pokemon-character',
  templateUrl: './pokemon-character.component.html',
  styleUrls: ['./pokemon-character.component.css']
})

export class PokemonCharacterComponent implements OnInit
{
  pokemonStats:any;
  loading = false;

  @Input() pokemonCharacter:PokemonCharacter | any

  /**
   *
   * @param data
   * @param msg
   * @param dialog
   * @param pokemonService
   */
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
               private msg:MessengerService, private dialog:MatDialog, private pokemonService:PokemonService){}

  /**
   * Method to open the pokemon modal
   * @param pokemonName
   */
  openDetailsDialog(pokemonName:any): void {
    this.dialog.open(PokemonDetailsModalComponent, {
      width: '900px',
      data: this.pokemonCharacter
    });
    this.getPokemonStats(pokemonName)
  }

  ngOnInit(): void
  {
  }

  /**
   * Method to retrieve the pokemon stats array from the Pokemon service
   * @param pokemonName
   */
  getPokemonStats(pokemonName:any):any{
    if (pokemonName) {
      this.loading = true;
      //Retrieve data from the pokemon service
      this.pokemonService.get(pokemonName).subscribe(
        (data) => {
          this.pokemonStats = data;
          this.loading = false;
          this.msg.sendMsg(this.pokemonStats)
        },
        //Log error if pokemon data is unretrieveable
        (error) => {
          error.error("Failed to load pokemon data");
          this.loading = false;
        }
      );
    }
    return this.pokemonStats;
  }
}
