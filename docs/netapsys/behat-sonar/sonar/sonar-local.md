====== Installation et configuration d'un serveur sonar en local ======

Cette procédure indique comment installer un serveur sonar en local dans un conteneur docker. Il faut donc au préalable avoir installé docker.

Télécharger le profil contenant les règles d'analyse de code souhaitées depuis Sonar sur le serveur d'intégration continue. Pour cela se rendre sur http://integ.grand-est.netapsys.fr/sonar/ et se loguer. Puis aller dans le menu "Quality profiles". Au niveau de la ligne du profil, cliquer sur le lien "Back up" pour récupérer le fichier XML de toutes les règles du profil.

Suivre ensuite la procédure d'installation de l'analyseur local sonar-runner décrite à l'adresse suivante : http://docs.sonarqube.org/display/SONAR/Analyzing+with+SonarQube+Scanner

Pour disposer de la commande "sonar-runner" au niveau global :

    ln -s SONAR_RUNNER_INSTALLATION_DIR/bin/sonar-runner /usr/local/bin/sonar-runner

Il faut évidemment remplacer SONAR_RUNNER_INSTALLATION_DIR par l'emplacement où vous avez décompressé les fichiers de sonar-runner.

Dans le fichier sonar-runner.properties changer la ligne pour se connecter à sonar :

    sonar.host.url=http://localhost:9001
    
Le port doit être le même que celui qui sera attribué au conteneur docker. On a ici utilisé le port 9001 car le 9000 est habituellement occupé par xdebug.

Puis lancer le conteneur docker du serveur sonar :

    docker run -d --name sonarqube -p 9001:9000 -p 9092:9092 sonarqube:5.1

La première fois il faudra patienter un moment le temps que l'image soit téléchargée.

Se loguer en admin sur l'inteface web http://localhost:9001/ (les identifiants par défaut son admin/admin).

Installer le plugin PHP. Pour cela se rendre dans le menu Settings puis System > Update center et enfin Available plugins, sélectionner PHP et cliquer sur le bouton d'installation.

Redémarrer sonar :

    docker restart sonarqube
    
Se loguer à nouveau en admin.

Charger le profil récupéré depuis le serveur sonar d'intégration via le bouton "Restore profile" dans la vue "Quality profiles".

Il n'y a plus qu'à se placer dans le répertoire de votre projet pour lancer l'analyse :

    sonar-runner
 