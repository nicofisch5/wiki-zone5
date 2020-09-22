---
title: Docker
lang: en-US
footer: Developed using VuePress
---

# Docker
## Lancer composer install depuis un container Docker
```bash
docker run --rm --interactive --tty \
  --volume $PWD:/app \
  composer install
```

## Lancer php-cli depuis un container Docker
```bash
docker run -it --rm -v /home:/home -w $PWD php:cli php /home/my_script.php
```

Simuler la commande PHP sur le host :
https://github.com/felixfbecker/vscode-php-intellisense/issues/150

## Lancer npm depuis un container Docker
```bash
docker run -it -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm install
```

## Lancer mysql client depuis un container Docker
```bash
docker run --network="proxy" -v $PWD:/sql -it arey/mysql-client mysql -h db -u root -D adipso_pmsradama -p -e "source /sql/radama.sql"
```
```bash
docker run --network="proxy" -v $PWD:/sql -it arey/mysql-client mysql -h db -u root -D adipso_pmsradama -p 
```

## Portainer - Docker GUI
```bash
docker run -d -p 9000:9000 --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer:/data portainer/portainer
```

## Liens utiles
https://gitlab.com/users/od-alexandrehaag/projects  
https://gitlab.com/devops-alex  
https://gitlab.com/devops-alex/traefik-samples/  
https://github.com/ouidou/traefik-example  
https://github.com/Mettmett/docker-compose