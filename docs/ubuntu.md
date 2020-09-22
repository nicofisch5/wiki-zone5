# Ubuntu

## Vidéos

### DV en AVI
Se placer dans le répertoire avec les DV à convertir et lancer la commande  
```
mencoder *.dv -ofps 25 -ovc lavc -lavcopts aspect=16/9:vcodec=mpeg4:vbitrate=4000 -vf scale=1024:576 -oac mp3lame -lameopts cbr:br=128 -o Fichier.avi
```
