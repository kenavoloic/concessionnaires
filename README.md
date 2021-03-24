SPA React utilisant des données produites par FauxTexte.

## FauxTexte

###Constructeur
const faux = new FauxTexte(seed, mpp={minimum:6, maximum:12}, ppp={minimum:3, maximum:6}, np = 23);
seed : chaîne de caractères
mpp: *entier*, nombre de mots par phrase.
ppp: *entier*, nombre de paragraphes par phrase.
np: *entier*, nombre premier.

```javascript
const faux = new FauxTexte("Louison Bobet");
```
###Méthodes

####faux.generateurListe(liste)
Retourne un générateur.
```javascript
const listeMarques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS"];
const generateurMarques = faux.generateurListe(listeMarques);
const dixMarques = Array(10).fill(0).map(x => generateurMarques());
console.log(dixMarques);

```
####faux.generateurValeur(entier1, entier2)
Génère des valeurs entières comprises entre *entier1* et *entier2*.
```javascript
    const generateurNombreFournisseurs = faux.generateurValeur(10, 50);
    console.log(generateurNombrefournisseurs());   
```
    
####faux.nomsVilles(entier)
Retourne une liste de noms de villes françaises.
```javascript
const communes = faux.nomsVilles(10);

```

####faux.nomVille()
Retourne un nom de ville.
```javascript
const lieuDeNaissance = faux.nomVille();
```

####faux.prenomsFeminins(entier)
Retourne une liste de prénoms féminins.
```javascript
const mecaniciennes = faux.prenomsFeminins(10);
```

####faux.prenomFeminin()
Retourne un prénom féminin.
Type: chaîne
```javascript
const prenomDirectrice = faux.prenomFeminin();
```

####faux.prenomsMasculins(entier)
Retourne une liste de prénoms masculins.
```javascript
const carrossiers = faux.prenomsMasculins(10);
```

####faux.prenomMasculin()
Retourne un prénom masculin.
```javascript
const prenomAssureur = faux.prenomMasculin();
```

####faux.prenom()
Retourne un objet.
```javascript
const prenom = faux.prenom();
const {h,f} = prenom;
```

####faux.patronymes(entier)
Retourne un tableau de chaîne de caractères.
```javascript
const nomsDeFamille = faux.patronymes(10);

```

####faux.patronyme()
Retourne une chaîne de caractères.
```javascript
const nomDeFamille = faux.patronyme();

```
####faux.typesVoies(entier)
Retourne un tableau de chaîne de caractères.
```javascript
const voies = faux.typesVoies(10);

```

####faux.typeVoie()
Retourne une chaîne de caractères.
```javascript
const voie = faux.typeVoie();
```

####faux.nomsVoies(entier)
Retourne un tableau de chaîne de caractères.
```javascript
```
####faux.nomVoie()
Retourne une chaîne de caractères.
```javascript
```

####faux.adresse()
Retourne un objet.
```javascript
const domicile = faux.adresse();
const {numero, nom, booleen, type, chaine} = domicile;
```
*numero* Numéro de voie, type chaîne de caractères.
*nom* Nom de voie, type chaîne de caractères.
*booleen* Pour éviter des absurdités telles que *10 rue Grand’Rue*, *true* ou *false*.
*chaine* chaîne de caractères

####faux.generateurDatePlancherPlafond(chaine1, chaine2)
Retourne un objet.

####faux.generateurDateDepuis(chaine)
Retourne un objet.

####faux.jourCalendaire(anneePlancher=1945, anneePlafond=2020)
Retourne une chaîne de caractères.

####faux.aleaCentaine()
Retourne une chaîne de caractères.

####faux.aleaMillier()
Retourne une chaîne de caractères.

####faux.zeroUn()
Retourne *0* ou *1*.

####faux.nomVille()
Retourne un objet.
```javascript
const domicile = faux.nomVille();
const {nom, codeInsee, codeCommune, codePostal, numeroDepartement, nomDepartement, nomRegion, isoRegion, regionAlphabetique, departements} = domicile;
```

chaîne de caractères :
* *nom*
* *codeInsee*
* *codeCommune*
* *codePostal* 
* *numeroDepartement*
* *nomRegion*
* *isoRegion*,
* *regionAlphabetique*

*departements* tableau des départements constituant la même région. Chaînes de caractères.

####faux.nomsVilles(entier)
Retourne un tableau d’objets.
```javascript
const villesFournisseurs = faux.nomsVilles(10);
```

####faux.communesDepartement(departement)
Retourne un tableau des noms de communes du département.
*departement* est de type chaîne de caractères.
```javascript
const domicile = nomVille();
const communesDepartements = faux.communesDepartement(domicile.numeroDepartement);
```

####faux.communesRegion(regionIso)
Retourne un tableau des noms de communes du département.
*regionIso* est de type chaîne de caractères.
```javascript
const domicile = nomVille();
const communesRegionales = faux.communesRegionales(domicile.isoRegion);
```

####faux.jourCalendaire()
####faux.numeroSecuriteSociale,()
####faux.melangeur()

