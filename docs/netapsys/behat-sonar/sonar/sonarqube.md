====== Analyses SonarQube ======

Pour savoir comment fonctionne l'analyseur local, voir la [[grand-est:sonar-runner|page correspondante]].

Les paramètres suivants spécifiques à PJ :

  * clef projet : pj

Exemple permettant de générer un rapport JSON exploité par le plugin SonarQube pour PhpStorm:
<code bash>
sonar-runner -Dsonar.projectKey=pj -Dsonar.analysis.mode=preview -Dsonar.report.export.path=report.json
</code>

====== Analyse temps réel depuis l'IDE ======

Le plugin [[http://www.sonarlint.org/|SonarLint]] dans sa version 2 sortie le 22 avril 2016 permet de synchroniser les règles du plugin avec celles d'un serveur Sonar.
Le plugin existe pour Eclipse, IntelliJ (incluant PhpStorm), Visual Studio.