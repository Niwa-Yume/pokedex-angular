# Pokédex Angular

## 📖 À propos
Ce projet est un Pokédex interactif développé avec Angular, offrant une interface utilisateur moderne pour explorer le monde des Pokémon. Déployé sur Vercel, il combine performance et accessibilité pour une expérience utilisateur optimale.

## 🚀 Fonctionnalités
- Liste complète des Pokémon avec pagination
- Recherche de Pokémon par nom ou numéro
- Affichage détaillé des caractéristiques de chaque Pokémon
- Interface responsive pour une utilisation sur tous les appareils
- Thème clair/sombre pour un confort visuel optimal

## 🛠️ Technologies utilisées
- Angular 18.1.0
- TypeScript
- RxJS
- Angular Material (UI Components)
- PokéAPI (pour les données Pokémon)
- Vercel (Déploiement)

## 🏁 Démarrage rapide

### Prérequis
- Node.js (version 14.x ou supérieure)
- npm (normalement installé avec Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-username/pokedex-angular.git
   cd pokedex-angular
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   ng serve
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:4200`.

## 🧑‍💻 Commandes utiles

- `ng serve` : Lance le serveur de développement
- `ng build` : Compile le projet pour la production
- `ng test` : Exécute les tests unitaires
- `ng lint` : Vérifie la qualité du code
- `ng generate component nom-component` : Génère un nouveau composant

## 📊 Structure du projet
```
src/
|-- app/
|   |-- components/
|   |-- services/
|   |-- models/
|   |-- pages/
|   |-- app.module.ts
|   |-- app-routing.module.ts
|-- assets/
|-- environments/
|-- index.html
|-- main.ts
|-- styles.scss
```

## 🌐 Déploiement
Ce projet est configuré pour un déploiement automatique sur Vercel. Chaque push sur la branche `main` déclenche un nouveau déploiement.

Pour déployer manuellement :
1. Installez Vercel CLI : `npm i -g vercel`
2. Lancez `vercel` à la racine du projet et suivez les instructions

## 🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou proposer une pull request.

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements
- [PokéAPI](https://pokeapi.co/) pour la fourniture des données Pokémon
- La communauté Angular pour son support continu

---

Développé avec ❤️ par Julien Castro