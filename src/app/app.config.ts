import { provideRouter, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonProfileComponent } from './pokemon/pokemon-profile/pokemon-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApplicationConfig } from '@angular/core';

const routes: Routes = [
  //CHEMIN POUR METTRE EN PLACE LES ROUTES POUR LES NOMS DE PAGE ET LES COMPOSANTS ASSOCIÉS
  { 
    path: 'pokemons', 
    component: PokemonListComponent,
    title: 'Pokédex' 
  },
  { 
    path: 'pokemons/:id', 
    component: PokemonProfileComponent, 
    title: 'Pokémon',
  },
  //CHEMIN POUR LES LIENS DE NAVIGATION
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Page introuvable' },
];

export const appConfig: ApplicationConfig = { // Permet de configurer l'application Angular et appconfig: ApplicationConfig est un objet qui contient la configuration de l'application
  providers: [provideRouter(routes)],// Permet de fournir les routes à l'application
};