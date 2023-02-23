## A DEVELOPPER EN REACT ET SVELTE

<!-- Une liste avec 10 ITEMS -->
<!-- Sites e-commerce avec prix et description -->
<!-- Ajouter la quantité (counter) + ajouter au panier -->
<!-- En haut a droite un panier avec le nombre d'élèments dans votre panier -->
<!-- Quand tu cliques dessus tu as le total et le nombre d'article total -->
<!-- Payer et une alerte pour indiquer que c'est réglé (Mode fullscreen comme sur l'exercice svelte) -->

# Afficher les données dans une liste

# Chaque jeu est représenté par une instance d'un composant Item,

Faire une application Svelte et React pour le 31 mars au plus tard, coef 3 chacune

Sujet: Site e-commerce de jeux vidéo
Étant donné un JSON de data de jeux (fourni juste au dessus)

### Liste

- afficher les données dans une liste
- chaque jeu est représenté par une instance d'un composant Item, à créer
- Item doit afficher les données du jeu, a minima le nom et le prix, en plus d'afficher un compteur Quantity permettant de choisir la quantité désirée, et d'un bouton permettant d'ajouter le nombre d'exemplaires du jeu dans le panier
- un bouton de panier Basket doit être affiché sur la page, avec le prix total du panier

### Panier

- on doit pouvoir fermer l'affichage du panier et revenir à la liste
- le détail du panier s'affiche lorsqu'on clique sur le bouton de panier
- le détail du panier est un composant BasketList
- le composant BasketList doit afficher les éléments du panier, et leur nombre, dans un Item
- le panier doit permettre de modifier le nb d'exemplaires pour chaque jeu (avec Quantity, ainsi que de supprimer complètement le jeu du panier
- un bouton de validation du panier doit être présent, et simuler le paiement en affichant simplement un message dans la console. Lorsque le panier est validé, il doit également être vidé

### Général

- aucun routeur n'est demandé
- le Item peut être le même dans la liste et dans le panier
- vous pouvez ajouter des fonctionnalités si ça vous chante, l'important étant d'avoir a minima ce qui est demandé
- pas de librairie externe (notamment pas de Redux ou affilié)

N'hésitez pas à me demander si besoin, je vous aiderai dans la mesure du possible
