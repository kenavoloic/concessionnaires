/*
  const { patronymiques } = require('./noms');
  const { masculins, feminins } = require('./prenoms');
  const { types:tVoies, odonymiques:nVoies } = require('./voirie');
  const {ville, nombreVilles, communesDepartementales, communesRegionales} = require('./ville.js');
  const {departementsRegions, listeRegions, regionsIsoNom, regionsNomIso} = require('./departementsRegions');
  const {validationDate, jCalendaire, dureeJour, dureeSemaine, triObjetsDate, numeroSecuriteSociale} = require('./dates.js');
  const {nombresPremiers, reducteurGraine} = require('./premiers');
  const {Lmap, iteration, aleaListe, aleaPlancherPlafond} = require('./fonctionsLmap');
  //const donneesXR = require('./donneesChaotiques');
  const {taillesPhrase, ponctuationsFortes, virgules} = require('./configurationFauxTexte');
  const dictionnaire = require('./liste00');
  const {chiffreLettre, lettreChiffre} = require('./nombresEnLettres');
*/
import patronymiques  from './noms';
import { masculins, feminins }  from './prenoms';
import { types as tVoies, odonymiques as nVoies }  from './voirie';
import {ville, nombreVilles, communesDepartementales, communesRegionales}  from './ville.js';
import {departementsRegions, listeRegions, regionsIsoNom, regionsNomIso}  from './departementsRegions';
import {validationDate, jCalendaire, dureeJour, dureeSemaine, triObjetsDate, numeroSecuriteSociale}  from './dates.js';
import {nombresPremiers, reducteurGraine}  from './premiers';
import {Lmap, iteration, aleaListe, aleaPlancherPlafond, aleaMelangeurTableau}  from './fonctionsLmap';
import donneesXR from './donneesChaotiques';
import {taillesPhrase, ponctuationsFortes, virgules}  from './configurationFauxTexte';
import dictionnaire  from './liste00';
import {chiffreLettre, lettreChiffre}  from './nombresEnLettres';



const alphabetSimple = [...'abcdefghijklmnopqrstuvwxyz'];
const chiffres = [...'0123456789'];
const chaine26 = 'abcdefghijklmnopqrstuvwxyz';
const chaine42 = 'aàâæbcçdeéèêëfghiîïjklmnoôœpqrstuùûüvwxyÿz';
const alphanumeriques = [...chaine26.toLowerCase(), ...chaine26.toUpperCase(), ...chiffres];
const alphanumeriquesEtendu = [...chaine42.toLowerCase(), ...chaine42.toUpperCase(), ...chiffres];

const elements = dictionnaire.length;


const FauxTexte = function(seed, mpp={minimum:6, maximum:12}, ppp={minimum:3, maximum:6}, np = 23) {

    np = seed ? reducteurGraine(seed) : 23;
    const nombrePremier = nombresPremiers(np);

    const motsParPhrase = {minimum: 6, maximum: 12};
    const phraseParParagraphe = {minimum: 3, maximum: 6};

    const generateurListe = liste => {
	const {x:xListe, r:rListe} = donneesXR('liste');
	const _generateurListe = Lmap(xListe, rListe);
	const iterationListe = aleaListe(liste.length, nombrePremier);
	const itemListeAleatoire = () => liste[iterationListe(_generateurListe.next().value)];
	return itemListeAleatoire;
    };

    //Mélangeur de liste/tableau
    // const aleaMelangeurTableau = lmap => tableau => {
    // 	const indexation = x => ({tri: lmap.next().value, valeur: x});
    // 	const reclassement = (x, y) => x.tri - y.tri;
    // 	const valeurs = x => x.valeur;
    // 	return tableau.map(indexation).sort(reclassement).map(valeurs);
    // };

    const {x:xMelangeur, r:rMelangeur} = donneesXR('melangeur');
    const generateurMelangeur = Lmap(xMelangeur, rMelangeur);
    const melangeur  = () => generateurMelangeur.next().value;
    // const generateurMelangeur = Lmap(xMelangeur, rMelangeur) => tableau => {
    // };


    const generateurValeur = (entier1, entier2=0) => {
	entier1 = isNaN(entier1) ? 1 : entier1;
	entier2 = isNaN(entier2) ? 0 : entier2;
	const [plancher, plafond] = [entier1, entier2].sort((x,y) => x - y);
	const {x:xValeur, r:rValeur} = donneesXR('valeur');
	const _generateurValeur = Lmap(xValeur, rValeur);
	const iterationValeur = aleaPlancherPlafond(plancher,  plafond, nombrePremier);
	const itemValeurAleatoire = () => iterationValeur(_generateurValeur.next().value);
	return itemValeurAleatoire;
    };





    const {x:xVille, r:rVille} = donneesXR('ville');
    const generateurVille = Lmap(xVille, rVille);
    const iterationVille = aleaPlancherPlafond(0,nombreVilles, nombrePremier);
    const nomVilleAleatoire = () => iterationVille(generateurVille.next().value);

    const nomsVilles = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	return (nombre === 1) ? ville(nomVilleAleatoire()) : Array(nombre).fill(0).map(x => ville(nomVilleAleatoire()));
    };

    const nomVille = () => nomsVilles(1);

    const communesDepartement = numeroDepartement => communesDepartementales(numeroDepartement);
    const communesRegion = isoRegion => communesRegionales(isoRegion);

    //Prénoms masculins, féminins
    //Patronymes
    const {x:xFeminins, r:rFeminins} = donneesXR('feminins');
    const generateurFeminins = Lmap(xFeminins, rFeminins);
    const iterationFeminins = aleaListe(feminins.length, nombrePremier);
    const prenomFemininAleatoire = () => feminins[iterationFeminins(generateurFeminins.next().value)];

    const {x:xMasculins, r:rMasculins} = donneesXR('masculins');
    const generateurMasculins = Lmap(xMasculins, rMasculins);
    const iterationMasculins = aleaListe(masculins.length, nombrePremier);
    const prenomMasculinAleatoire = () => masculins[iterationMasculins(generateurMasculins.next().value)];

    const {x:xPatronymes, r:rPatronymes} = donneesXR('patronymes');    
    const generateurPatronymes = Lmap(xPatronymes, rPatronymes);
    const iterationPatronymes = aleaListe(patronymiques.length, nombrePremier);
    const patronymeAleatoire = () => patronymiques[iterationPatronymes(generateurPatronymes.next().value)];

    const prenomsFeminins = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array(nombre).fill(0).map(x => prenomFemininAleatoire());
	return retour;
    };

    const prenomFeminin = () => prenomsFeminins(1).toString();

    const prenomsMasculins = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array(nombre).fill(0).map(x => prenomMasculinAleatoire());
	return retour;
    };

    const prenomMasculin = () => prenomsMasculins(1).toString();

    const prenom = () => ({h:prenomMasculin(), f: prenomFeminin()});

    const patronymes = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array(nombre).fill(0).map(x => patronymeAleatoire());
	return retour;
    };

    const patronyme = () => patronymes(1).toString();

    //Voirie

    const {x:xTypesVoies, r:rTypesVoies} = donneesXR('typesVoies');
    const generateurTypesVoies = Lmap(xTypesVoies, rTypesVoies);
    const iterationTypesVoies = aleaListe(tVoies.length, nombrePremier);
    const typeVoieAleatoire = () => tVoies[iterationTypesVoies(generateurTypesVoies.next().value)];

    const typesVoies = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array(nombre).fill(0).map(x => typeVoieAleatoire());
	return retour;
    };

    const typeVoie = () => typesVoies(1).toString();

    const {x:xNomsVoies, r:rNomsVoies} = donneesXR('nomsVoies');
    const generateurNomsVoies = Lmap(xNomsVoies, rNomsVoies);
    const iterationNomsVoies = aleaListe(nVoies.length, nombrePremier);
    const nomVoieAleatoire = () => nVoies[iterationNomsVoies(generateurNomsVoies.next().value)];

    //nomsVoies retourne un object  {nom:"Grande Rue", booleen: false}
    //Si booleen = false, impossible de combiner nom et type de voie
    //10 avenue Grande Rue n'a pas de sens.

    const nomsVoies = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = (nombre === 1) ? nomVoieAleatoire() :  Array(nombre).fill(0).map(x => nomVoieAleatoire());
	return retour;
    }

    const nomVoie = () => nomsVoies(1);

    const adresse = () => {
	let numero = aleaMillier();
	let {nom, booleen} = nomVoie();
	let type = typeVoie();
	let chaine = booleen ? `${numero} ${type} ${nom}` : `${numero} ${nom}`;
	return {numero:numero, nom:nom, booleen:booleen, type:type, chaine:chaine};
    };
    
    //Génére un nombre entre 1 et 101.
    const {x:xCentaine, r:rCentaine} = donneesXR('centaine');
    const generateurCentaine = Lmap(xCentaine, rCentaine);
    const iterationCentaine = aleaPlancherPlafond(1, 101, nombrePremier);
    const aleaCentaine = () => iterationCentaine(generateurCentaine.next().value);

    //Génére un nombre entre 1 et 1001.
    const {x:xMillier, r:rMillier} = donneesXR('millier');
    const generateurMillier = Lmap(xMillier, rMillier);
    const iterationMillier = aleaPlancherPlafond(1, 1001, nombrePremier);
    const aleaMillier = () => iterationMillier(generateurMillier.next().value);

    //Retourne soit 1 soit 0.
    const _01 = [0,1];
    const {x:xBinaire, r:rBinaire} = donneesXR('binaire');
    const generateurBinaire = Lmap(xBinaire, rBinaire);
    const iterationBinaire = aleaListe(_01.length, nombrePremier);
    const zeroUn = () => _01[iterationBinaire(generateurBinaire.next().value)];



    // jours calendaires, date majorité, date d'embauche, numéro sécu
    // Dates entre deux dates

    const generateurDatePlancherPlafond = (chaine1, chaine2) => {
	let d1 = jCalendaire(chaine1);
	let d2 = jCalendaire(chaine2);
	let [plancher, plafond] = [d1,d2].sort(triObjetsDate);
	const nombreJours = Math.abs(plafond.getTime() - plancher.getTime()) / (24 * 60 * 60 * 1000);
	const generateurJourCalendaire = generateurValeur(0, nombreJours);
	return {plancher:plancher, generateur:generateurJourCalendaire, dureeJour:dureeJour};
    };

    //Dates autour de la date du jour : antérieure ou postérieure

    const generateurDateDepuis = chaine => {
	let d1 = jCalendaire(chaine);
	let d2 = new Date();
	let [plancher, plafond] = [d1,d2].sort(triObjetsDate);
	const nombreJours = Math.abs(plafond.getTime() - plancher.getTime()) / (24 * 60 * 60 * 1000);
	const generateurJourCalendaire = generateurValeur(0, nombreJours);
	return {plancher:plancher, generateur:generateurJourCalendaire, dureeJour:dureeJour};	
    };

    
    const jourCalendaire = (anneePlancher=1945, anneePlafond=2020) => {
	let jj = 1 + (aleaCentaine() % 31);
	let mm = 1 + (aleaCentaine() % 12);
	let aaaa = anneePlancher + (aleaCentaine() % (anneePlafond - anneePlancher));
	let heures = aleaCentaine() % 25;
	let minutes = aleaCentaine() % 61;
	return validationDate(jj, mm, aaaa, heures, minutes);
    };

    const securiteSociale = (genre, dob, villeNaissance, ordre) => dates.numeroSecuriteSociale(genre, dob, villeNaissance, ordre); 

    //Retourne un mot tiré de la liste des mots.
    const {x:xMots, r:rMots} = donneesXR('mots');
    const generateurMots = Lmap(xMots, rMots);
    const iterationMots = aleaListe(dictionnaire.length, nombrePremier);
    const motAleatoire = () => dictionnaire[iterationMots(generateurMots.next().value)];

    //Retourne la longueur en mots d'une phrase.
    const {x:xLongueurPhrases, r:rLongueurPhrases} = donneesXR('longueurPhrases');
    const generateurLongueurPhrase = Lmap(xLongueurPhrases, rLongueurPhrases);
    const iterationLongueurPhrase = aleaListe(taillesPhrase.length, nombrePremier);
    const aleaLongueurPhrase = () => taillesPhrase[iterationLongueurPhrase(generateurLongueurPhrase.next().value)];

    //Retourne la taille en phrases du paragraphe aléatoire.
    const {x:xParagraphes, r:rParagraphes} = donneesXR('paragraphes');
    const generateurParagraphes = Lmap(xParagraphes, rParagraphes);
    const iterationParagraphes = aleaPlancherPlafond(phraseParParagraphe.minimum, phraseParParagraphe.maximum, nombrePremier);
    const aleaParagraphes = () => iterationParagraphes(generateurParagraphes.next().value);

    //const virgule = mot => mot+",";

    const {x:xPonctuationsFortes, r:rPonctuationsFortes} = donneesXR('ponctuationsFortes');
    const generateurPonctuationsFortes = Lmap(xPonctuationsFortes, rPonctuationsFortes);
    const iterationPonctuationsFortes = aleaListe(ponctuationsFortes.length, nombrePremier);
    const aleaPonctuationsFortes = () => ponctuationsFortes[iterationPonctuationsFortes(generateurPonctuationsFortes.next().value)];


    const {x:xVirgules, r:rVirgules} = donneesXR('virgules');
    const generateurVirgules = Lmap(xVirgules, rVirgules);
    const iterationVirgules = aleaListe(virgules.length, nombrePremier);
    const aleaVirgules = () => virgules[iterationVirgules(generateurVirgules.next().value)];

    const formatagePhrase = phrase => {

	let temporaire = phrase.slice(0,-1).map(x => {
	    let onOff = zeroUn();
	    return onOff ? x + aleaVirgules() : x;
	});

	temporaire.push(phrase.slice(-1)[0]);
	let pf = aleaPonctuationsFortes();
	let retour = temporaire.join(" ");

	return retour+pf;
    };

    // Genèse de chaînes alphanumériques
    const {x:xAlphanumeriques, r:rAlphanumeriques} = donneesXR('alphanumeriques');
    const generateurAlphanumeriques = Lmap(xAlphanumeriques, rAlphanumeriques);
    const iterationAlphanumeriques = aleaListe(alphanumeriques.length, nombrePremier);
    const aleaAlphanumeriques = () => alphanumeriques[iterationAlphanumeriques(generateurAlphanumeriques.next().value)];

    const chaine = (longueur=8) => {
	longueur = isNaN(longueur) ? 8 : (longueur < 0 || longueur > 36) ? 8 : longueur;
	let retour = Array(longueur).fill(0).map(x => aleaAlphanumeriques()).join("");
	return retour;
    };

    //Génèse de nombres dont on donne la taille en chiffre.
    const base16 = [...'0123456789ABCDEF'];
    const {x:xHexadecimal, r:rHexadecimal} = donneesXR('hexadecimal');
    const generateurHexadecimal = Lmap(xHexadecimal, rHexadecimal);
    const iterationHexadecimal = iteration(16, nombrePremier);
    const alea16 = () => iterationHexadecimal(generateurHexadecimal.next().value);

    const nombreHexaAleatoire = (nombreChiffres=8) => {
	nombreChiffres = isNaN(nombreChiffres) ? 8 : (nombreChiffres < 0 || nombreChiffres > 12) ?  8 : nombreChiffres;
	let nombre16 = Array(nombreChiffres).fill(0).map(x => alea16()).join("");
	let nombre = parseInt(nombre16, 16);
	let valeur = `${nombre}`.slice(0, nombreChiffres);
	return valeur.padStart(nombreChiffres,0);
    };

    const nombre = (nombreChiffres=8) => nombreHexaAleatoire(nombreChiffres);

    const nombres = (quantite, tailleEnChiffre) => {
	tailleEnChiffre = (tailleEnChiffre === 'undefined') ? 8 : ( isNaN(tailleEnChiffre) ? 8 : tailleEnChiffre);
	return Array(quantite).fill(0).map(x => nombre(tailleEnChiffre));
    };

    const nombresUniques = (quantite, tailleEnChiffre=4) => {
	let listeEtendue = Array(quantite*2).fill(0).map(x => nombres(1,tailleEnChiffre)).reduce((retour,x) => [...retour, ...x], []);
	let tri = new Set(listeEtendue);
	//return (tri.size  >= quantite) ? Array.from(tri).slice(0,quantite+1) : Array.from(tri);
	return Array.from(tri).sort();
    };

    const formatageNombre = (nombreChiffres=8) => {
	nombreChiffres = isNaN(nombreChiffres) ? 8 : (nombreChiffres < 0) ? 8 : (nombreChiffres > 12) ? 8 : nombreChiffres;        
	let valeur = parseInt(nombreHexaAleatoire(), 10);
	let retour = "${valeur}".slice(nombreChiffres);
	return retour;
    };

    const items = (nombre) => {
	nombre = isNaN(nombre) ? 1 : nombre;
	return Array(nombre).fill(0).map(x => motAleatoire());
    };

    const mots = (nombre) => {
	nombre = isNaN(nombre) ? 1 : nombre;
	return Array(nombre).fill(0).map(x => motAleatoire());
    };

    const mot = () => mots(1).toString();

    const majusculePremiereLettre = chaine => `${chaine.charAt(0).toUpperCase()}${chaine.slice(1)}`;

    const phrase = () => {
	let iterations = aleaLongueurPhrase();
	let aleatoires = Array(iterations).fill(0).map(x => motAleatoire());
	aleatoires[0] = majusculePremiereLettre(aleatoires[0]);
	return Array(formatagePhrase(aleatoires));
    };

    const paragraphe = () => {
	let iterations = aleaParagraphes();
	let retour = Array(iterations).fill(0).map(x => phrase());
	return retour.join(" ");
    };

    const phrases = nombre => {
	nombre = isNaN(nombre) ? 6 : nombre;
	let retour =  Array(nombre).fill(0).map(x => phrase());
	return retour;
    };

    const paragraphes = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	return Array(nombre).fill(0).map(x => paragraphe());
    };

    const liste = nombre => {
	nombre = isNaN(nombre) ? 2 : nombre;
	let retour =  Array(nombre).fill(0).map(x => motAleatoire());
	return formatagePhrase(retour);        
    };

    const nombreLettres = (nombre) => {
	nombre = isNaN(nombre) ? 0 : nombre;
	return chiffreLettre(nombre);
    };

    return {
	liste,
	paragraphe, paragraphes,
	phrase, phrases, 
	mot, mots, 
	nombre, nombres, nombresUniques,
	nombreHexaAleatoire, chaine,
	generateurListe, generateurValeur, generateurDatePlancherPlafond, generateurDateDepuis,
	nombreLettres,
	prenom, prenomMasculin, prenomFeminin, patronyme,
	prenomsMasculins, prenomsFeminins, patronymes,
	adresse, nomVoie, nomsVoies,
	nomVoieAleatoire,
	typeVoie, typesVoies,
	aleaCentaine, aleaMillier,
	zeroUn,
	nomVille, nomsVilles,
	communesDepartement, communesRegion,
	jourCalendaire, numeroSecuriteSociale,
	melangeur
    };
};

//module.exports = FauxTexte;
export default FauxTexte;
