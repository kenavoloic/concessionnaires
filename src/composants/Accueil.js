import React, {useContext, useState} from "react";
import Synthese from 'composants/Synthese';

const Accueil = ({resume}) => {
    const aujourdhui = new Date();
    const reference = new Date(aujourdhui.getTime());
    reference.setFullYear(aujourdhui.getFullYear() - 1);
    const chaine = reference.toLocaleString('fr-FR', {day:'numeric', month:'long', year:'numeric'});
    const hoy = aujourdhui.toLocaleString('fr-FR', {day:'numeric', month:'long', year:'numeric'});
    
    return (

	<article className="bilan">
	    <div id="h1">
		<span id="intitule">
		</span> <span id="periode">{hoy} — {chaine}</span>
	    </div>
	    <main className="accueil">
		{
		    resume.map((x, index) => <Synthese key={index} donnees={x} index={index} />)
		}
	    </main>
	</article>
    );
};

export default Accueil;
