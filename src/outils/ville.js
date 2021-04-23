import codesInsee from './codesInsee.js';
import {departementsRegions, listeRegions, regionsIsoNom, regionsNomIso} from './departementsRegions.js';
import cpnd from './cogPostalNomDep.js';
import insee from './inseeNom8k.js';
import prepositions from './prepositions';
//console.log(prepositions);
/*
  const codesInsee = require('./codesInsee.js');
  const {departementsRegions, listeRegions, regionsIsoNom, regionsNomIso} = require('./departementsRegions.js');
  const cpnd = require('./cogPostalNomDep.js');
  const insee = require('./inseeNom8k.js');
*/
//console.log(listeRegions);

const nombreVilles = codesInsee.size;
const bordeaux = "33063";

const parDefaut = '33';
const numeroMaximumMetropole = 96;
const ultramarins = ['971','972','973','974','976'];
const corsica = ['2a','2b'];

const deuxLettres = envoi => {
    let booleen = corsica.includes(String(envoi).toLowerCase());
    let metro = !isNaN(envoi) && parseInt(envoi, 10) < 96 ? String(envoi).padStart(2, '0') : parDefaut;
    return booleen ? String(envoi).padStart(2, '0') : metro;   
};

const troisLettres = envoi => ultramarins.includes(String(envoi).toLowerCase()) ? envoi : parDefaut;

const validationChoixDepartement = envoi =>  String(envoi).toLowerCase().padStart(2, '0').length === 2 ? deuxLettres(envoi) : troisLettres(envoi);

const ville = codeInsee => {

    let choix = codesInsee.has(codeInsee) ? codesInsee.get(codeInsee) : bordeaux;
    //console.log(choix, codeInsee, insee.get(choix));
    let nomCommune = insee.has(choix) ? insee.get(choix) : insee.get(bordeaux);
    let {postal, dep} = cpnd.has(choix) ? cpnd.get(choix) : cpnd.get(bordeaux);
    let departement = departementsRegions.has(dep) ? departementsRegions.get(dep) : departementsRegions.get("33");
    let {depNom, regionCode, regionNom, regionIso, regionAlphabetique} = departement;
    let codeCommune = String(choix).slice(2,5).padStart(3, '0');
    //let codeInseeEntier = `${String(dep)}${codeInsee}`;
    let preposition = prepositions.has(choix) ? prepositions.get(choix).a : null;
    //return {nom: nomCommune, codeInsee:codeInsee, codeCommune:codeCommune, codePostal:postal, numeroDepartement:dep, nomDepartement: depNom, nomRegion: regionNom, isoRegion: regionIso, regionAlphabetique:regionAlphabetique, departements: listeRegions[regionIso], a: preposition};
    return {nom: nomCommune, codeInsee:choix, codeCommune:codeCommune, codePostal:postal, numeroDepartement:dep, nomDepartement: depNom, nomRegion: regionNom, isoRegion: regionIso, regionAlphabetique:regionAlphabetique, departements: listeRegions[regionIso], a: preposition}; 
};

const communesDepartementales = numeroDepartement => {
    let chaine = validationChoixDepartement(numeroDepartement);
    let clefs = [...cpnd.keys()].filter(x => x.startsWith(chaine));
    return clefs.map(x => ({nom:insee.get(x), codePostal: (cpnd.get(x)).postal}));
    //return clefs.map(x => ({nom:insee.get(x), codeInsee:x, codePostal: (cpnd.get(x)).postal}));
};

const communesRegionales = regionIso => {
    let liste = listeRegions[regionIso] ? listeRegions[regionIso] : listeRegions['fr-naq'];
    return liste.map(x => communesDepartementales(x.depCode)).reduce((retour, x) => [...retour, ...x]);
};

//console.log(Object.values(JSON.stringify(listeRegions)));
//module.exports = {ville, nombreVilles, communesDepartement};
export  {nombreVilles, ville, communesDepartementales, communesRegionales};
/*
  module.exports = nombreVilles;
  module.exports = ville;
  module.exports = communesDepartementales;
  module.exports = communesRegionales;
*/
