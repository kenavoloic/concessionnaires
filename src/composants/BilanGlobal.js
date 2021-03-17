import React from "react";
import {NavLink, useHistory} from "react-router-dom";

const BilanGlobal = ({donnees, villes, seuil}) => {
    const {nombre, clients, clientsNeufs, clientsOccasions, stock, stockNeufs, stockOccasions} = donnees;

    let totalStock = stock;
    let moyenne = (clients/12.0).toFixed(3);
    let ratioVentes = (clients/nombre).toFixed(3);
    
    let cities = villes.map(x => x.ville);

    let liens = villes.map(x =>	<NavLink key={x.codePostal} to={`/${x.codePostal}_${x.identifiant}`} activeClassName="actif" className="inactif">{x.ville}</NavLink>);

    const historique = useHistory();

    let enlaces = villes.map(x => <div key={x.identifiant} className="ville" onClick={(e) => historique.push(`/${x.codePostal}_${x.identifiant}`)}>{x.ville}</div>);

    return (
	<article className="basDePage">
	    {/*
	       <section id="concessions">
	       <div className="titre">Concessions</div>
	       <div className="item">
	       <div className="intitule">Nombre</div>
	       <div className="valeur">{nombre}</div>
	       </div>
	       <div className="item">
	       <div className="intitule">Ventes cumulées</div>
	       <div className="valeur">{clients}</div>
	       </div>
	       <div className="item">
	       <div className="intitule">Stocks cumulés</div>
	       <div className="valeur">{totalStock}</div>
	       </div>
	       <div className="item">
	       <div className="intitule">Objectif mensuel</div>
	       <div className="valeur">{seuil}</div>
	       </div>
	       </section>
	    
	    <section id="ventes">
		<div className="titre">Ventes</div>
		<div className="item">
		    <div className="intitule">Neufs</div>
		    <div className="valeur">{clientsNeufs}</div>
		</div>

		<div className="item">
		    <div className="intitule">Occasions</div>
		    <div className="valeur">{clientsOccasions}</div>
		</div>


		<div className="item">
		    <div className="intitule">Par concession</div>
		    <div className="valeur">{ratioVentes}</div>
		</div>

		<div className="item">
		    <div className="intitule">Moyenne mensuelle</div>
		    <div className="valeur">{moyenne}</div>
		</div>


	    </section>
	    <section id="stock">
		<div className="titre">Stock</div>
		<div className="item">
		    <div className="intitule">Neufs</div>
		    <div className="valeur">{stockNeufs}</div>
		</div>

		<div className="item">
		    <div className="intitule">Occasions</div>
		    <div className="valeur">{stockOccasions}</div>
		</div>

		<div className="item">
		    <div className="intitule">Par concession</div>
		    <div className="valeur">{((stockNeufs+stockOccasions)/nombre).toFixed(2)}</div>
		</div>


	    </section>
	     */}
	    <section id="communes">
		<div className="titre">Communes</div>
		{enlaces}
	    </section>

	</article>
    );
};

export default BilanGlobal;
