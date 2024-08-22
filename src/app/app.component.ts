import { Component, signal, computed, inject } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //les propriétés/attributs
  readonly pokemonService = inject(PokemonService); // Injection du service PokemonService
  listPokemon = signal(this.pokemonService.getPokemonList()); // Permets de récupérer la liste des pokémons et de la stocker dans la variable listPokemon

  readonly searchTerm = signal('');
  ///méthode pour filtrer les pokémons ou on utilise la méthode filter() pour filtrer les pokémons en fonction du terme de recherche
  readonly pokemonListFiltered = computed(() => {
    return this.listPokemon().filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(this.searchTerm().trim().toLowerCase())
    );
  });  

  
  
  //les méthodes

  size(pokemon: Pokemon) {
    if (pokemon.life <= 15) {
      return 'Petit';
    }
    if (pokemon.life >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  }

  incrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life + 1;
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life - 1;
  }

}
