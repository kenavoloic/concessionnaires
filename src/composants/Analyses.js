import React, {useContext, useReducer, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import PourvoyeurProvider, {Pourvoyeur} from 'composants/Pourvoyeur';

const mediane = tableau => {
    let milieu = tableau.length * .5;
    return tableau.length % 2 ===0 ? (tableau[milieu] + tableau[milieu - 1])*.5 : tableau[parseInt(milieu, 10)];
};

const triUnite = (a,b) => b.unite - a.unite ;//|| b.marque.localeCompare(a.marque);

const blip = objetMap => [...objetMap.entries()].reduce((retour, [discriminant, unite]) => [...retour, {discriminant:discriminant, unite:unite}], []);

const Item = ({intitule, valeur}) => {
    return (
	<div className="item">
	    <div className="intitule">{intitule}</div>
	    <div className="valeur">{valeur}</div>
	</div>
    );
};

const Rubrique = ({intitule, valeur, identifiant}) => {
    return (
	<section className="rubrique" id={identifiant}>
	    <div className="rubriqueItem">
		<div className="rubriqueIntitule">{intitule}</div>
		<div className="rubriqueValeur">{valeur}</div>
	    </div>
	</section>
    );
};

const Items = ({objetMap, intitule}) => {
    let liste = blip(objetMap).sort(triUnite);
    let titre = <div className="itemsTitre" key={'intitule'}><div className="titre">{intitule}</div></div>
    let retour = liste.map((x, index) => <div className="items" key={index}><div className="terme">{x.discriminant}</div><div className="unite">{x.unite}</div></div>);
    return <div className="listeItems">{[titre, ...retour]}</div>;
};

const ItemsKms = ({objetMap}) => {
    let liste = blip(objetMap).sort(triUnite);
    let retour = liste.map((x, index) => <div className="items" key={index}><div className="terme">{x.discriminant}K</div><div className="unite">{x.unite}</div></div>);
    return <div className="listeItems">{retour}</div>;
};


const Analyses = () => {
    const {seuil, communes, departements, regions, ventesGlobales, inventaireGlobal} = useContext(Pourvoyeur);

    const resultatMedian = mediane(ventesGlobales.resultats.sort())/12.0;

    return (

	<main className="analytiques">

	    <h1><span>Analyses</span></h1>
	
	<article className="concessions">
	    
		<section className="titulo" id="concessions">Concessions</section>
		
		<section className="ligne" id="nombre">
		    <Item intitule={"Nombre"} valeur={ventesGlobales.nombre} />
		    <Item intitule={"Ventes cumulées"} valeur={ventesGlobales.total} />
		    <Item intitule={"Inventaires cumulés"} valeur={inventaireGlobal.total} />
		</section>

		<section className="ligne"  id="objectif">
		    <Item intitule={"Objectif mensuel"} valeur={seuil} />		    
		    <Item intitule={"Résultat médian"} valeur={(resultatMedian).toFixed(2)} />		    
		    <Item intitule={"Résultat moyen"} valeur={((ventesGlobales.total / ventesGlobales.nombre)/12.0).toFixed(2)} />
		    <Item intitule={"Résultat < 100%"} valeur={ventesGlobales.negatif} />		    
		    <Item intitule={"Résultat >= 100%"} valeur={ventesGlobales.positif} />		    		    
		</section>

		<section className="ligne"  id="localisation">
		    {communes < 2 ? <Item intitule={"Commune"} valeur={communes} /> : <Item intitule={"Communes"} valeur={communes} />}		    
		    {departements < 2 ? <Item intitule={"Département"} valeur={departements} /> : <Item intitule={"Départements"} valeur={departements} />}
		    {regions < 2 ? <Item intitule={"Région"} valeur={regions} /> : <Item intitule={"Régions"} valeur={regions} /> }		    
		</section>

	    </article>

	    <article className="ventes">
		
		<section className="titulo" id="ventes">Ventes</section>

		<section className="ligne">
		<Item intitule={"Total"} valeur={ventesGlobales.total} />
		<Item intitule={"Neufs"} valeur={ventesGlobales.nombreNeufs} />
		<Item intitule={"Occasions"} valeur={ventesGlobales.nombreOccasions} />
		</section>

		<section className="ligneTriple" id="marques">
		    <Rubrique intitule={"Marques"} valeur={ventesGlobales.nombreMarques.size} identifiant={"ventesMarques"}/>
		    <Items objetMap={ventesGlobales.nombreMarquesNeufs} intitule={"Neufs"} />
		    <Items objetMap={ventesGlobales.nombreMarquesOccasions} intitule={"Occasions"}/>
		</section>

		<section className="ligneTriple" id="types">
		    <Rubrique intitule={"Types"} valeur={ventesGlobales.nombreTypes.size} identifiant="ventesTypes"/>
		    <Items objetMap={ventesGlobales.nombreTypesNeufs}  intitule={"Neufs"} />
		    <Items objetMap={ventesGlobales.nombreTypesOccasions}  intitule={"Occasions"} />
		</section>

		<section className="ligneTriple" id="motorisation">
		    <Rubrique intitule={"Motorisations"} valeur={ventesGlobales.nombreMotorisations.size} identifiant="ventesMotorisations"/>
		    <Items objetMap={ventesGlobales.nombreMotorisationsNeufs}  intitule={"Neufs"}/>
		    <Items objetMap={ventesGlobales.nombreMotorisationsOccasions}  intitule={"Occasions"} />
		</section>

		<section className="ligneTriple">
		    <Rubrique valeur={ventesGlobales.nombreKmsOccasions.size}  intitule={"Occasions kilométrage"} identifiant="ventesKms" />
		    <ItemsKms objetMap={ventesGlobales.nombreKmsOccasions}  intitule={"Kilométrage véhicules occasions"}/>
		</section>
		
	    </article>



	    <article className="stock">
		
		<section className="titulo" id="ventes">Inventaires</section>

		<section className="ligne">
		    <Item intitule={"Total"} valeur={inventaireGlobal.total} />
		    <Item intitule={"Neufs"} valeur={inventaireGlobal.nombreNeufs} />
		    <Item intitule={"Occasions"} valeur={inventaireGlobal.nombreOccasions} />
		</section>

		<section className="ligneTriple" id="marques">
		    <Rubrique intitule={"Marques"} valeur={inventaireGlobal.nombreMarques.size} identifiant={"ventesMarques"}/>
		    <Items objetMap={inventaireGlobal.nombreMarquesNeufs} intitule={"Neufs"} />
		    <Items objetMap={inventaireGlobal.nombreMarquesOccasions} intitule={"Occasions"}/>
		</section>

		<section className="ligneTriple" id="types">
		    <Rubrique intitule={"Types"} valeur={inventaireGlobal.nombreTypes.size} identifiant="ventesTypes"/>
		    <Items objetMap={inventaireGlobal.nombreTypesNeufs}  intitule={"Neufs"} />
		    <Items objetMap={inventaireGlobal.nombreTypesOccasions}  intitule={"Occasions"} />
		</section>

		<section className="ligneTriple" id="motorisation">
		    <Rubrique intitule={"Motorisations"} valeur={inventaireGlobal.nombreMotorisations.size} identifiant="ventesMotorisations"/>
		    <Items objetMap={inventaireGlobal.nombreMotorisationsNeufs}  intitule={"Neufs"}/>
		    <Items objetMap={inventaireGlobal.nombreMotorisationsOccasions}  intitule={"Occasions"} />
		</section>

		<section className="ligneTriple">
		    <Rubrique valeur={inventaireGlobal.nombreKmsOccasions.size}  intitule={"Occasions kilométrage"} identifiant="ventesKms" />
		    <ItemsKms objetMap={inventaireGlobal.nombreKmsOccasions}  intitule={"Kilométrage véhicules occasions"}/>
		</section>
		
	    </article>


	</main>
    );
};

export default Analyses;
