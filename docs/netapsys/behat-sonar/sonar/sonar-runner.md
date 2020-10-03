====== Configuration de sonar-runner / sonarqube scanner (analyses locales) ======

Afin d'effectuer des analyses de la qualité du code en local il est possible d'utiliser un [[grand-est:installation-sonar-local|serveur sonar en local]] auquel il faudra intégrer le profil qualité du serveur [[http://integ.grand-est.netapsys.fr/sonar/|Grand Est]]. Mais le plus simple est d'indiquer à sonar-runner d'interroger directement le serveur Grand Est.

Pour l'installation de sonar-runner, suivre la procédure décrite à l'adresse suivante : http://docs.sonarqube.org/display/SONAR/Analyzing+with+SonarQube+Scanner

Il faut veiller à ce que votre fichier sonar-runner.properties (qui se trouve dans le dossier "conf" d'installation de sonar-runner) contienne au minimum la configuration suivante :

  sonar.analysis.mode=preview
  sonar.host.url=http://integ.grand-est.netapsys.fr/sonar/
  sonar.login=VOTRE_LOGIN_LDAP
  sonar.password=VOTRE_PASSWORD_LDAP

Le mode d'analyse doit être explicitement défini à "preview" pour éviter que les résultats de vos analyses soient enregistrées sur le serveur Grand Est.

Dans votre répertoire projet vous pouvez ensuite lancer la commande suivante pour faire une analyse locale qui génèrera un rapport HTML dans le dossier ".sonar" :

  sonar-runner -Dsonar.projectKey=CLEF_PROJET -Dsonar.sources=CHEMIN_VERS_SOURCES -Dsonar.analysis.mode=preview -Dsonar.issuesReport.html.enable=true

<note important>Il faut que le profil à utiliser soit défini au niveau du serveur Sonar avant toute analyse. Cela se fait via l'interface graphique de Sonar. Si ça n'est pas fait, les analyses ne fonctionneront pas.</note>

<note>Sonar Runner a été renommé en SonarLint et existe dans une version CLI mais aussi en tant que plugin pour IDE</note>

====== Analyse temps réel depuis l'IDE ======

Le plugin [[http://www.sonarlint.org/|SonarLint]] dans sa version 2 sortie le 22 avril 2016 permet de synchroniser les règles du plugin avec celles d'un serveur Sonar.
Le plugin existe pour Eclipse, IntelliJ (incluant PhpStorm), Visual Studio.
