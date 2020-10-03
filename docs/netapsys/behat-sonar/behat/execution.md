# Exécution

Dans un premier temps il faut lancer un driver, nous allons utiliser sahi (selenium est également une solution).\\
Puis nous lancerons behat.

## Lancement de sahi

Pour utiliser sahi vous devez lancer la commande suivante avant le lancement de behat :
<code>
cd /opt/sahi/bin/
./sahi.sh
</code>

## Lancement de selenium & phantomjs

Pour selenium lancer la commande :
<code>
java -jar /mon_repertoire/selenium-server-standalone-2.42.2.jar
</code>

Pour phantomjs lancer la commande :
<code>
phantomjs --webdriver=8643
</code>

## Lancement de behat

Placez-vous dans le répertoire dev/tests/acceptance/ puis lancer la commande
<code>
./bin/behat
</code>
cette commande va lancer l'exécution de tous vos scénarios.\\
Pour lancer behat sur un seul fichier il suffit de le préciser comme argument
<code>
./bin/behat features/mon_repertoire/ma_feature.feature
</code>

