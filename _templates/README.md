# Guide : ajouter du contenu au site

## 1. Publier un article de blog (conférence, intervention, histoire…)

1. Crée un dossier pour les photos : `assets/img/blog/2026-indaba/` et mets-y tes images
   (`cover.jpg`, `1.jpg`, `2.jpg`…). Idéalement en JPG, moins de 500 Ko chacune.
2. Copie `_templates/new-post.md` dans `_posts/` et renomme-le
   `AAAA-MM-JJ-titre-court.md` (la date au début est obligatoire).
3. Remplis l'en-tête (titre, date, description, catégorie, photos) et écris ton texte.
4. Commit + push : l'article apparaît sur `/blog/`.

Catégories disponibles (filtres du blog) : `conferences`, `talks`, `research`, `stories`.
Pour en ajouter une, modifie la ligne `category_labels` en haut de `_pages/blog.html`.

Tout est optionnel sauf `title`, `date` et le nom du fichier : sans `cover`,
la carte affiche une couleur avec une icône ; sans `gallery`, pas de section Photos.

Pour préparer un article sans le publier, mets-le dans `_drafts/` (sans date dans le nom).

## 2. Ajouter une ressource (livre, cours, article, outil…)

Ouvre `_data/resources.yml`, copie un bloc et remplis-le :

```yaml
    - title: Nom du livre
      author: Auteur
      url: https://...
      note_en: Why I like it.
      note_fr: Pourquoi je l'aime.
      image: /assets/img/resources/couverture.jpg   # optionnel
      tags: [computer vision]
      free: true                                    # optionnel
```

Pour une nouvelle section (ex. « Podcasts »), copie un bloc entier
`- id: ... title_en: ... title_fr: ... icon: ... items:`.

## 3. Le CV

Le bouton CV de la page d'accueil ouvre `assets/pdf/CV_Josue_Edou.pdf`.
Pour le mettre à jour, remplace simplement ce fichier (même nom).
