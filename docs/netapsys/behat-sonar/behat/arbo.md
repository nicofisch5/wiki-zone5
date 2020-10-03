# Arborescence, Features & Scénarios

## Arborescence

Après l'installation un répertoire features a été créé : _dev/tests/acceptance/features_

A l'intérieur de celui-ci se trouve le fichier : _dev/tests/acceptance/features/bootstrap/FeatureContext.php_ qui sera utilisé pour accueillir les fonctions spécifiques behat que nous souhaitons ajouter à Magento ou au projet

Pour le projet PJ nous avons subdivisé les tests behat par module.

Par exemple pour le module BO Vendeur un répertoire bo-vendeur a été créé : _dev/tests/acceptance/features/bo-vendeur_ à l'intérieur de celui-ci se trouvent tous les fichiers "feature" c'est-à-dire qui constituent à proprement parler les TA à exécuter.

## Features & Scénarios

Une feature est un fichier qui va accueillir un ou plusieurs scénarios de tests. Elle est écrit avec le langage Gherkin

```bash
Feature: Description de la feature
  Dans le but de ...
  En tant que ...
  Je dois pouvoir ...

  Scenario: Une règle métier
    Given un pré-requis
      And et un 2ème pré-requis
     When j'exécute telle action
      And puis une autre action
     Then je peux tester le cas suivant
      And je constate le comportement suivant

  Scenario: Une autre règle métier
      ...
```

Pour une description détaillée : http://docs.behat.org/guides/1.gherkin.html
