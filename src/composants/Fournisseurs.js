import React, {useReducer, useState} from "react";
import {capitale} from 'outils/OutilsTexte';

const triFournisseur = (a,b) => a.code.localeCompare(b.code);

const initialisation = (liste) => {
    let retour = {
	donnees: liste.sort(triFournisseur),
	nombre: liste.length,
	index:0,
	selection:null	
    };
    retour.resume = liste.map(x => ({code:x.code, nom:x.nom, booleen:false}));
    retour.selection = retour.donnees[retour.index];
    return retour;
};

const reducteur = (etat, action) => {
    let {type, payload} = action;
    let {valeur} = payload;
    switch(type){
    case 'selection':
	let _selection = etat.donnees[valeur];
	return {...etat, index:valeur,selection:_selection};
    default:
	return etat;
    }
};

const Fournisseurs = ({liste}) => {
    const [affichage, setAffichage] = useReducer(reducteur, initialisation(liste));
    const {selection} = affichage;

    const [fermetureGlobale, setFermetureGlobale] = useState(false);
    const ouvertureFermetureGlobale = () => {
	setFermetureGlobale( !fermetureGlobale);
    };
    

    const onchange = index => {
	setAffichage({type:'selection', payload:{valeur:index}});
    };


    const mep2 = liste => {
	return liste.map((x, index) => {
	    return (
		<dd key={index} name={`x.code-${index}`}>
		    <label onClick={() => onchange(index)}>	
			<span className="code">{x.code}</span> <span className="nom">{x.nom}</span>
		    </label>		
		</dd>
	    );
	});
    };

    const mep = liste => {
	return liste.map((x, index) => {
	    return (
		<dd key={index} name={`x.code-${index}`} onClick={() => onchange(index)}>
		    <span className="code">{x.code}</span> <span className="nom">{x.nom}</span>
		</dd>
	    );
	});
    };


    const fournisseur = liste => {
	let {nom, ville, adresse, gerant, code} = liste;

	return (
	    <dl>
		<dt><span className="dxcode">{code}</span></dt>
		<dd>{nom}</dd>
		<dd>{adresse.chaine}</dd>
		<dd>{ville.codePostal} {ville.nom}</dd>
		<dd className="gerant">{gerant.civilite} {capitale(gerant.prenom)} {capitale(gerant.nom)}</dd>
		<dd>{gerant.courriel}</dd>

	    </dl>
	);
    };

    return (
	<article className="fournisseurs">
	    {/*<article className="titre" >*/}
	    {/*<span className="intitule">Fournisseurs</span>*/}
	    <section className="titulo"  onClick={ouvertureFermetureGlobale}>Fournisseurs</section>
	    {/*</article>*/}
	    <article className = {fermetureGlobale ? "voirFournisseurs" : "cacherFournisseurs"}>
		<section className="liste">
		    <dl>
			{mep(liste)}
		    </dl>
		</section>
	    {selection ? <section className="details"> {fournisseur(selection)} </section> : null}
	</article>
	</article>
    );
};

export default Fournisseurs;
