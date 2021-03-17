import React, {createContext, useReducer, useState} from 'react';
import {useHistory} from "react-router-dom";
import FauxTexte from 'outils/FauxTexte';
import ModeleConcessionnaire from 'composants/ModeleConcessionnaire';
import vainqueurs from 'composants/vainqueurs';


const triGerants = (a,b) => a.mensuel - b.mensuel || a.neufs - b.neufs || a.occasions - b.occasions;
const triUrls = (a,b) => a.url.localeCompare(b.url);
const triPostal = (a, b) => a.codePostal.localeCompare(b.codePostal);
const triSimple = (a,b) => a.ville.localeCompare(b.ville);
const triConcession = (a,b) => a.bilanVentes.analyse.total - b.bilanVentes.analyse.total || a.bilanVentes.analyse.nombreNeufs - b.bilanVentes.analyse.nombreNeufs;


const reductionGenres = liste => liste.map(x => isNaN(x) ? 2 : Math.abs(x)%3);
const genresId = (listeGenres, faux) => listeGenres.map(x => ({genre:x, identifiant: faux.chaine(3)}));

const listeConcessionnaires = (liste, modeleConcessionnaire) => liste.map(({genre, identifiant}) => modeleConcessionnaire.getConcessionnaire(genre, identifiant)).sort(triConcession).reverse();
const liens = listeConcessionnaires => listeConcessionnaires.reduce((retour, x) => [...retour, x.lien], []).sort(triUrls);

const stock = listeConcessionnaires => listeConcessionnaires.reduce((retour, x) => [...retour, x.bilanStock.stock], []);

const resume = listeConcessionnaires => listeConcessionnaires.reduce((retour, {nom, ville, gerant, adresse, fournisseurs,  lien, bilanVentes, bilanStock}) => [...retour, {lien:lien, nom:nom, nomGerant:gerant.nom, codePostal: ville.codePostal, ville:ville.nom, courriel:adresse.courriel, fournisseurs:fournisseurs.length, bilanStock:bilanStock, bilanVentes:bilanVentes}], []);//.sort(triPostal);

const villes = listeConcessionnaires => listeConcessionnaires.reduce((retour, {ville, identifiant}) => [...retour, {ville:ville.nom, codePostal:ville.codePostal, identifiant:identifiant, departement:ville.numeroDepartement, region:ville.nomRegion}], []).sort(triSimple);

const communes = villes => new Set(villes.map(x => x.ville));
const departements = villes => new Set(villes.map(x => x.departement));
const regions = villes => new Set(villes.map(x => x.region));

const gerants = listeConcessionnaires => listeConcessionnaires.reduce((retour, {lien, nom, ville, gerant, bilanVentes}) => [...retour, {lien:lien, gerant:gerant, entreprise:nom, ville:ville, total:bilanVentes.analyse.total, mensuel:bilanVentes.mensuel, neufs:bilanVentes.analyse.nombreNeufs, occasions:bilanVentes.analyse.nombreOccasions}], []).sort(triGerants).reverse();

const bilans = listeConcessionnaires => listeConcessionnaires.reduce((retour, {bilanVentes, bilanStock}) => {
    ++retour.nombre ;
    retour.clients += bilanVentes.analyse.total;
    retour.clientsNeufs += bilanVentes.analyse.nombreNeufs;
    retour.clientsOccasions += bilanVentes.analyse.nombreOccasions;
    retour.stock += bilanStock.analyse.total;
    retour.stockNeufs += bilanStock.analyse.nombreNeufs;
    retour.stockOccasions += bilanStock.analyse.nombreOccasions;
    bilanVentes.booleen ? ++retour.positif : ++retour.negatif;
    return retour;   
}, {nombre:0, clients:0, clientsNeufs:0, clientsOccasions:0, stock:0, stockNeufs:0, stockOccasions:0, positif:0, negatif:0,
   });


const ventesGlobales = listeConcessionnaires => listeConcessionnaires.reduce((retour, {bilanVentes}) => {
    ++retour.nombre;
    retour.total += bilanVentes.analyse.total;
    retour.nombreNeufs += bilanVentes.analyse.nombreNeufs;
    retour.nombreOccasions += bilanVentes.analyse.nombreOccasions;

    bilanVentes.booleen ? ++retour.positif : ++retour.negatif;
    retour.resultats = [...retour.resultats, bilanVentes.analyse.total];
    
    retour.nombreMarques = new Set([...retour.nombreMarques, ...bilanVentes.analyse.nombreMarques]);
    retour.nombreTypes = new Set([...retour.nombreTypes, ...bilanVentes.analyse.nombreTypes]);
    retour.nombreMotorisations = new Set([...retour.nombreMotorisations, ...bilanVentes.analyse.nombreMotorisations]);

    let nombreMarquesNeufs = [...bilanVentes.analyse.nombreMarquesNeufs.keys()];
    nombreMarquesNeufs.forEach(x => retour.nombreMarquesNeufs.has(x) ? retour.nombreMarquesNeufs.set(x, retour.nombreMarquesNeufs.get(x) + bilanVentes.analyse.nombreMarquesNeufs.get(x)) : retour.nombreMarquesNeufs.set(x, bilanVentes.analyse.nombreMarquesNeufs.get(x)));

    let nombreMarquesOccasions = [...bilanVentes.analyse.nombreMarquesOccasions.keys()];
    nombreMarquesOccasions.forEach(x => retour.nombreMarquesOccasions.has(x) ? retour.nombreMarquesOccasions.set(x, retour.nombreMarquesOccasions.get(x) + bilanVentes.analyse.nombreMarquesOccasions.get(x)) : retour.nombreMarquesOccasions.set(x, bilanVentes.analyse.nombreMarquesOccasions.get(x)));
    
    let nombreTypesNeufs = [...bilanVentes.analyse.nombreTypesNeufs.keys()];
    nombreTypesNeufs.forEach(x => retour.nombreTypesNeufs.has(x) ? retour.nombreTypesNeufs.set(x, retour.nombreTypesNeufs.get(x) + bilanVentes.analyse.nombreTypesNeufs.get(x)) : retour.nombreTypesNeufs.set(x, bilanVentes.analyse.nombreTypesNeufs.get(x)));

    let nombreTypesOccasions = [...bilanVentes.analyse.nombreTypesOccasions.keys()];
    nombreTypesOccasions.forEach(x => retour.nombreTypesOccasions.has(x) ? retour.nombreTypesOccasions.set(x, retour.nombreTypesOccasions.get(x) + bilanVentes.analyse.nombreTypesOccasions.get(x)) : retour.nombreTypesOccasions.set(x, bilanVentes.analyse.nombreTypesOccasions.get(x)));

    let nombreMotorisationsNeufs = [...bilanVentes.analyse.nombreMotorisationsNeufs.keys()];
    nombreMotorisationsNeufs.forEach(x => retour.nombreMotorisationsNeufs.has(x) ? retour.nombreMotorisationsNeufs.set(x, retour.nombreMotorisationsNeufs.get(x) + bilanVentes.analyse.nombreMotorisationsNeufs.get(x)) : retour.nombreMotorisationsNeufs.set(x, bilanVentes.analyse.nombreMotorisationsNeufs.get(x)));

    let nombreMotorisationsOccasions = [...bilanVentes.analyse.nombreMotorisationsOccasions.keys()];
    nombreMotorisationsOccasions.forEach(x => retour.nombreMotorisationsOccasions.has(x) ? retour.nombreMotorisationsOccasions.set(x, retour.nombreMotorisationsOccasions.get(x) + bilanVentes.analyse.nombreMotorisationsOccasions.get(x)) : retour.nombreMotorisationsOccasions.set(x, bilanVentes.analyse.nombreMotorisationsOccasions.get(x)));

    let nombreKmsOccasions = [...bilanVentes.analyse.nombreKmsOccasions.keys()];
    nombreKmsOccasions.forEach(x => retour.nombreKmsOccasions.has(x) ? retour.nombreKmsOccasions.set(x, retour.nombreKmsOccasions.get(x) + bilanVentes.analyse.nombreKmsOccasions.get(x)) : retour.nombreKmsOccasions.set(x, bilanVentes.analyse.nombreKmsOccasions.get(x)));
    
    return retour;    
}, {
    nombre:0, total:0, nombreNeufs:0, nombreOccasions:0,
    positif:0, negatif:0, resultats: [],
    nombreMarques: new Set(), nombreTypes: new Set(), nombreMotorisations: new Set(),
    nombreMarquesNeufs: new Map(), nombreMarquesOccasions:new Map(),
    nombreTypesNeufs: new Map(), nombreTypesOccasions:new Map(),
    nombreMotorisationsNeufs: new Map(), nombreMotorisationsOccasions:new Map(),
    nombreKmsOccasions:new Map()
});

const inventaireGlobal = listeConcessionnaires => listeConcessionnaires.reduce((retour, {bilanStock}) => {
    ++retour.nombre;
    retour.total += bilanStock.analyse.total;
    retour.nombreNeufs += bilanStock.analyse.nombreNeufs;
    retour.nombreOccasions += bilanStock.analyse.nombreOccasions;
    
    retour.nombreMarques = new Set([...retour.nombreMarques, ...bilanStock.analyse.nombreMarques]);
    retour.nombreTypes = new Set([...retour.nombreTypes, ...bilanStock.analyse.nombreTypes]);
    retour.nombreMotorisations = new Set([...retour.nombreMotorisations, ...bilanStock.analyse.nombreMotorisations]);

    let nombreMarquesNeufs = [...bilanStock.analyse.nombreMarquesNeufs.keys()];
    nombreMarquesNeufs.forEach(x => retour.nombreMarquesNeufs.has(x) ? retour.nombreMarquesNeufs.set(x, retour.nombreMarquesNeufs.get(x) + bilanStock.analyse.nombreMarquesNeufs.get(x)) : retour.nombreMarquesNeufs.set(x, bilanStock.analyse.nombreMarquesNeufs.get(x)));

    let nombreMarquesOccasions = [...bilanStock.analyse.nombreMarquesOccasions.keys()];
    nombreMarquesOccasions.forEach(x => retour.nombreMarquesOccasions.has(x) ? retour.nombreMarquesOccasions.set(x, retour.nombreMarquesOccasions.get(x) + bilanStock.analyse.nombreMarquesOccasions.get(x)) : retour.nombreMarquesOccasions.set(x, bilanStock.analyse.nombreMarquesOccasions.get(x)));
    
    let nombreTypesNeufs = [...bilanStock.analyse.nombreTypesNeufs.keys()];
    nombreTypesNeufs.forEach(x => retour.nombreTypesNeufs.has(x) ? retour.nombreTypesNeufs.set(x, retour.nombreTypesNeufs.get(x) + bilanStock.analyse.nombreTypesNeufs.get(x)) : retour.nombreTypesNeufs.set(x, bilanStock.analyse.nombreTypesNeufs.get(x)));

    let nombreTypesOccasions = [...bilanStock.analyse.nombreTypesOccasions.keys()];
    nombreTypesOccasions.forEach(x => retour.nombreTypesOccasions.has(x) ? retour.nombreTypesOccasions.set(x, retour.nombreTypesOccasions.get(x) + bilanStock.analyse.nombreTypesOccasions.get(x)) : retour.nombreTypesOccasions.set(x, bilanStock.analyse.nombreTypesOccasions.get(x)));

    let nombreMotorisationsNeufs = [...bilanStock.analyse.nombreMotorisationsNeufs.keys()];
    nombreMotorisationsNeufs.forEach(x => retour.nombreMotorisationsNeufs.has(x) ? retour.nombreMotorisationsNeufs.set(x, retour.nombreMotorisationsNeufs.get(x) + bilanStock.analyse.nombreMotorisationsNeufs.get(x)) : retour.nombreMotorisationsNeufs.set(x, bilanStock.analyse.nombreMotorisationsNeufs.get(x)));

    let nombreMotorisationsOccasions = [...bilanStock.analyse.nombreMotorisationsOccasions.keys()];
    nombreMotorisationsOccasions.forEach(x => retour.nombreMotorisationsOccasions.has(x) ? retour.nombreMotorisationsOccasions.set(x, retour.nombreMotorisationsOccasions.get(x) + bilanStock.analyse.nombreMotorisationsOccasions.get(x)) : retour.nombreMotorisationsOccasions.set(x, bilanStock.analyse.nombreMotorisationsOccasions.get(x)));

    let nombreKmsOccasions = [...bilanStock.analyse.nombreKmsOccasions.keys()];
    nombreKmsOccasions.forEach(x => retour.nombreKmsOccasions.has(x) ? retour.nombreKmsOccasions.set(x, retour.nombreKmsOccasions.get(x) + bilanStock.analyse.nombreKmsOccasions.get(x)) : retour.nombreKmsOccasions.set(x, bilanStock.analyse.nombreKmsOccasions.get(x)));
    
    return retour;    
}, {
    nombre:0, total:0, nombreNeufs:0, nombreOccasions:0,
    nombreMarques: new Set(), nombreTypes: new Set(), nombreMotorisations: new Set(),
    nombreMarquesNeufs: new Map(), nombreMarquesOccasions:new Map(),
    nombreTypesNeufs: new Map(), nombreTypesOccasions:new Map(),
    nombreMotorisationsNeufs: new Map(), nombreMotorisationsOccasions:new Map(),
    nombreKmsOccasions:new Map()
});


const initialisation = (genres=[0]) => {

    let retour = {
	alea: vainqueurs(),
	concessionnaires: null,
	faux: null,
	genresId: null,
	genres: !genres ? [0] : reductionGenres(genres),
	getConcessionnaire: null,
	liens:null,
	modeleConcessionnaire:null,
	resume:null,
	stocks:null,
	seuil:null
    }
    retour.faux = retour.alea ? new FauxTexte(retour.alea) : new FauxTexte();
    retour.genresId = genresId(retour.genres, retour.faux);
    retour.modeleConcessionnaire = new ModeleConcessionnaire(retour.faux);
    retour.concessionnaires = listeConcessionnaires(retour.genresId, retour.modeleConcessionnaire);
    retour.liens = liens(retour.concessionnaires);
    retour.stocks = stock(retour.concessionnaires);
    retour.resume = resume(retour.concessionnaires);
    retour.villes = villes(retour.concessionnaires);
    retour.bilans = bilans(retour.concessionnaires);
    retour.gerants = gerants(retour.concessionnaires);
    retour.seuil = retour.modeleConcessionnaire.getSeuilVentes();
    retour.bilans.seuil = retour.modeleConcessionnaire.getSeuilVentes();
    retour.departements = departements(retour.villes).size;
    retour.communes = communes(retour.villes).size;
    retour.regions = regions(retour.villes).size;
    retour.ventesGlobales = ventesGlobales(retour.concessionnaires);
    retour.inventaireGlobal = inventaireGlobal(retour.concessionnaires);
    return retour;
};

const reducteur = (etat, action) => {
    let {type, payload} = action;
    let {champ, valeur} = payload;
    switch(type) {
    case 'seed':
	let _faux = new FauxTexte(valeur);
	let _genresId = genresId(etat.genres, _faux);
	let _modeleConcessionnaire = new ModeleConcessionnaire(_faux);
	let _concessionnaires = listeConcessionnaires(_genresId, _modeleConcessionnaire);
	let _liens = liens(_concessionnaires);
	let _stocks = stock(_concessionnaires);
	let _resume = resume(_concessionnaires);
	let _villes = villes(_concessionnaires);
	let _departements = departements(_villes);
	let _communes = communes(_villes);
	let _regions = regions(_villes);
	let _bilans = bilans(_concessionnaires);
	let _seuil = _modeleConcessionnaire.getSeuilVentes();
	let _gerants = gerants(_concessionnaires);
	let _ventesGlobales = ventesGlobales(_concessionnaires);
	let _inventaireGlobal = inventaireGlobal(_concessionnaires);
	_bilans.seuil = _seuil;
	return {...etat, alea:valeur, faux:_faux, genresId: _genresId, modeleConcessionnaire: _modeleConcessionnaire, concessionnaires: _concessionnaires, liens: _liens, stocks: _stocks, resume: _resume, villes: _villes, bilans: _bilans, seuil:_seuil, gerants:_gerants, communes:_communes.size, departements:_departements.size, regions:_regions.size, ventesGlobales:_ventesGlobales, inventaireGlobal:_inventaireGlobal};
    case 'concessionnaires':
	return {...etat, lignes: valeur};
    default:
	return etat;
    }
};

const PourvoyeurProvider = props => {

    const {listeGenres} = props;
        
    const [infos, setInfos] = useReducer(reducteur, initialisation(listeGenres));
    const {alea, faux, concessionnaires, liens,  resume, stocks, villes, bilans, gerants, seuil, communes, departements, regions, ventesGlobales, inventaireGlobal} = infos;

    
    const histoire = useHistory();

    const changementAlea = chaine => {
	if(chaine === alea) {
	    return null;
	}
	setInfos({type:'seed', payload: {champ:'alea', valeur: chaine}});
    };

    return (
	<Pourvoyeur.Provider value={{alea, faux, concessionnaires, changementAlea,  liens,  resume, stocks, villes, bilans, gerants, seuil, communes, departements, regions, ventesGlobales, inventaireGlobal}}>
	    {props.children}
	</Pourvoyeur.Provider>
    );
};

export const Pourvoyeur = createContext();
export default PourvoyeurProvider;
