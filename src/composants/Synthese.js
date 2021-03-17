import React, {useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";


const Synthese = ({donnees, index}) => {

    const [fermetureGlobale, setFermetureGlobale] = useState(false);
    const {lien, nom, ville, codePostal, courriel, fournisseurs, bilanVentes, bilanStock} = donnees;
    const couleur = bilanVentes.booleen ? 'positif' : 'negatif';
    const historique = useHistory();
    
    return (

	<article key={index} className={`synthese ${couleur}`} onClick={(e) => historique.push(lien.url)}>

	    <article className="haut">
		<section className="nom">{nom}</section>
		<section className="codePostal">{codePostal}</section>
		<section className="ville">{ville}</section>
	    </article>

	    <article className="milieu">
		<section className="clients">
		    <div className="intitule">Ventes</div>
		    <div className={`nombre ${couleur}`}>{bilanVentes.analyse.total}</div>
		</section>

		<section className="nouveautes">
		    {bilanVentes.analyse.nombreNeufs < 2 ? <div className="intitule">Neuf</div> : <div className="intitule">Neufs</div>}
		    <div className="nombre">{bilanVentes.analyse.nombreNeufs}</div>
		</section>
		
		<section className="occasions">
		    {bilanVentes.analyse.nombreOccasions < 2 ? <div className="intitule">Occasion</div> : <div className="intitule">Occasions</div> }
		    <div className="nombre">{bilanVentes.analyse.nombreOccasions}</div>
		</section>
		{/*
		   <section className="marques">
		   <div className="intitule">Marques</div>
		   <div className="nombre">{bilanVentes.analyse.nombreMarques.length}</div>
		   </section>
		 */}


		<section className="mensuel">
		    <div className="intitule">Objectif</div>
		    <div className={`nombre ${couleur}`}>{(bilanVentes.mensuel).toFixed(2)}</div>
		</section>
	    </article>

	    <article className="bas">
		<section className="stock">
		    <div className="intitule">Stock</div>
		    <div className="nombre">{bilanStock.analyse.total}</div>
		</section>

		<section className="nouveautes">
		    {bilanStock.analyse.nombreNeufs < 2 ? <div className="intitule">Neuf</div> : <div className="intitule">Neufs</div>}
		    <div className="nombre">{bilanStock.analyse.nombreNeufs}</div>
		</section>
		
		<section className="occasions">
		    {bilanStock.analyse.nombreOccasions < 2 ? <div className="intitule">Occasion</div> : <div className="intitule">Occasions</div> }
		    <div className="nombre">{bilanStock.analyse.nombreOccasions}</div>
		</section>

		<section className="marques">
		    {bilanStock.analyse.nombreMarques.length < 2 ? <div className="intitule">Marque</div> : <div className="intitule">Marques</div>}
		    <div className="nombre">{bilanStock.analyse.nombreMarques.length}</div>
		</section>

		{/*		
				<section className="types">
				{bilanStock.analyse.nombreTypes.length < 2 ? <div className="intitule">Type</div> : <div className="intitule">Types</div> }
		    <div className="nombre">{bilanStock.analyse.nombreTypes.length}</div>
		</section>
		
		<section className="motorisations">
		    {bilanStock.analyse.nombreMotorisations.length < 2 ? <div className="intitule">Motorisation</div> : <div className="intitule">Motorisations</div> }
		    <div  className="nombre">{bilanStock.analyse.nombreMotorisations.length}</div>
		</section>
		 */}
	    </article>
	
	</article>
    );

};

export default Synthese;
