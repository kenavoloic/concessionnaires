import React, {useState}  from "react";
import {Link} from 'react-router-dom';
//import {capitale} from 'outils/OutilsTexte';
import Identification from 'composants/Identification';
import TableauStock from 'composants/TableauStock';
import TableauVentes from 'composants/TableauVentes';
import Fournisseurs from 'composants/Fournisseurs';

const dateNaissance = date => `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

const Titre =({nom, ville}) => {
    
    return (
	<article className="titre">
	    <section className="nom">{nom}</section>
	    <section className="ville">{ville.nom} ({ville.numeroDepartement})</section>
	</article>
    );
};

const Concessionnaire = ({donnees}) => {

    const {identification, ape, nom, gerant, adresse, ville, clef, description, fournisseurs,  bilanVentes, bilanStock} = donnees;
    
    return (
	<main className="concessionnaire">
	    <Titre nom={nom} ville={ville} />
	    <Identification nom={nom} adresse={adresse} ville={ville} gerant={gerant} ape={ape}/>
	    <Fournisseurs liste={fournisseurs} />
	    <TableauVentes bilanVentes={bilanVentes} clef={clef} parPage={20}  />
	    <TableauStock bilanStock={bilanStock} clef={clef} parPage={20} />
	</main>
    );
};

export default Concessionnaire;
