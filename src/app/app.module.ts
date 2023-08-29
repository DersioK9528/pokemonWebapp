import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonCharacterListComponent } from './pokemon-character-list/pokemon-character-list.component';
import { PokemonCharacterDetailsComponent } from './pokemon-character-details/pokemon-character-details.component';
import {PokemonCharacterComponent} from "./pokemon-character/pokemon-character.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PokemonDetailsModalComponent } from './pokemon-details-modal/pokemon-details-modal.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
    declarations: [
        AppComponent,
        PokemonCharacterListComponent,
        PokemonCharacterDetailsComponent,
        PokemonCharacterComponent,
        NavBarComponent,
        PokemonDetailsModalComponent
    ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {provide:MatDialogModule, useValue:{}},
    {provide:ActivatedRoute, useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
