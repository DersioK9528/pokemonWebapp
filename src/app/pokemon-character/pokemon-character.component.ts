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

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
               private msg:MessengerService, private dialog:MatDialog, private pokemonService:PokemonService){}


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

  sendId()
  {
    this.msg.sendMsg(this.pokemonCharacter.name)
  }

  getPokemonType(pokemon: any): string {
    return this.pokemonService.getPokemonType(pokemon)
  }

  getPokemonStats(pokemonName:any):any{
    if (pokemonName) {
      this.loading = true;
      this.pokemonService.get(pokemonName).subscribe(
        (data) => {
          this.pokemonStats = data;
          this.loading = false;
          this.msg.sendMsg(this.pokemonStats)
        },
        (error) => {
          this.loading = false;
        }
      );
    }
    return this.pokemonStats;
  }
}
