# Rapport behat

## Résumé behat
De ce que j'ai compris, behat est un moyen de réaliser des tests fonctionnels automatiquement. Le test fonctionnel c'est un test "humain", aller sur l'application, faire des opérations puis vérifier que ce qu'on obtient est bien ce qu'on doit obtenir.
Behat utilise un langage de création de test spécifique, proche d'un langage "parlé".

## Environnement
    * Lancement du serveur Selenium dans un docker via docker-compose (fait avec Alex Haag) ;
    * Récupération de l'environnement behat 3 de Joseph + mise à jour vendor.

## En cours
    - Problème lors du lancement des tests. Lancement de la page (url d'un nouvel onglet) puis plus rien ne se passe. Etat : **Corrigé**; Suppression + réinstallation vendor
    - Problème lors du lancement des tests behat : Unknown command 'moveto'; Etat : **Corrigé**; Récupération configuration Joseph
    - Faire un listing des tests existants; Etat : **En attente**; Refactoring des tests existants
    - Modification des tests d'inscription (ou création si inexistants). Etat : **Corrigé**;
    - Création / Modification des tests liés à un atelier :
      - Création d'un atelier. Etat : **Fais**;
      - Ajout/Suppression d'un participant à l'atelier. Etat : **Fais/Fais** ;
      - Ajout/Modification/Suppression d'un produit au panier host. Etat : **Fais/Fais/Fais** ;
      - Ajout/Modification/Suppression d'un produit au panier participant. Etat : **Fais/Fais/Fais** ;
      - Validation panier participant (Paiement pas chèque, espèce ou carte bancaire). Etat : **En attente** ;
      - Validation panier host (Paiement pas chèque, espèce ou carte bancaire). Etat : **En attente** ;
      - Ajout/Modification/Suppression d'un produit au panier conseillier. Etat : **En attente** ;
      - Validation panier conseillier (Paiement pas chèque, espèce ou carte bancaire). Etat : **En attente**.

## Possible bug
  * Création d'un atelier avec création d'un nouvel hôte, submit création hôte puis submit création atelier. Doit voir le message "bubble.message.updated". 1 fois sur 2 pas de message. 
  * Si on veut modifier la note d'un atelier qui commence dans =< 5min, on ne pourra pas => le validator passe pas la date qui est trop proche et demande de la modifier.

## Bug enregistrés
  * Mail du parrainage non traduit (SponsorshipManager:222, pas de locale définis à newMessage ?) **Vu avec Alex => Réel bug : https://jira.netapsys.fr/browse/HDEUXOFFICE-1579**;
  * Lors de l'inscription d'un advisor, une erreur survient "Child fixed_phone does not exist" **https://jira.netapsys.fr/browse/HDEUXOFFICE-1581** ;
  * (Création d'un atelier + hôte avec le strict minimum en information) Ajouter un produit au panier hôte, valider le panier en payant en espèce/chèque/cb. Aucun mail est envoyé (pas d'email définis pour l'hôte). **https://jira.netapsys.fr/browse/HDEUXOFFICE-1591**
  * Lors de la création d'un participant, les champs Adresses, Code postal et ville ne sont pas obligatoire. Lors de la modification des informations du participant dans "Adresse de facturation" ces derniers sont obligatoires. On peut valider et payer la commande sans modifier l'adresse de facturation (laisser les champs à vide) sans erreur, normal ? **https://jira.netapsys.fr/browse/HDEUXOFFICE-1592**
  * Partie validation d'un panier. Sélectionner "Oui" pour la partie "Un bon de commande papier a-t-il été signé ?", les modes de paiements sont cachés. **https://jira.netapsys.fr/browse/HDEUXOFFICE-1593**
  * **https://jira.netapsys.fr/browse/HDEUXOFFICE-1583** On peut créer un atelier dans le passé :
    - **Important: Faire la manipulation après 14h05**
    - Créer un atelier via n'importe quel advisor
    - **NE PAS TOUCHER A LA DATE**
    - Créer un(e) nouvel(le) hôte(sse)
    - Renseigner les champs minimum (importe peu) et enregistrer l'hôte
    - Arrive sur une page d'erreur "Can not modifiy host on bubble @id = id" 

## Bug corrigés
  * Remplissage du select "ville", après avoir remplit code postal, prend parfois trop de temps ; du coups lorsque behat recherche la ville dans le select "ville", ne la trouvant pas, il provoque une erreur "Ville non trouvé" ; **Problème lié aux tests => corrigé**
  * Upload d'un fichier. SeleniumServer demande maintenant un zip du fichier. Quand modification et envoie d'un zip du fichier, le service Uploader n'étant plus conforme lance une erreur **Problème ignoré pour le moment, vu avec Alex => Les tests ne font pas d'upload de fichier actuellement**;
  * Pas de produit / pas de bouton "order.paid" dans l'étape 6 de l'inscription pour une personne nl_BE **Lié aux fixtures => Pas d'order line dans l'order**;