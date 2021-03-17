import React, {useContext, useState} from "react";
import PourvoyeurProvider, {Pourvoyeur} from 'composants/Pourvoyeur';
import BilanGlobal from 'composants/BilanGlobal';
// import X02 from 'composants/X02';
// import X04 from 'composants/X04';
// import X05 from 'composants/X05';

const BasDePage = () => {
    const {villes, bilans, seuil} = useContext(Pourvoyeur);

    return (
	<footer>
	    <BilanGlobal donnees={bilans} villes={villes} seuil={seuil} />
	    {/*<X05 donnees={bilans} villes={villes} seuil={seuil} />*/}
	</footer>
    )
};

export default BasDePage;
