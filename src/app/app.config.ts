// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'pokemons/:id', component: PokemonProfileComponent }, // Permet de naviguer vers le profil d'un Pokémon en fonction de son identifiant
  { path: 'pokemons', component: PokemonListComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

export const appConfig: ApplicationConfig = { // Permet de configurer l'application Angular et appconfig: ApplicationConfig est un objet qui contient la configuration de l'application
  providers: [provideRouter(routes)],// Permet de fournir les routes à l'application
};