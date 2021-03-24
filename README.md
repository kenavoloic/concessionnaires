SPA React utilisant des données produites par FauxTexte.

## FauxTexte

### Constructeur

```javascript
const faux = new FauxTexte(seed, mpp={minimum:6, maximum:12}, ppp={minimum:3, maximum:6}, np = 23);
```


**seed** chaîne de caractères, graine aléatoire.
**mpp** *entier*, nombre de mots par phrase.
**ppp** *entier*, nombre de paragraphes par phrase.
**np** *entier*, nombre premier.


```javascript
const faux = new FauxTexte("Louison Bobet");
```

### Méthodes

#### fauxTexte.generateurListe(tableau)
Retourne un générateur à partir d’une liste.
```javascript
const listeMarques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS"];
const generateurMarques = faux.generateurListe(listeMarques);
const dixMarques = Array(10).fill(0).map(x => generateurMarques());
console.log(dixMarques);

```
#### fauxTexte.generateurValeur(entier1, entier2)
Retourne un générateur de valeurs comprises entre *entier1* et *entier2*.
```javascript
    const generateurNombreFournisseurs = faux.generateurValeur(10, 50);
    console.log(generateurNombrefournisseurs());   
```

#### fauxTexte.prenomsFeminins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const mecaniciennes = faux.prenomsFeminins(10);
```

#### fauxTexte.prenomFeminin()
Retourne une chaîne de caractères.
```javascript
const prenomDirectrice = faux.prenomFeminin();
```

#### fauxTexte.prenomsMasculins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const carrossiers = faux.prenomsMasculins(10);
```

#### fauxTexte.prenomMasculin()
Retourne une chaîne de caractères. 
```javascript
const prenomAssureur = faux.prenomMasculin();
```

#### fauxTexte.prenom()
Retourne un objet *prenom*.
```javascript
const prenom = faux.prenom();
const {h,f} = prenom;
```

#### fauxTexte.patronymes(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeFamille = faux.patronymes(10);

```

#### fauxTexte.patronyme()
Retourne une chaîne de caractères.
```javascript
const nomDeFamille = faux.patronyme();

```

#### fauxTexte.typesVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const voies = faux.typesVoies(10);

```

#### fauxTexte.typeVoie()
Retourne une chaîne de caractères.
```javascript
const voie = faux.typeVoie();
```

#### fauxTexte.nomsVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeVoie = faux.nomsVoies(10);
```
#### fauxTexte.nomVoie()
Retourne une chaîne de caractères.
```javascript
const nom = faux.nomVoie();
```

#### fauxTexte.adresse()
Retourne un objet *adresse*.
```javascript
const domicile = faux.adresse();
const {numero, nom, booleen, type, chaine} = domicile;
```

*numero* Numéro de voie, chaîne de caractères.
*nom* Nom de voie, chaîne de caractères.
*chaine* adresse, chaîne de caractères

#### fauxTexte.aleaCentaine()
Retourne une valeur entière comprise entre 1 et 101.

#### fauxTexte.aleaMillier()
Retourne une valeur entière comprise entre 1 et 1001.

#### fauxTexte.zeroUn()
Retourne *0* ou *1*.

#### fauxTexte.nomVille()
Retourne un objet *ville*.
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
* *isoRegion*
* *regionAlphabetique*

*departements* tableau des départements constituant la même région. Chaînes de caractères.

#### fauxTexte.nomsVilles(entier)
Retourne un tableau d’objets *ville*.
```javascript
const villesFournisseurs = faux.nomsVilles(10);
```

#### fauxTexte.communesDepartement(departement)
Retourne un tableau des noms de communes du département.
*departement* est de type chaîne de caractères.
```javascript
const domicile = nomVille();
const communesDepartements = faux.communesDepartement(domicile.numeroDepartement);
```

#### fauxTexte.communesRegion(regionIso)
Retourne un tableau des noms de communes du département.
*regionIso* est de type chaîne de caractères.
```javascript
const domicile = nomVille();
const communesRegionales = faux.communesRegionales(domicile.isoRegion);
```


#### fauxTexte.melangeur()
Retourne une valeur aléatoire comprise entre *0* et *1* et permet de réorganiser un tableau en indexant chacun de ses éléments.

```javascript
	const tableauMarques = donnees('marques');
	const listeMarques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS"];
	const nouvelleListeMarques = listeMarques.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
	console.log(listeMarques);
	console.log(nouvelleListemarques);

```

#### fauxTexte.generateurDatePlancherPlafond(chaine1, chaine2)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}
```javascript
const {generateur:generateurDateConstitutionSociete} = fauxTexte.generateurDatePlancherplafond("1.1.2000", "31.12.2010");
```

#### fauxTexte.generateurDateDepuis(chaine)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}

```javascript
const {generateur:generateurDateConstitutionSociete} = fauxTexte.generateurDatePlancherplafond("26/05/1993");
```

#### fauxTexte.jourCalendaire(anneePlancher=1945, anneePlafond=2020)
Retourne un objet *Date*.
```javascript
const dateConstitutionSociete = fauxTexte.jourCalendaire(2000,2005);
console.log(dateConstitutionsociete.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'}));

```

