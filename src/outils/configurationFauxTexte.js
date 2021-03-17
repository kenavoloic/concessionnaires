const nombresPremiers = require('./premiers');

const taillesPhrase = [8, 9, 10, 11, 12, 12, 12, 12, 14, 15, 16, 16, 16, 16, 18, 19, 20, 20, 20, 22, 23, 23, 24, 24, 24, 25, 25, 25, 26, 27, 27, 29, 30, 31, 32, 34, 35, 35, 36, 38, 41, 42, 48];

const insecable = String.fromCharCode(0x202f);
//const espaceFineInsecable = String.fromCharCode(0x202f);
const troisPoints = String.fromCharCode(0x2026);
const point = '.';
const exclamation = insecable + '!';
const interrogation = insecable + '?';

const virgule = ",";
const pointVirgule = insecable + ";";
const deuxPoints = insecable + ":";
const ponctuationsFortes = [
    point, point, point, point, point, point, 
    point, point, point, point, point, point, 
    interrogation, interrogation, interrogation,  interrogation,  interrogation, 
    exclamation, exclamation,  exclamation, 
    troisPoints, troisPoints
];

const virgules = [
    virgule, virgule, virgule,  virgule, virgule, virgule, virgule, virgule, virgule, virgule, 
    virgule, virgule, virgule, virgule, virgule, virgule, 
    pointVirgule, pointVirgule,
    deuxPoints, deuxPoints
];
// modèles
// x = [random.random() for x in range(10]);
// r = [3.55 + random.random()*.1 for x in range(10)];
//Données pour générateurs chaotiques.
/*
const xBinaire = 0.794;
const rBinaire = 3.5701;
const xParagraphes = 0.882;
const rParagraphes = 3.5702;
const xPhrases = 0.882;
const rPhrases = 3.5702;
const xLongueurPhrases = 0.882;
const rLongueurPhrases = 3.5702;
const xHexadecimal = 0.658;
const rHexadecimal = 3.5703;
const xMots = 0.705;//0.507;
const rMots = 3.8076;//3.5704;
const seuilPonctuation = 0.80;
const xPonctuationsFortes = 0.495;
const rPonctuationsFortes = 3.5703;
const xVirgules = 0.783;
const rVirgules = 1.55;
const xAlphanumeriques = 0.186;
const rAlphanumeriques = 3.5705;
const xListe = 0.1734;
const rListe = 3.58437;
const xFeminins = 0.5817;
const rFeminins = 3.52790;
const xMasculins = 0.1091;
const rMasculins = 3.51544;
const xPatronymes = 0.5170;
const rPatronymes = 3.54369;
const xAdministratifs = 0.6901;
const rAdministratifs= 3.59386;
const xMisc = 0.7765;
const rMisc = 3.52335;
const xNomsVoies = 0.7765;
const rNomsVoies = 3.52335;
const xTypesVoies = 0.7765;
const rTypesVoies = 3.52335;
const xCentaine = 0.7765;
const rCentaine = 3.692335;
const xVille = 0.485881;
const rVille = 3.63094;
*/
const nombrePremier = 20717;//17431;//17713;//17707;
//module.exports = { taillesPhrase, ponctuationsFortes, virgules, nombresPremiers};
export { taillesPhrase, ponctuationsFortes, virgules, nombresPremiers};
