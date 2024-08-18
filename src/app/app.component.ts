import { Component, signal, computed } from '@angular/core'
import { POKEMON_LIST } from './pokemon-list.fake';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //les propriétés/attributs
  listPokemon = signal(POKEMON_LIST);


}
