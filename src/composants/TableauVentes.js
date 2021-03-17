import React, {useReducer, useState, useContext} from "react";
import ReactDOM from "react-dom";
import {capitale} from "outils/OutilsTexte";
import Boutons from 'composants/Boutons';
import BoutonsInactifs from 'composants/BoutonsInactifs';
import BilanVentes from 'composants/BilanVentes';

const chaine = discriminant => (x,y) => (x[discriminant]).localeCompare(y[discriminant]);
const entier = discriminant => (x,y) => parseInt(x[discriminant],10) - parseInt(y[discriminant],10);

const triTableau = (objetMap, defaut) => _discriminant =>  {
    let discriminant = objetMap.has(_discriminant) ? _discriminant : defaut;
    let retour = objetMap.get(discriminant);
    retour.booleen = !retour.booleen;
    objetMap.set(discriminant, retour);
    return retour;   
};

const _colonnesVentes = [
    ["numero",{booleen:true, tri:entier("numero")}],
    ["marque",{booleen:false, tri:chaine("marque")}],
    ["type",{booleen:false, tri:chaine("type")}],
    ["motorisation",{booleen:false, tri:chaine("motorisation")}],
    ["km",{booleen:false, tri:entier("km")}],
    ["annee",{booleen:false, tri:entier("annee")}]
];

const triVentes = new Map(_colonnesVentes);

let fonctionTri = triTableau(triVentes, "numero");

const initialisation = ({donnees, parPage}) => {
    const valeursInitiales = {
	donnees : donnees,
	parPage: parPage,
	nombrePages: Math.ceil(donnees.length/parPage),
	portion: donnees.slice(0, parPage),
	page: 0
    };
    return valeursInitiales;
};

const reducteur = (etat, action) => {
    let {type, payload } = action;
    let {valeur}  = payload;
    let {donnees, parPage, nombrePages, portion, page} = etat;
    switch(type){
    case 'decrementer':
	let p1 = (page === 0) ? 0 : page - 1;
	let portion1 = donnees.slice(p1*parPage, (p1 + 1) * parPage);
	return {...etat, page: p1, portion: portion1};
    case 'incrementer':
	let p2 = (page === nombrePages - 1) ? page : page + 1;
	let portion2 = donnees.slice(p2*parPage, (p2 + 1) * parPage);
	return {...etat, page: p2, portion: portion2}
    case 'pagination':
	let _portion = donnees.slice(0, valeur);
	return {...etat, parPage: valeur, nombrePages: Math.ceil(donnees.length/parPage), portion: _portion, page: 0};
    case 'saut':
	let saut = valeur % nombrePages;
	let _portionSaut = donnees.slice(saut*parPage, (saut + 1) * parPage);
	return {...etat, page: saut, portion:_portionSaut};
    case 'triEffectue':
	return {...etat, portion: valeur};
    default:
	return etat;
    };
};

const TableauVentes = ({bilanVentes, clef, parPage}) => {

    const _donnees = bilanVentes.ventes.reduce((retour, {rang, facture}) => [...retour, {rang:rang, client:facture.client, marque:facture.marque, type:facture.type, motorisation:facture.motorisation, km:facture.km, annee:facture.annee}], []);
    const listeClients = bilanVentes.ventes.reduce((retour, {numero, facture, nom, prenom, civilite, courriel, ville, adresse}) => retour.set(numero, {numero:numero, nom:nom, prenom:prenom, civilite:civilite, achat:facture.achat, courriel:courriel, ville:ville.nom, codePostal:ville.codePostal, adresse:adresse.chaine}), new Map());
    
    const ventesAnnuelles = bilanVentes.analyse.total;
    const vehiculesNeufs = bilanVentes.analyse.nombreNeufs;
    const vehiculesOccasion = bilanVentes.analyse.nombreOccasions;
    const bilan = {annuel:ventesAnnuelles, neufs:vehiculesNeufs, occasions:vehiculesOccasion};

    
    const [pagination, setPagination ] = useReducer(reducteur, initialisation({donnees:_donnees, parPage:parPage}));
    const {portion, page, nombrePages} = pagination;
    const [informationsClient, setInformationsClient] = useState(null);

    const decrementer = () => 	setPagination({type: 'decrementer', payload: {valeur: null}});
    const incrementer = () => 	setPagination({type: 'incrementer', payload: {valeur: null}});

    const changementParPage = (valeur) => setPagination({type: 'pagination', payload: {valeur: valeur}});
    const saut = (valeur) => setPagination({type: 'saut', payload: {valeur: valeur}});
    const triEffectue = (valeur) => setPagination({type: 'triEffectue', payload: {valeur: valeur}});

    const nouveauTri = colonne => {
	let {booleen, tri} = fonctionTri(colonne);
	let lignesTriees = booleen ? portion.sort(tri) : portion.sort(tri).reverse();
	triEffectue([...lignesTriees]);
    };

    const nouvellePagination = e => {
	if (e.target.validity.valid && e.target.value > 9){
	    changementParPage(e.target.value);
	}
    };

    const voirClient = index => {
	if(listeClients.has(index)){
	    setInformationsClient(listeClients.get(index));
	}
    };

    const affiche = ({numero, achat, nom, prenom, civilite, adresse, codePostal, ville, courriel}) => {
	return (
	    <dl className="informationsClient">
		<dt>{numero.toUpperCase()}</dt>
		<dd className="date">{achat.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'})}</dd>
		<dd className="personne">{civilite} {nom} {capitale(prenom)}</dd>
		<dd className="adresse">{adresse}</dd>
		<dd className="ville">{codePostal} {ville}</dd>
		<dd className="courriel">{courriel.toLowerCase()}</dd>
	    </dl>
	);
    };

    const _affiche = ({numero, achat, nom, prenom, civilite, adresse, codePostal, ville, courriel}) => {
	return (
	    <section className="informationsClient">
		<h2 className="numero">{numero.toUpperCase()}</h2>
		<h3>Identité</h3>
		<p className="date">Le {achat.toLocaleString('fr-FR', {day:'numeric', month:'long', year:'numeric'})}.</p>
		<p className="identite">{civilite} {nom} {capitale(prenom)}</p>
		<p className="adresse">{adresse}</p>
		<p className="ville">{codePostal} {ville}</p>
		<p className="courriel">{courriel.toLowerCase()}</p>
		<h3>Véhicule</h3>
	    </section>
	);
    };


    const miseEnForme = lignes => {
	return lignes.map(({rang, client, marque, type, motorisation, km, annee}, index) => {
	    return (
		<tr key={index}>
		    <td onClick={() => voirClient(client)} className="numero">{rang+1}</td>
		    <td onClick={() => voirClient(client)}  className="client">{client.toUpperCase()}</td>
		    <td onClick={() => voirClient(client)}  className="marques">{marque}</td>
		    <td onClick={() => voirClient(client)}  className="types">{type}</td>
		    <td onClick={() => voirClient(client)}  className="motorisations">{motorisation}</td>
		    <td onClick={() => voirClient(client)}  className="kms">{1000*km}</td>
		    <td onClick={() => voirClient(client)}  className="annees">{annee}</td>
		</tr>
	    );
	});
    };

    return (
	<article className="ventes">
	    {/* <Bilan bilan={bilan} seuil={bilanVentes.seuil} nom="idVentes" />*/}
	    <BilanVentes bilanVentes={bilanVentes} nom="idVentes" />
	    
	    {(nombrePages > 1) ? <Boutons  plus={incrementer} moins={decrementer} page={page} nombrePages={nombrePages} nouvellePagination={nouvellePagination} /> : <BoutonsInactifs />}

	    <table key={clef} className="tableauVentes">
		<thead>
		    <tr>
			<th className="th_numero" onClick={() => nouveauTri('numero')}>Rang</th>
			<th className="th_client" onClick={() => nouveauTri('client')}>Client</th>
			<th className="th_marque" onClick={() => nouveauTri('marque')}>Marque</th>
			<th className="th_type" onClick={() => nouveauTri('type')}>Type</th>
			<th className="th_motorisation" onClick={() => nouveauTri('motorisation')}>Motorisation</th>
			<th className="th_km" onClick={() => nouveauTri('km')}>Kilométrage</th>
			<th className="th_annee" onClick={() => nouveauTri('annee')}>Année</th>
		    </tr>
		</thead>
		<tbody>
		    {miseEnForme(portion)}
		</tbody>
	    </table>
	    {informationsClient ? affiche(informationsClient) : null}
	    
	</article>
    );
};

export default TableauVentes;
