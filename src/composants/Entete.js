import React, {useContext, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import PourvoyeurProvider, {Pourvoyeur} from 'composants/Pourvoyeur';


const Entete = () => {
    let {liens, alea, changementAlea} = useContext(Pourvoyeur);

    const [liensEntetes, setLiensEntetes] = useState(liens);
    useEffect(() => {
	setLiensEntetes(liens);
    }, [liens]);


    const [nouvelAlea, setNouvelAlea] = useState(alea);
    
    const historique = useHistory();

    const creationLiens = liste => {
	let accueil = <li key={0}><NavLink to={"/"} exact={true} activeClassName="lienActif" className="lienInactif">Accueil</NavLink></li>;
	let gerants = <li key={"gerants"}><NavLink to={"/gerants"} exact={true} activeClassName="lienActif" className="lienInactif">Gérants</NavLink></li>;
	let _liens = liste.map((x, index) => <li key={index+1}><NavLink to={x.url} activeClassName="lienActif" className="lienInactif">{x.nom}</NavLink></li>);
	return _liens;
    };

    const rubriquesGenerales = () => {
	let accueil = <li key={0}><NavLink to={"/"} exact={true} activeClassName="lienActif" className="lienInactif">Accueil</NavLink></li>;
	let gerants = <li key={"gerants"}><NavLink to={"/gerants"} exact={true} activeClassName="lienActif" className="lienInactif">Gérants</NavLink></li>;
	let analyses = <li key={"analyses"}><NavLink to={"/analyses"} exact={true} activeClassName="lienActif" className="lienInactif">Analyses</NavLink></li>;
	return [accueil, gerants, analyses];
    };
    
    const modificationAlea = e => setNouvelAlea(e.target.value);

    const recharge = () => {
	if (nouvelAlea !== alea) {	
	    changementAlea(nouvelAlea);
	    historique.push("/");
	}
	return null;
    };

    return (
	<nav>
	    <article className="bandeau">
		<h1 onClick={(e) => historique.push("/")}>Concessionnaires</h1>
		<section className="alea">
		    <label htmlFor="solea">Aléa</label>
		    <input type="text"  id="solea" placeholder="alea" onChange={(e) => modificationAlea(e)} value={nouvelAlea}/>
		    <input type="button" value="Envoi" onClick={() => recharge()} />
		</section>
	    </article>

	    <ul className="liens" key={"rubriques"} id="rubriques">
		{rubriquesGenerales()}
	    </ul>


	    <ul className="liens" key={"enlaces"} id="enlaces">
		{creationLiens(liensEntetes)}
	    </ul>

	</nav>
    );
    
};

export default Entete;
