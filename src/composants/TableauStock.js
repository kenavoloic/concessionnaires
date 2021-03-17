import React, {useReducer, useState, useContext} from "react";
import ReactDOM from "react-dom";
import Boutons from 'composants/Boutons';
import BoutonsInactifs from 'composants/BoutonsInactifs';
import BilanStock from 'composants/BilanStock';
const chaine = discriminant => (x,y) => (x[discriminant]).localeCompare(y[discriminant]);
const entier = discriminant => (x,y) => parseInt(x[discriminant],10) - parseInt(y[discriminant],10);

const triTableau = (objetMap, defaut) => _discriminant =>  {
    let discriminant = objetMap.has(_discriminant) ? _discriminant : defaut;
    let retour = objetMap.get(discriminant);
    retour.booleen = !retour.booleen;
    objetMap.set(discriminant, retour);
    return retour;   
};

const _colonnesStock = [
    ["numero",{booleen:false, tri:entier("numero")}],
    ["client",{booleen:false, tri:chaine("client")}],
    ["marque",{booleen:false, tri:chaine("marque")}],
    ["type",{booleen:false, tri:chaine("type")}],
    ["motorisation",{booleen:false, tri:chaine("motorisation")}],
    ["km",{booleen:false, tri:entier("km")}],
    ["annee",{booleen:false, tri:entier("annee")}]
];

const triStock = new Map(_colonnesStock);

let fonctionTri = triTableau(triStock, "numero");


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

const TableauStock = props => {

    const {bilanStock,  clef, parPage} = props;
    //    console.log(bilanStock.analyse);
    
    const [pagination, setPagination ] = useReducer(reducteur, initialisation({donnees:bilanStock.stock, parPage:parPage}));
    const {portion, page, nombrePages} = pagination;

    const decrementer = () => 	setPagination({type: 'decrementer', payload: {valeur: null}});
    const incrementer = () => 	setPagination({type: 'incrementer', payload: {valeur: null}});

    const changementParPage = (valeur) => setPagination({type: 'pagination', payload: {valeur: valeur}});
    const saut = (valeur) => setPagination({type: 'saut', payload: {valeur: valeur}});
    const triEffectue = (valeur) => setPagination({type: 'triEffectue', payload: {valeur: valeur}});

    const nouvellePagination = e => {
	if (e.target.validity.valid && e.target.value > 9){
	    changementParPage(e.target.value);
	    //e.target.value = e.target.value;
	}
    };


    const nouveauTri = colonne => {
	//console.log(colonne);
	let {booleen, tri} = fonctionTri(colonne);
	let lignesTriees = booleen ? portion.sort(tri) : portion.sort(tri).reverse();
	triEffectue([...lignesTriees]);
    };
    

    const miseEnForme = lignes => {
	return lignes.map(ligne => {
	    let {numero, marque, type, motorisation, km, annee} = ligne;
	    return (
		<tr key={numero}>
		    <td className="numero">{numero+1}</td>
		    <td className="marques">{marque}</td>
		    <td className="types">{type}</td>
		    <td className="motorisations">{motorisation}</td>
		    <td className="kms">{km * 1000}</td>
		    <td className="annees">{annee}</td>
		</tr>
	    );
	});
    };

    return (
	<article className="stock">
	    {/*   <BilanStock stock={bilanStock.analyse.total} marques={bilanStock.analyse.nombreMarques.length} motorisations={bilanStock.analyse.nombreMotorisations.length} neufs={bilanStock.analyse.nombreNeufs} occasions={bilanStock.analyse.nombreOccasions} types={bilanStock.analyse.nombreTypes.length} /> */}
	    <BilanStock analyse={bilanStock.analyse} />
	    
	    {(nombrePages > 1) ? <Boutons  plus={incrementer} moins={decrementer} page={page} nombrePages={nombrePages} nouvellePagination={nouvellePagination} /> : <BoutonsInactifs />}

	    <table key={clef} className="tableauStock">
		<thead>
		    <tr>
			<th className="th_stock" onClick={() => nouveauTri('numero')}>Rang</th>
			<th className="th_stock" onClick={() => nouveauTri('marque')}>Marque</th>
			<th className="th_stock" onClick={() => nouveauTri('type')}>Type</th>
			<th className="th_stock" onClick={() => nouveauTri('motorisation')}>Motorisation</th>
			<th className="th_stock" onClick={() => nouveauTri('km')}>Kilométrage</th>
			<th className="th_stock" onClick={() => nouveauTri('annee')}>Année</th>
		    </tr>
		</thead>
		<tbody>
		    {miseEnForme(portion)}
		</tbody>
	    </table>
	</article>
    );
};

export default TableauStock;
