# Backup de documents

Script :
```bash
#!/bin/sh
#
# SCRIPT  : Backup des documents des postes

. $0.conf

if [ "x${SAVE_REPS}" = "x" ]
then
        echo "Problème de config"
        read NONE
        exit 1
fi

echo "\n\n\n\tPENSEZ A FERMER THUNDERBIRD (et cie) PENDANT LE BACKUP !!"
echo "\n\nAppuyez entrer pour commencer..."
read NONE

for REP in ${SAVE_REPS}
do
    echo "\n#### ${REP} ..."
    rsync -vrlt --exclude-from=$0.exclude ${REP} /media/nico5/WD2/Portable_Dell_Netapsys/rsync/ || {
        read NONE
        exit 1
    }
done

echo "\nTerminé, Appuyez entrer pour quitter"
read NONE
```

Fichier de conf
```bash
# QUADRA INFORMATIQUE
# Config du Backup des documents des postes sur une source externe

# Répertoires à sauvegarder (ne pas mettre de / à la fin)
export SAVE_REPS="
${HOME}/.thunderbird
${HOME}/.mozilla
${HOME}/Documents
${HOME}/Bureau
/var/www/docker-couchdb/couchdb/1.0.1
"

# Expressions pour le fichier exclude :
# *.o       would exclude all filenames matching *.o
# /foo      would exclude a file in the base directory called foo
# foo/      would exclude any directory called foo.
# /foo/*/bar    would exclude any file called bar two levels below a base directory called foo.
# /foo/**/bar   would exclude any file called bar two or more levels below a base directory called foo.
```

Fichier d'exclusion
```bash
*.vmdk
*.vdi
.svn/
.mozilla/**/Cache
Documents/Flexera_srv01.ova
Bureau/Clé_USB
```