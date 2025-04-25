#### Resolution de problème:

### Problème #1: Navigation incorrecte
**Symptôme**: le lien fonctionne, et que cela ne reload pas completement la page
**Impact**: L'expérience utilisateur est dégradée, l'application perd son état.
**Indice**: 
**Solution**: Utiliser le routerlink pour permettre  la navigation sans reload la page
 
### Problème #2: Besoin de formatage de texte
**Symptôme**: Problème d'affichage du titre
**Impact**: L'affichage n'est pas esthétique, les underscores sont visibles.
**Indice**: Vous devez créer un pipe personnalisé pour formater le texte.
**Solution**: ng g pipe  créer un custom pipe pour effectuer le traitement suivant: passe la lettre du premier mot en majuscule, changer le _ en " ", et mettre en lowercase puis l importer dasn app.component.ts

## Problème #3:Navigation incorrecte
**Symptôme**: le lien fonctionne, et que cela ne reload pas completement la page
**Impact**: probleme de reload
**Indice**: 
**Solution**: pareil que le todo 1 utiliser routerlink

### Problème #4: Pages non affichées
**Symptôme**: Certaines pages ne s'affichent pas correctement.
**Impact**: Les utilisateurs ne peuvent pas accéder à certaines fonctionnalités.
**Indice**: Vérifiez la configuration des routes et la structure des composants.
**Solution**:  mettre le router-oulet a la bonne place 

### Problème #5: Route manquante
**Symptôme**: La page de détail d'un livre n'est pas accessible.
**Impact**: Les utilisateurs ne peuvent pas voir les détails d'un livre.
**Indice**: Vous devez créer une route dans le fi
{ path: 'book/:id', component: BookDetailComponent },

### Problème #6: Formulaire incomplet
**Symptôme**: Le formulaire d'ajout de livre n'est pas implémenté.
**Impact**: Les utilisateurs ne peuvent pas ajouter de nouveaux livres.
**Indice**: Vous devez créer un formulaire avec les champs nécessaires.
**Solution**: creation d un forumlaire avec un formbuilder instantiation et ajout des validators 

### Problème #7: Validations manquantes
**Symptôme**: Le formulaire accepte des données invalides.
**Impact**: Des données incomplètes ou incorrectes peuvent être soumises.
**Indice**: Ajoutez des validations aux champs du formulaire.
**Solution**: mise en place d'élément required

### Problème #8: Navigation manquante
**Symptôme**: Impossible de revenir à la page précédente depuis certaines vues.
**Impact**: L'utilisateur se retrouve bloqué dans certaines pages.
**Indice**: Ajoutez un bouton de retour et implémentez la navigation.
**Solution**: utilisation d un router navigate avec une endoint '/books'

### Problème #9: Erreur dans la console
**Symptôme**: Erreur "Cannot read properties of undefined" dans la console.
**Impact**: L'application peut planter lorsque les données ne sont pas chargées.
**Indice**: Gérez correctement les données asynchrones avant d'y accéder.

### Problème #10: Directive non appliquée
**Symptôme**: Certains éléments ne sont pas mis en évidence comme prévu.
**Impact**: L'expérience utilisateur est dégradée, manque d'indications visuelles.
**Indice**: Appliquez la directive highlight aux éléments appropr
**Solution**:

### Problème #11: Le bouton ne fonctionne pas
**Symptôme**: impossible d'utiliser le bouton de retour
**Impact**: L'utilisateur ne voit pas les informations importantes.
**Indice**: Vérifiez comment les données sont passées et affichées dans les templates.

### Problème #12: Bouton non fonctionnel
**Symptôme**: Certains boutons ne réagissent pas aux clics.
**Impact**: Les actions ne peuvent pas être effectuées.
**Indice**: Vérifiez les gestionnaires d'événements associés aux boutons
**Solution**: ajoute de la fonction (click) qui appelle la fonction goback() qui contient un router navigate.

### Problème #13: affichage des données
**Symptôme**: Les données ne sont pas affichée.
**Impact**: Les données ne sont pas affichée et al liste de livre est indisponible.
**Indice**:bien assigné les livres a l'observable du service vers la propriété this.books du composant, vérifier leur existence dans *ngIf="books && books.length > 0".

### Problème #14: Retour utilisateur manquant
**Symptôme**: Aucune confirmation n'est affichée après certaines actions.
**Impact**: L'utilisateur ne sait pas si son action a réussi ou échoué.
**Indice**: Ajoutez des alertes ou notifications pour informer l'utilisateur.

### Problème #15: affichage trop long de la description.
**Symptôme**:  Afficher la description du livre en utilisant un pour limiter à 20 caractères et ajouter des points de suspension si la description est plus longue.
**Impact**: Gene la lecture
**Indice**: 
**Solution**: création d une pipe qui permet de tronquer a 20 charachteres puis d ajouté des ... 

### Problème #16: Gerer le changement d'etat sur la modification des favoris
**Symptôme**: Affiche une alerte qui indique que le favori a été modifié
**Impact**: notification
**Indice**:
**Solution**: creation d'une window alert pour l'affichage.


### Problème #17: Gerer le changement d'etat sur la modification des favoris
**Symptôme**: Affiche une alerte qui indique que le favori n'a pas été modifier 
**Impact**: notification
**Indice**:
**Solution**: creation d'une window alert pour l'affichage lors d une mise a jour.

### Problème #18: Gerer le changement d'etat sur la modification des favoris
**Symptôme**: Affiche une alerte qui indique que le favori a été supprimé
**Impact**: notification
**Indice**:
**Solution**: creation d'une window alert pour l'affichage lors d une suppression reussi.

### Problème #18: Gerer le changement d'etat sur la modification des favoris
**Symptôme**: Affiche une alerte qui indique que le favori n a pas été supprimé
**Impact**: notification
**Indice**:
**Solution**: creation d'une window alert pour l'affichage lors d une suppression reussi.


### Problème #19: Gerer le changement d'etat sur la modification des favoris
**Symptôme**: Affiche une alerte qui indique que le favori n a pas été supprimé
**Impact**: notification
**Indice**:
**Solution**: creation d'une window alert pour l'affichage lors d une suppression reussi.

### Problème #20: utilisation d une ppipe uppercase  
**Symptôme**:  
**Impact**: Identifie et corrige l'erreur & affiche le titre en uppercase
**Indice**:
**Solution**: bien utiliser les accolades et passer uen pipe to upperCase pour avoir une majuscule


TODO 21
pas trouvé

### Problème #22: Ajouter un composant Header 
**Symptôme**: avoir un composant header qui soit dispo a la racine 
**Impact**: 
**Indice**:
**Solution**: pour faire un composant header, je recupere ce qui a été faire dans le app.component.html, je creer un composant dans le src/app/component/ ng g c header on transfere les donnée html et css on ajoute les nouveaux imports header on transfert pipe et RouterLink pour qu ils fonctionnent bien. On utilise <app-header> dans le app.component.


### Problème #23: Ajouter un composant footer
**Symptôme**: avoir un composant footer qui soit dispo a la racine 
**Impact**: 
**Indice**:
**Solution**: meme méthodologie que pour le header

