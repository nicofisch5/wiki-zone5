# Configuration

Pour faire fonctionner mink avec behat ouvrez le fichier
<file>
dev/tests/acceptance/features/bootstrap/FeatureContext.php
</file>
ajoutez la commande use suivante en dessous des use déjà présent :
<code>
use Behat\MinkExtension\Context\MinkContext;
</code>
changer l'extends de la classe de BehatContext à MinkContext :
<code>
class FeatureContext extends MinkContext
</code>
pour s'assurer que le couple behat/mink fonctionner lancez la commande :
<code>
./bin/behat -di
</code>
celle-ci doit vous renvoyer une liste des étapes disponibles.

Une fois installé vous pouvez configurer behat avec le fichier behat.yml :

# Avec sahi & chrome

<code json>
# behat.yml
default:
    extensions:
        Behat\MinkExtension\Extension:
            base_url: http://e-selling.pagesjaunes.nfi/
            javascript_session: sahi
            browser_name: chrome
            goutte: ~
            sahi: ~
</code>
sur la ligne base_url: saisissez l'URL de la home page de votre instance\\
browser_name: vous permet de spécifier chrome ou firefox\\
la ligne goutte: ~ indique que le browser headless est goutte\\
la ligne sahi: ~ indique que le driver à utiliser est sahi\\

# Avec selenium & phantomjs

<code json>
# behat.yml
default:
    extensions:
        Behat\MinkExtension\Extension:
            base_url: http://e-selling.pagesjaunes.nfi/
            javascript_session: selenium2
            selenium2:
              wd_host: "http://localhost:8643/wd/hub"
            goutte: ~
            selenium2: ~
</code>
