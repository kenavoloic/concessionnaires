import React from "react";

const Bilan = ({bilanVentes, nom}) => {
    let mensuel = (bilanVentes.mensuel).toFixed(2);//;(bilan.annuel / 12.0).toFixed(2);
    return (
	<dl className="quantitatif" id={nom}>
	    <dt className="titre">Ventes</dt>
	    <dt className="annuel">Annuelles</dt>
	    <dd>{bilanVentes.analyse.total}</dd>
	    
	    <dt className="mensuel">Mensuelles</dt>
	    {bilanVentes.booleen ? <dd className="vert">{mensuel}</dd> : <dd className="rouge">{mensuel}</dd>}
	    
	    {bilanVentes.analyse.nombreNeufs < 2 ? <dt className="neufs">Neuf</dt> : <dt className="neufs">Neufs</dt>}
	    <dd>{bilanVentes.analyse.nombreNeufs}</dd>
	    
	    {bilanVentes.analyse.nombreOccasions < 2 ? <dt className="neufs">Occasion</dt> : <dt className="neufs">Occasions</dt>}
	    <dd>{bilanVentes.analyse.nombreOccasions}</dd>

	    {bilanVentes.analyse.nombreTypes.length < 2 ? <dt className="neufs">Type</dt> : <dt className="neufs">Types</dt>}
	    <dd>{bilanVentes.analyse.nombreTypes.length}</dd>

	    {bilanVentes.analyse.nombreMarques.length < 2 ? <dt className="neufs">Marque</dt> : <dt className="neufs">Marques</dt>}
	    <dd>{bilanVentes.analyse.nombreMarques.length}</dd>

	    {bilanVentes.analyse.nombreMotorisations.length < 2 ? <dt className="neufs">Motorisation</dt> : <dt className="neufs">Motorisations</dt>}
	    <dd>{bilanVentes.analyse.nombreMotorisations.length}</dd>

	</dl>
    );

    
};

export default Bilan;
