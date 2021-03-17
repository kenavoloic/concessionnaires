import React, {useContext, useState} from "react";
import PourvoyeurProvider, {Pourvoyeur} from 'composants/Pourvoyeur';
import {Route} from "react-router-dom";
import Concessionnaire from 'composants/Concessionnaire';
import Accueil from 'composants/Accueil';
import TableauGerants from 'composants/TableauGerants';
import Analyses from 'composants/Analyses';

const Routeur = () => {
    let {concessionnaires, gerants, resume} = useContext(Pourvoyeur);    
    let accueil = <Route path={"/"} key={"accueil"} exact={true}><Accueil resume={resume} /></Route>;
    let _gerants = <Route path={"/gerants"} key={"gerants"} exact={true}><TableauGerants gerants={gerants} /></Route>;
    let _analyses = <Route path={"/analyses"} key={"analyses"} exact={true}><Analyses /></Route>;
    let liste = concessionnaires.map((x, index) => {
	return (
	    <Route path={`/${x.ville.codePostal}_${x.identifiant}`} key={`${index}_x.ville.codePostal`}>
		<Concessionnaire donnees={x}  />
	    </Route>
	);
    });
    return [accueil, _gerants, _analyses, ...liste];
};

export default Routeur;
