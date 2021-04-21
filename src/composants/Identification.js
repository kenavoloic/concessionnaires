import React, {useState} from "react";
import {capitale} from 'outils/OutilsTexte';

const Identification = ({nom, adresse, ville, gerant, ape}) => {
    
    const [fermetureGlobale, setFermetureGlobale] = useState(false);
    const ouvertureFermetureGlobale = () => {
	setFermetureGlobale( !fermetureGlobale);
    };

    return (
	<article className="identite" onClick={ouvertureFermetureGlobale}>

	    <section className="titulo">Informations</section>
	    <article  className = {fermetureGlobale ? "voirIdentite" : "cacherIdentite"}>
		<dl>
		    <dt className="nom">{nom}</dt>
		    <dt className="ape">{ape.length < 2 ? "Secteur d’activité" : "Secteurs d’activité"}</dt>
		    {ape.map((x, index) => <dd key={index} className="ape">{x}.</dd>)}
	    <dt className="coordonnees">Coordonnées</dt>
	    <dd className="adresse">{adresse.chaine}</dd>
	    <dd className="codeNom">{ville.codePostal} {ville.nom}</dd>
	    <dd className="courriel">{gerant.courriel.toLowerCase()}</dd>
	    <dt className="gerance">{gerant.civilite === "Monsieur" ? "Gérant" : "Gérante"}</dt>
	    <dd className="gerant">{gerant.civilite} {capitale(gerant.prenom)} {capitale(gerant.nom)}</dd>
	<dd className="naissance">{gerant.civilite === "Monsieur" ? "Né" :"Née"} le {gerant.naissance.toLocaleString('fr-FR', {day:'numeric', month:'long', year:'numeric'})} à {gerant.villeNaissance.nom}, {gerant.villeNaissance.nomDepartement}.</dd>
		    <dd className="gerant">{gerant.ss}</dd>
		    <dd className="adresse">{gerant.adresse.chaine}</dd>
		<dd className="codeNom">{gerant.villeDomicile.codePostal} {gerant.villeDomicile.nom}</dd>
		</dl>
	    </article>
	</article>
    );
};

export default Identification;



