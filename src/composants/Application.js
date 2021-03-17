import React, {useContext, useEffect, useState} from "react";
// Changement nécessaire à webpack pour le mode production
//import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import {HashRouter as Router, Route, Switch, useLocation} from "react-router-dom";

import PourvoyeurProvider, {Pourvoyeur} from 'composants/Pourvoyeur';
import listeGenres from 'composants/donneesGenresGerants';

import Entete from 'composants/Entete';
import './styles.less';

import Routeur from 'composants/Routeur';
import BasDePage from 'composants/BasDePage';

const liste = listeGenres();

const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
	window.scrollTo(0,0);
    }, [pathname]);
    return null;
};

const Application = () => {
    return (
	<PourvoyeurProvider listeGenres={liste}>
	    <Router>
		<ScrollToTop />
		<Entete />
		<Switch>
		    <Routeur />
 		</Switch>
		<BasDePage />
	    </Router>
	</PourvoyeurProvider>
    );
};

export default Application;
