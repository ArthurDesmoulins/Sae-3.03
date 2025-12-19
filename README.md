# SAÉ 3.Crea.03 | Concevoir des visualisations de données pour le web et un support animé

## 📖 Présentation du projet

Nous avions pour objectif de créer un site internet de datavisualisation sur la thématique du tourisme. Nous avons trouvé les données sur le site de [ademe.fr](https://www.ademe.fr) et nous nous sommes inspirés du site [qqf.fr](https://www.qqf.fr) pour réaliser les visuels et leur mise en page.

---

## 🛠️ Déroulé de la conception

### 1. **Définition du concept et du message**

- **Objectif principal** : A partir de jeux de données :

  - Analyser des données pour en extraire des indicateurs ou les informations pertinentes ;
  - Proposer un site web permettant la visualisation de ces données ;
  - Compléter ce site web par la production d'éléments de communication visuelle sur différents supports.

- **Cible** : Grand public
- **Approche** : Récit visuel et interactif suivi par un personnage ("petit bonhomme") qui voyage

### 2. **Architecture narrative**

Le site est structuré en plusieurs sections thématiques :

- **Départ** : Le rêve initial de voyager
- **Voyage** : Le début du voyage et les premiers impacts du transport
- **Logement** : Les impacts négatifs du logement touristique
- **Le site touristique** : Les impacts du sourtourisme sur l'environnement
- **Conclusion** : Réflexion finale sur le sujet

Chaque section utilise des visuels, des textes et des animations pour progresser dans le récit.

### 3. **Design visuel et identité graphique**

- **Palette de couleurs** : Utilisation de teintes chaudes (jaune, orange) pour créer une atmosphère accueillante
- **Éléments visuels** :
  - Taches colorées de fond (SVG)
  - Illustrations et icônes personnalisées
  - Typo épurée et lisible

### 4. **Réalisation des visuels**

- **Adobe Illustrator** : Logiciel d'illustration vectorielle
- **Adobe After Effects** : Logiciel d'animation

### 5. **Technologies utilisées**

#### Langages

- **HTML** : Langage de mise en page
- **CSS** : Langage de feuille de style
- **JavaScript** : Langage de contrôle des interactions

#### Frontend Framework

- **Vite** : Bundler moderne pour optimiser le développement et la production
- **Tailwind CSS** : Framework CSS utilitaire pour le styling responsive

#### Animations

- **GSAP (GreenSock)** : Librairie puissante pour les animations complexes
  - ScrollTrigger : Déclenchement des animations au scroll
- **Lottie Files** : Animations vectorielles légères et fluides
  - DotLottie Web : Intégration des animations Lottie (réalisées avec After Effects)

### 6. **Développement des animations**

Les animations jouent un rôle clé pour captiver l'utilisateur :

- **Animations au scroll** : Synchronisées avec la position de l'utilisateur
- **Animations Lottie** :
  - Pensée du personnage
  - Graphiques de données
  - Mouvements du globe terrestre
- **Chaînage des animations** : GSAP pour orchestrer les transitions fluides

### 7. **Structure du code**

```
├── index.html          # Page principale
├── src/
│   ├── script.js       # Logique JavaScript (animations, interactions)
│   └── style.css       # Styles (personnalisés + Tailwind)
├── public/
│   ├── Fonts/          # Polices d'écriture
│   └── Image/          # Images, SVG et icônes
└── vite.config.js      # Configuration Vite
```

### 8. **Processus itératif**

1. **Prototype** : Création de wireframes et maquettes
2. **Mise en place HTML** : Structure sémantique et accessible
3. **Styling** : Design avec Tailwind CSS
4. **Animations** : Intégration progressive des animations Lottie et GSAP
5. **Déploiement** : Build production avec Vite et déploiment sur Github pages

---

## ✏️ Projet Figma

[Projet Figma](https://www.figma.com/design/XGnlmXJAVPMuCvMgU7G30F/Sa%C3%A9-3.03?node-id=202-33&t=zaTkcOUTgokwQm40-1) avec la palette, l'univers graphique, le storyboard et la maquette.
