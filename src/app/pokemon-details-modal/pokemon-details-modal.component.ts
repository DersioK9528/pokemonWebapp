import {ChangeDetectorRef, Component, Inject, Injectable, OnInit, Renderer2} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import {Subscription} from "rxjs";
import {MessengerService} from "../services/messenger.service";

@Component({
  selector: 'app-pokemon-details-modal',
  templateUrl: './pokemon-details-modal.component.html',
  styleUrls: ['./pokemon-details-modal.component.css']
})
@Injectable()
export class PokemonDetailsModalComponent implements OnInit {

  subscriptions: Subscription[] = [];
  pokemonStats:any;
  types:any[]=[]
  statistics:any[]=[]
  value:number=0;
  loading:boolean=true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PokemonDetailsModalComponent>,
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private messengerService: MessengerService,
    private changeDetectorRef:ChangeDetectorRef) {}

  /**
   * Close pokemon modal
   */
  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loading = true;
    this.messengerService.getMsg().subscribe((stats)=>{
      this.pokemonStats = stats;
      console.log("Modal Data-> " ,this.pokemonStats);
      this.statistics = this.pokemonStats.stats;
      this.types = this.pokemonStats.types
      this.loading = false;
      this.changeDetectorRef.detectChanges();
      console.log("Extracted Stats Array-> ", this.statistics);
    })
  }
  /**
   *
   * @param type
   */
  getBackgroundColor(type: string): string | null {
    const typeToColorMap: { [key: string]: string } = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      shadow: '#735797', // assuming shadow should have the same color as ghost
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
      unknown: '#aaa'
    };
    const bgColor = typeToColorMap[type.toLowerCase()];
    return bgColor || null;
  }

  /**
   *
   * @param type
   * @param percent
   */
 getLighterBackgroundColor(type: string, percent: number): string | null {
    const typeToColorMap: { [key: string]: string } = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      shadow: '#735797', // assuming shadow should have the same color as ghost
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
      unknown: '#aaa'
    };

    const bgColor = typeToColorMap[type.toLowerCase()];
    if (bgColor) {
      const rgb = parseInt(bgColor.slice(1), 16); // Convert hex to RGB integer
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >>  8) & 0xff;
      const b = (rgb >>  0) & 0xff;

      const newR = Math.min(255, Math.round(r + (255 - r) * (percent / 100)));
      const newG = Math.min(255, Math.round(g + (255 - g) * (percent / 100)));
      const newB = Math.min(255, Math.round(b + (255 - b) * (percent / 100)));

      const newColor = `#${(newR << 16 | newG << 8 | newB).toString(16).padStart(6, '0')}`;
      return newColor;
    }
    return null;
  }
}

