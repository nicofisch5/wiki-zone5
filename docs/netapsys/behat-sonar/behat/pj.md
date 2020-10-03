# Behat

Pour une introduction à Behat avec Magento voir la [[grand-est:behat:start|page correspondante]].

Voici les accès à la machine Windows pour les tests behat :

  * Adresse RDP : Win7-TestAccept.pr.netapsys.fr
  * Utilisateur : administrateur
  * Mot de passe : netapsys

On peut y accéder en utilisant le soft Remmina.

Une fois connecté à Windows il sera peut être nécessaire de relancer SAHI Pro Server

## Lancer les tests behat

### Lancer les tests sur le serveur Netapsys

```bash
cd /dev/tests/acceptance
./bin/behat features/nb
```

Cette commande va lancer les tests qui sont dans /dev/tests/acceptance/features/nb sur le serveur  Win7-TestAccept.pr.netapsys.fr.
<note important>Il se peut que sahi pro ne soit pas lancé sur Win7-TestAccept.pr.netapsys.fr, il faut donc se connecter pour le relancer.</note>

### Lancer les tests en local

```bash
cd /dev/tests/acceptance
./bin/behat features/nb -p local
```

Cette commande va lancer les tests qui sont dans /dev/tests/acceptance/features/nb sur votre machine local (il faut que sahi soit lancer sur votre machine).

::: tip
Pour info seul sahi pro permet de faire des tests sur des url en Https. En local il faut donc désactiver l'https pour pouvoir tester le BO ou autre.
:::

## Procédure pour faire un dump pour TA

```sql
truncate table log_customer;
truncate table log_quote;
truncate table log_summary;
truncate table log_summary_type;
truncate table log_url;
truncate table log_url_info;
truncate table log_visitor;
truncate table log_visitor_info;
truncate table log_visitor_online;
truncate table pj_log_crea_epj;
truncate table pj_log_devis;
truncate table pj_log_devis_item;
truncate table report_event;
truncate table pj_contacts;
truncate table pj_historisation_devis;
truncate table pj_leads_devis;

SET FOREIGN_KEY_CHECKS=0;

truncate table newsletter_subscriber;

truncate table sales_flat_quote_item_option;
truncate table sales_flat_quote_item;
truncate table sales_flat_quote_address_item;
truncate table sales_flat_quote_address;
truncate table sales_flat_quote_payment;
truncate table sales_flat_quote_shipping_rate;
truncate table sales_flat_quote;

truncate table sales_flat_creditmemo;
truncate table sales_flat_creditmemo_comment;
truncate table sales_flat_creditmemo_grid;
truncate table sales_flat_creditmemo_item;
truncate table pj_creditmemo;
truncate table pj_invoicing_transaction;
truncate table pj_invoicing_job;
truncate table pj_invoicing_log;

truncate table sales_flat_invoice;
truncate table sales_flat_invoice_comment;
truncate table sales_flat_invoice_grid;
truncate table sales_flat_invoice_item;

truncate table sales_flat_order_item;
truncate table sales_flat_order_address;
truncate table sales_flat_order_grid;
truncate table sales_flat_order_payment;
truncate table sales_flat_order_status_history;
truncate table sales_order_tax;
truncate table sales_flat_order;

truncate table sales_invoiced_aggregated_order;
truncate table sales_order_aggregated_created;
truncate table sales_invoiced_aggregated;
truncate table sales_refunded_aggregated;
truncate table sales_shipping_aggregated;
truncate table sales_shipping_aggregated_order;
truncate table tax_order_aggregated_created;

truncate table customer_address_entity_datetime;
truncate table customer_address_entity_decimal;
truncate table customer_address_entity_int;
truncate table customer_address_entity_text;
truncate table customer_address_entity_varchar;
truncate table customer_address_entity;
truncate table customer_entity_datetime;
truncate table customer_entity_decimal;
truncate table customer_entity_int;
truncate table customer_entity_text;
truncate table customer_entity_varchar;
truncate table customer_flat_grid;
truncate table customer_entity;

truncate table sales_bestsellers_aggregated_daily;
truncate table sales_bestsellers_aggregated_monthly;
truncate table sales_bestsellers_aggregated_yearly;

truncate table pj_ib;
```

Ensuite faire le dump :

```bash
bin/magerun db:dump dump_behat --compression="gzip"
```

De plus il faut ajouter un client avec les coordonnées : Email : new.email@behat.fr, lastname : Behat2 Lastname, firstname : Behat2 Firstname et cocher "Envoyer un mot de passe généré automatiquement".

### Machine dev2 qui servira de base pour les tests Behat

A faire :
  * Création du dump OK
  * Importation du dump OK
  * Tâche cron pour mettre à jour dev2 (git pull tous les jours par exemple) OK

```bash
0 5 * * * /bin/sh -c 'cd /var/www/e-selling/dev2/ && /usr/bin/git pull --rebase && rm -rf /var/www/e-selling/dev2/var/cache/* && service apache2 restart'
```

  * Ré-importation de la base avant de lancer les tests
  * Mettre en place HTTPS sur dev1 et dev2