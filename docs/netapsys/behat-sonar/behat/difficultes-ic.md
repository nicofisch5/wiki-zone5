# Difficultés Intégration Continue

Pour les besoins de l'intégration continue nous devons passer par un navigateur headless qui supporte le JS.
C'est là que les problèmes commencent ...

## Phantomjs

Version 1.9.0 : (paquet Ubuntu 14.04)
- Aucun problème, testée sur machine locale

Version 1.9.7 : (compilée)
- Les tests break rapidement que ce soit en local ou sur la machine d'intégration.
- La popin lightbox d'identification semble ne pas s'exécuter, du coup les champs input ne sont pas trouvés. Pourtant un screenshot montre bien que la popin est chargée.

## Zombie

Charge uniquement le header de la page. Apparemment ce serait un bug lié à la présence de la commande "document.write"
Pour palier aux problèmes, insertion dans le fichier
<file>
/usr/local/lib/node_modules/zombie/lib/zombie/browser.js
</file>
du code
<code>
var _origHTMLLanguageProcessorJavaScript = HTML.languageProcessors.javascript
HTML.languageProcessors.javascript = function(element, code, filename){
      var code = code.replace(/document.write/g, '');
        _origHTMLLanguageProcessorJavaScript(element, code, filename);
}
</code>
juste en dessous de la ligne
<code>
HTML = JSDOM.dom.level3.html;
</code>
cela résout le problème du "document.write", du coup on se retrouve dans la même situation qu'avec zombiejs à savoir la popin lightbox qui ne s'exécute pas.