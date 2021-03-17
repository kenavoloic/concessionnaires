import React from "react";

//const BilanStock = ({stock, marques, motorisations, neufs, occasions, types}) => {
const BilanStock = ({analyse}) => {

    return (
	<dl className="quantitatif" id="bilanStock">
	    <dt className="titre">Stock</dt>


	    <dt className="annuel">Total</dt>
	    <dd>{analyse.total}</dd>

	    <dt className="annuel">Neufs</dt>
	    <dd>{analyse.nombreNeufs}</dd>
	    {analyse.nombreOccasions < 2 ? <dt className="neufs">Occasion</dt> : <dt className="neufs">Occasions</dt>}
	    <dd>{analyse.nombreOccasions}</dd>

	    {analyse.nombreMarques.length < 2 ? <dt className="marques">Marque</dt> :  <dt className="marques">Marques</dt>}
	    <dd>{analyse.nombreMarques.length}</dd>
	    
	    {analyse.nombreMotorisations.length < 2 ? <dt className="motorisations">Motorisation</dt> : <dt className="motorisations">Motorisations</dt>}
	    <dd>{analyse.nombreMotorisations.length}</dd>
	    
	    {analyse.nombreTypes.length < 2 ? <dt className="types">Type</dt> : <dt className="types">Types</dt>}
	    <dd>{analyse.nombreTypes.length}</dd>

		
	</dl>
    );

    
};

export default BilanStock;
