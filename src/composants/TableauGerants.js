import React, {useContext, useReducer, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";



const triTableau = (objetMap, defaut) => _discriminant =>  {
    let discriminant = objetMap.has(_discriminant) ? _discriminant : defaut;
    let retour = objetMap.get(discriminant);
    retour.booleen = !retour.booleen;
    objetMap.set(discriminant, retour);
    return retour;   
};

const _colonnesGerants = [
    ["rang",{booleen:true, tri: (a,b) => a.total - b.total || a.mensuel - b.mensuel}],

    ["nom",{booleen:false, tri:(a,b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom) || a.total - b.total}],
    ["prenom",{booleen:false, tri: (a,b) => a.prenom.localeCompare(b.prenom) || a.nom.localeCompare(b.nom) || a.total - b.total}],
    ["total",{booleen:false, tri: (a,b) => a.total - b.total || a.mensuel - b.mensuel}],
    ["mensuel",{booleen:false, tri: (a,b) => a.mensuel - b.mensuel || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom)}],
    ["neufs",{booleen:false, tri: (a,b) => a.neufs - b.neufs || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom)}],
    ["occasions",{booleen:false, tri: (a,b) => a.occasions - b.occasions || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom)}],
    ["entreprise",{booleen:false, tri: (a,b) => a.entreprise.localeCompare(b.entreprise) || a.region.localeCompare(b.region) || a.ville.localeCompare(b.ville)}],
    ["departement",{booleen:false, tri: (a,b) => a.departement.localeCompare(b.departement)}],
    ["region",{booleen:false, tri: (a,b) => parseInt(a.regionAlphabetique, 10) - parseInt(b.regionAlphabetique, 10)}]
];

const triGerants = new Map(_colonnesGerants);

let fonctionTri = triTableau(triGerants, "rang");

const initialisation = (gerants) => {

    const valeursInitiales = {
	gerants:gerants,
	donnees: gerants.reduce((retour, {lien, ville, gerant, entreprise, total, neufs, occasions, mensuel}, index) => [...retour, {rang:index+1, entreprise:entreprise, nom:gerant.nom, prenom:gerant.prenom, departement:ville.numeroDepartement, region:ville.nomRegion, regionAlphabetique:ville.regionAlphabetique, ville:ville.nom, total:total, neufs:neufs, occasions:occasions, mensuel:mensuel, lien:lien}], [])//.reverse()	
    };
    valeursInitiales.tri = valeursInitiales.donnees;
    return valeursInitiales;
};

const reducteur = (etat, action) => {

    let {type, payload} = action;
    let {valeur} = payload;
    let {donnees} = etat;

    switch(type){
    case 'tri':
	let {booleen, tri} = fonctionTri(valeur);
	let lignesTriees = booleen ? etat.donnees.sort(tri) : etat.donnees.sort(tri).reverse();
	return {...etat, tri:lignesTriees};
    default:
	return etat;
    }
};


const TableauGerants = ({gerants}) => {

    const historique = useHistory();
    
    const [triDonnees, setTriDonnees] = useReducer(reducteur, initialisation(gerants));
    const {donnees} = triDonnees;

    const nouveauTri = (discriminant) => setTriDonnees({type: 'tri', payload:{valeur: discriminant}});

    // const voirConcession = lien => {
    // 	console.log(lien);
    // };

    //const voirConcession = lien => historique.push(lien.url);

    const miseEnForme = lignes => {
	return lignes.map((ligne, index) => {
	    let {lien, rang, entreprise, nom, prenom, departement, region, ville, total, neufs, occasions, mensuel} = ligne;
	    departement = String(departement).padStart(2,'0');

	    return (
		<tr key={index}>
		    <td className="rang">{rang}</td>
		    <td className="nom">{nom}</td>
		    <td className="prenom">{prenom}</td>
		    <td className="total">{total}</td>
		    <td className="mensuel">{(mensuel).toFixed(2).replace('.',',')}</td>
		    <td className="neufs">{neufs}</td>
		    <td className="occasions">{occasions}</td>
		    <td className="entreprise" onClick={(e) => historique.push(lien.url)}>{entreprise}</td>
		    <td className="dpt">{departement}</td>
		    <td className="region">{region}</td>

		</tr>
	    );
	});
    };

    return (
	<article className="gerants">
	    <h1>Gérants</h1>
	    <table className="tableauGerants">
		<thead>
		    <tr>
			<th  onClick={() => nouveauTri('rang')}>Rang</th>
			<th  onClick={() => nouveauTri('nom')}>Nom</th>
			<th  onClick={() => nouveauTri('prenom')}>Prénom</th>
			<th  onClick={() => nouveauTri('total')}>Total</th>
			<th  onClick={() => nouveauTri('mensuel')}>Mensuel</th>
			<th  onClick={() => nouveauTri('neufs')}>Neufs</th>
			<th  onClick={() => nouveauTri('occasions')}>Occasions</th>
			<th  onClick={() => nouveauTri('entreprise')}>Entreprise</th>
			<th  onClick={() => nouveauTri('departement')}>Département</th>
			<th  onClick={() => nouveauTri('region')}>Région</th>

		    </tr>
		</thead>
		<tbody>
		    {miseEnForme(donnees)}
		</tbody>
	    </table>
	</article>
    );
};

export default TableauGerants;
