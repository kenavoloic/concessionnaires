# *Concessionnaires*

## Présentation
SPA React utilisant des données aléatoires produites par *FauxTexte*. Elle n’a pas pour objectif d’être exhaustive, mais tout simplement de proposer une démonstration de l’intérêt de *FauxTexte*.

Les ventes de concessionnaires automobiles au cours des douze derniers sont représentées au travers de trois panneaux. *Accueil* propose un classement des concessions en fonction de la réalisation des objectifs de vente. L’onglet *Gérants* dresse un classement des gérants en fonction des résultats des concessions. *Analyses* synthétise les données de l’ensemble des concessions. À tout moment, il est possible de connaître l’activité détaillée d’une concession. Quel est son volume de ventes ? Quantité et qualité de son inventaire ? Quels sont ses fournisseurs ? Qui sont ses clients ? Qui est à la direction de la concession ?

La fenêtre *Aléa* permet de changer les données produites.

## Technologies utilisées

Node.js, React.js, Webpack, less.

# *FauxTexte*

Système de production de données aléatoires. Le faux-texte aléatoire produit contient les lettres, accents et signes de ponctuation propres à la graphie de la langue française. Il en va de même pour les patronymes et les prénoms. Par ailleurs, si les adresses produites sont entièrement fictives, les noms de communes sont authentiques. Ils correspondent aux vrais départements français ainsi qu’aux régions actuelles.

*FauxTexte* est écrit en JavaScript.


## Constructeur

```javascript
const faux = new FauxTexte(seed, mpp={minimum:6, maximum:12}, ppp={minimum:3, maximum:6}, np = 23);
```

**seed**, chaîne de caractères, graine aléatoire.  
**mpp**, *entier*, nombre de mots par phrase.  
**ppp**, *entier*, nombre de phrases par paragraphes.  
**np**, *entier*, nombre premier.  

```javascript
const faux = new FauxTexte("Louison Bobet");
```

## Méthodes

### FauxTexte.liste(entier)
Retourne une chaînes de caractères.

```javascript
const dixMots = faux.liste(10);
```

### FauxTexte.mots(entier)
Retourne un tableau de chaînes de caractères.

```javascript
const sixMots = faux.mots(6);
```

### FauxTexte.mot()
Retourne une chaîne de caractères.

```javascript
const titre = faux.mot();
```

### FauxTexte.paragraphes(entier)
Retourne un tableau de chaînes de caractères. La première lettre de chaque chaîne est une majuscule.
```javascript
const treizeParagraphes = faux.paragraphes(13);
```

### FauxTexte.paragraphe()
Retourne une chaîne de caractères. La première lettre du paragraphe est une majuscule.
```javascript
const pitch = faux.paragraphe();
```

### FauxTexte.nombreLettres(entier)
Retourne une chaîne de caractères.
*entier* doit être supérieur ou égal à zéro et inférieur ou égal à cent.
La valeur par défaut est zéro.
```javascript
const nombres = [1,3,5,7,8];
const lettres = nombres.map(x => faux.nombreLettres(x));
```

### FauxTexte.generateurListe(tableau)
Retourne un générateur à partir d’une liste.
```javascript
const listeMarques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS"];
const generateurMarques = faux.generateurListe(listeMarques);
const dixMarques = Array(10).fill(0).map(x => generateurMarques());
console.log(dixMarques);

```
### FauxTexte.generateurValeur(entier1, entier2)
Retourne un générateur de valeurs comprises entre *entier1* et *entier2*.
```javascript
    const generateurNombreFournisseurs = faux.generateurValeur(10, 50);
    const dixFournisseurs = Array(10).fill(0).map(x => generateurNombreFournisseurs());
    console.log(dixFournisseurs);   
```

### FauxTexte.prenomsFeminins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const mecaniciennes = faux.prenomsFeminins(10);
```

### FauxTexte.prenomFeminin()
Retourne une chaîne de caractères.
```javascript
const prenomDirectrice = faux.prenomFeminin();
```

### FauxTexte.prenomsMasculins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const carrossiers = faux.prenomsMasculins(10);
```

### FauxTexte.prenomMasculin()
Retourne une chaîne de caractères. 
```javascript
const prenomAssureur = faux.prenomMasculin();
```

### FauxTexte.prenom()
Retourne un objet *prenom*.
```javascript
const prenom = faux.prenom();
const {h,f} = prenom;
```

### FauxTexte.patronymes(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeFamille = faux.patronymes(10);

```

### FauxTexte.patronyme()
Retourne une chaîne de caractères.
```javascript
const nomDeFamille = faux.patronyme();

```

### FauxTexte.typesVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const voies = faux.typesVoies(10);

```

### FauxTexte.typeVoie()
Retourne une chaîne de caractères.
```javascript
const voie = faux.typeVoie();
```

### FauxTexte.nomsVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeVoie = faux.nomsVoies(10);
```
### FauxTexte.nomVoie()
Retourne une chaîne de caractères.
```javascript
const nom = faux.nomVoie();
```

### FauxTexte.adresse()
Retourne un objet *adresse*.
```javascript
const domicile = faux.adresse();
const {numero, nom, booleen, type, chaine} = domicile;
```

*numero* Numéro de voie, chaîne de caractères.  
*nom* Nom de voie, chaîne de caractères.  
*chaine* adresse, chaîne de caractères.  

### FauxTexte.aleaCentaine()
Retourne une valeur entière comprise entre 1 et 101.
```javascript
const pourcentages = Array(10).fill(0).map(x => faux.aleaCentaine());
```

### FauxTexte.aleaMillier()
Retourne une valeur entière comprise entre 1 et 1001.
```javascript
const kilometrages = Array(10).fill(0).map(x => faux.aleaMillier() * 1000);
```

### FauxTexte.zeroUn()
Retourne *0* ou *1*.
```javascript
const civilite = faux.zeroUn() ? "Madame" : "Monsieur";
```

### FauxTexte.nomVille()
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

### FauxTexte.nomsVilles(entier)
Retourne un tableau d’objets *ville*.
```javascript
const villesFournisseurs = faux.nomsVilles(10);
```

### FauxTexte.communesDepartement(departement)
Retourne un tableau des noms de communes du département.
*departement* est de type chaîne de caractères.
```javascript
const domicile = nomVille();
const communesDepartements = faux.communesDepartement(domicile.numeroDepartement);
```

### FauxTexte.communesRegion(regionIso)
Retourne un tableau des noms de communes du département.
*regionIso* est de type chaîne de caractères.
```javascript
const domicile = nomVille();
const communesRegionales = faux.communesRegionales(domicile.isoRegion);
```

### FauxTexte.melangeur()
Retourne une valeur aléatoire comprise entre *0* et *1* et permet de réorganiser un tableau en indexant chacun de ses éléments.

```javascript
	const tableauMarques = donnees('marques');
	const listeMarques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS"];
	const nouvelleListeMarques = listeMarques.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
	console.log(listeMarques);
	console.log(nouvelleListemarques);
```

### FauxTexte.generateurDatePlancherPlafond(chaine1, chaine2)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}
```javascript
const {generateur:generateurDateConstitutionSociete} = fauxTexte.generateurDatePlancherplafond("1.1.2000", "31.12.2010");
```

### FauxTexte.generateurDateDepuis(chaine)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}

```javascript
const {generateur:generateurDateConstitutionSociete} = fauxTexte.generateurDatePlancherplafond("26/05/1993");
```

### FauxTexte.jourCalendaire(anneePlancher=1945, anneePlafond=2020)
Retourne un objet *Date*.
```javascript
const dateConstitutionSociete = fauxTexte.jourCalendaire(2000,2005);
console.log(dateConstitutionsociete.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'}));

```

