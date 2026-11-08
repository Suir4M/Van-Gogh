/* =========================================================
   Textes du site, en français et en anglais
   =========================================================

   - Une langue = un bloc. Pour en ajouter une : copie le bloc "en",
     traduis les valeurs, puis ajoute un bouton dans l'en-tête des pages
     (<button data-lang="xx">XX</button>).
   - Les clés sont les mêmes dans toutes les langues. Elles sont utilisées
     par les attributs data-i18n et data-i18n-attr du HTML.
   - Le texte français écrit dans le HTML est le contenu de secours
     (sans JavaScript) : garde-le identique au bloc "fr".
   ========================================================= */

const TRANSLATIONS = {
  fr: {
    "meta.title": "Vincent van Gogh · Une constellation",
    "meta.description": "Explorez l'univers de Vincent van Gogh, une étoile à la fois.",
    "brandName": "Vincent van Gogh",
    "navLabel": "Une expérience immersive",
    "language": "Langue",
    "skip": "Aller à la constellation",
    "eyebrow": "1853 — 1890 · Une vie en couleurs",
    "intro": "Entrez dans le ciel intérieur d’un artiste qui cherchait la lumière jusque dans la nuit.",
    "explore": "Choisissez une étoile pour commencer",
    "footer": "Une vie, neuf portes",
    "paintingAlt": "La Nuit étoilée de Vincent van Gogh",
    "constellationLabel": "Choisir une œuvre",
    "back": "Retour à la constellation",
    "placeholder.eyebrow": "Constellation · Œuvre",
    "placeholder.text": "Cette page accueillera bientôt la présentation de l’œuvre.",

    "stars.potatoEaters": "Les Mangeurs de pommes de terre",
    "stars.selfPortrait": "Autoportrait au chapeau de feutre gris",
    "stars.sunflowers": "Les Tournesols",
    "stars.bedroom": "La Chambre à coucher",
    "stars.redVigne": "La Vigne rouge",
    "stars.irises": "Les Iris",
    "stars.cafeTerrace": "Terrasse du café le soir",
    "stars.almondBlossom": "Branche d’amandier en fleurs",
    "stars.wheatfield": "Champ de blé aux corbeaux",

    "starA11y.potatoEaters": "Découvrir l’œuvre Les Mangeurs de pommes de terre de Vincent van Gogh",
    "starA11y.selfPortrait": "Découvrir l’œuvre Autoportrait au chapeau de feutre gris de Vincent van Gogh",
    "starA11y.sunflowers": "Découvrir l’œuvre Les Tournesols de Vincent van Gogh",
    "starA11y.bedroom": "Découvrir l’œuvre La Chambre à coucher de Vincent van Gogh",
    "starA11y.redVigne": "Découvrir l’œuvre La Vigne rouge de Vincent van Gogh",
    "starA11y.irises": "Découvrir l’œuvre Les Iris de Vincent van Gogh",
    "starA11y.cafeTerrace": "Découvrir l’œuvre Terrasse du café le soir de Vincent van Gogh",
    "starA11y.almondBlossom": "Découvrir l’œuvre Branche d’amandier en fleurs de Vincent van Gogh",
    "starA11y.wheatfield": "Découvrir l’œuvre Champ de blé aux corbeaux de Vincent van Gogh"
  },

  en: {
    "meta.title": "Vincent van Gogh · A constellation",
    "meta.description": "Explore Vincent van Gogh’s world, one star at a time.",
    "brandName": "Vincent van Gogh",
    "navLabel": "An immersive experience",
    "language": "Language",
    "skip": "Skip to the constellation",
    "eyebrow": "1853 — 1890 · A life in colour",
    "intro": "Step into the inner sky of an artist who searched for light, even in the night.",
    "explore": "Choose a star to begin",
    "footer": "One life, nine doors",
    "paintingAlt": "The Starry Night by Vincent van Gogh",
    "constellationLabel": "Choose an artwork",
    "back": "Return to the constellation",
    "placeholder.eyebrow": "Constellation · Artwork",
    "placeholder.text": "This page will soon present the artwork.",

    "stars.potatoEaters": "The Potato Eaters",
    "stars.selfPortrait": "Self-Portrait with Grey Felt Hat",
    "stars.sunflowers": "Sunflowers",
    "stars.bedroom": "The Bedroom",
    "stars.redVigne": "The Red Vineyard",
    "stars.irises": "Irises",
    "stars.cafeTerrace": "Café Terrace at Night",
    "stars.almondBlossom": "Almond Blossom",
    "stars.wheatfield": "Wheatfield with Crows",

    "starA11y.potatoEaters": "Discover Vincent van Gogh’s artwork The Potato Eaters",
    "starA11y.selfPortrait": "Discover Vincent van Gogh’s artwork Self-Portrait with Grey Felt Hat",
    "starA11y.sunflowers": "Discover Vincent van Gogh’s artwork Sunflowers",
    "starA11y.bedroom": "Discover Vincent van Gogh’s artwork The Bedroom",
    "starA11y.redVigne": "Discover Vincent van Gogh’s artwork The Red Vineyard",
    "starA11y.irises": "Discover Vincent van Gogh’s artwork Irises",
    "starA11y.cafeTerrace": "Discover Vincent van Gogh’s artwork Café Terrace at Night",
    "starA11y.almondBlossom": "Discover Vincent van Gogh’s artwork Almond Blossom",
    "starA11y.wheatfield": "Discover Vincent van Gogh’s artwork Wheatfield with Crows"
  }
};
