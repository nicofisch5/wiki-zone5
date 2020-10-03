# Installation
## behat

Dans votre instance Magento créer un répertoire dev/tests/acceptance/

Dans ce répertoire créer un fichier composer.json (Mink doit être installé également) :
<code json>
{
    "require": {
        "behat/behat": "2.4.*@stable",
        "behat/mink": "1.4.*@stable",
        "behat/mink-extension": "*",
        "behat/mink-goutte-driver": "*",
        "behat/mink-selenium2-driver": "*",
        "behat/mink-sahi-driver": "*"
    },
    "minimum-stability": "dev",
    "config": {
        "bin-dir": "bin/"
    }
}
</code>

Récupérer l'outil composer :
<file>
curl http://getcomposer.org/installer | php
</file>

puis lancer l'installation :
<file>
php composer.phar install
</file>

initialiser le projet behat :
<file>
./bin/behat --init
</file>

Source : méthode 1 (composer) de la doc http://docs.behat.org/en/v3.0/quick_intro_pt1.html#method-1-composer-the-recommended-one

## sahi

Récupérer la dernière version jar depuis http://sourceforge.net/projects/sahi/files/\\
Pour lancer l'installeur, exécuter la commande
<code>
java -jar install_sahi_vXX_20130429.jar
</code>

## selenium2

Récupérer la dernière version jar depuis http://docs.seleniumhq.org/download/\\
<code>
http://selenium-release.storage.googleapis.com/2.42/selenium-server-standalone-2.42.2.jar
</code>

## zombie.js

<code>
export NODE_PATH="/usr/local/lib/node_modules"
</code>