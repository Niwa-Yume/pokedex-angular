import { Component, signal, computed } from '@angular/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //les propriétés/attributs
  name = signal('Pikachu');
  life = signal(21);
  size = computed(() => {  //computed est une fonction qui permet de calculer une valeur en fonction d'autres valeurs

    //les conditions
    if (this.life() <= 15) {
      return 'Petit';
    }

    if (this.life() >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  });

  incrementLife() {
    this.life.update((n) => n + 1);
  }

  decrementLife() {
    this.life.update((n) => n - 1);
  }
}
