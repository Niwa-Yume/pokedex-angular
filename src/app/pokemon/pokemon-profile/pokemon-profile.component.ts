import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon.service';//C'est le service qui permet de récupérer les données des Pokémons

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styles: ``,
  standalone: true,
})
export class PokemonProfileComponent {
  readonly route = inject(ActivatedRoute);//ActivatedRoute est un service qui permet de récupérer les informations de la route active
  //ici on récupère l'identifiant du Pokémon à partir du paramètre de la route
  readonly pokemonService = inject(PokemonService);//ici on injecte le service PokemonService qui permet de récupérer les données des Pokémons
  readonly pokemonId = Number(this.route.snapshot.paramMap.get('id'));//Permet de récupérer l'identifiant du Pokémon à partir du paramètre de la route
  readonly pokemon = signal(this.pokemonService.getPokemonById(this.pokemonId)).asReadonly();//Permet de récupérer le Pokémon correspondant à l'identifiant
}