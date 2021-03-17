import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Application from 'composants/Application';

const sortie = document.getElementById('racine');
ReactDOM.render(<Application />, sortie);
