const dureeJour = 24 * 60 * 60 * 1000;
const dureeSemaine = 7 * (24 * 60 * 60 * 1000);

const dureesMois = { 1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31 };
const par4_p = x => x % 4 === 0;
const par100_p = x => x % 100 !== 0;
const par400_p = x => x % 400 === 0;

const bissextile_p = annee => {
    let retour = par4_p(annee) && par100_p(annee) ? true : par400_p(annee) ?  true : false;
    return {valeur: annee, booleen: retour};
};

const triObjetsDate = (d1,d2) => d1.getTime() - d2.getTime();

//Formats de date possible 30.5.2020 ou 30 5 2020 ou 30/5/2020 ou 30-5-2020 ou 30*5*2020
//mais également 30.5/2020 ou 30-5/2020...
const decoupeDate = chaine => chaine.split(/[- \/\*\.]/);

const jCalendaire = chaine => {
    let [j, m, a, h=0, mn=0, s=0] = decoupeDate(chaine);
    let bissextile = bissextile_p(a);
    m = dureesMois[m] ? m : (m % 12) + 1;
    j = (j > dureesMois[m]) ? 1 + j % dureesMois[m] : j;
    j = (m === 2 && j > 28 && bissextile.booleen) ? 1 + j % dureesMois[m] : j;
    return new Date(a,m,j,h,mn,s);
};

const validationDate = (j,m,a,h=0,mn=0,s=0) => {
    let bissextile = bissextile_p(a);
    m = dureesMois[m] ? m : (m % 12) + 1;
    j = (j > dureesMois[m]) ? 1 + j % dureesMois[m] : j;
    j = (m === 2 && j > 28 && bissextile.booleen) ? 1 + j % dureesMois[m] : j;
    return new Date(a,m,j,h,mn,s);
};

const dateMajorite = ({j,m,a,h,mn}) => {
    let majorite = a + 18;
    let majorite_bissextile_p = bissextile_p(majorite);
    let j_majorite = ( m === 2 && j>28 && majorite_bissextile_p) ? j :  28;
    let date = `${j}.${m}.${majorite}`;
    let heure = `${String(h).padStart(2,'0')}:${String(mn).padStart(2,'0')}`;
    return {j:j, m:m, a:majorite, h:h, mn:mn, date:date, heure:heure};
    //return new Date(a, m, j, h, mn, 0);
};

const dateEmbauche = ({j,m,a,h,mn}) => validation(j,m,a,h,mn);

const _dateEmbauche = (majorite, alea1, alea2, alea3) => {
    let {m,j,a} = majorite;
    let _j = 1 + alea1 % 31;
    let _m = 1 + alea2 % 12;
    let anneeActuelle = new Date().getFullYear();
    let ecartAnnee = anneeActuelle - a;
    let _a = a + (alea3 % ecartAnnee);
    let bissextile = bissextile_p(_a);
    _j = (_j > dureesMois[_m] ) ? 1  + j % dureesMois[m] : _j;
    _j = ( _m === 2 && _j > 28) ? 29 : _j;
    if(_a === a && _m < m){
	console.log("date d'embauche antérieure à la majorité", majorite, _m, m);
	_a = a;
	_j = j;
	_m = m;
    }
    let date =  `${_j}.${_m}.${_a}`;
    return {j:_j, m:_m, a:_a, date:date};
};

const anciennete = embauche => {
    let {m,j,a} = emabauche;
    let _date = new Date();
    //    let _a = _date


};

const numeroSecuriteSociale = (genre, dob, villeNaissance, ordre) => {
    //prendre en compte les règles pour les dom et tom
    //département => 3 chiffres
    //commune => 2 chiffres
    let sexe = (genre === 'f') ? 2 : 1;
    let annee = String(dob.getFullYear()).slice(2);
    let mois = dob.getMonth()+1;
    let dpt = villeNaissance.numeroDepartement;
    let commune = villeNaissance.codeInsee;
    let ordreDeNaissance = String(ordre).padStart(3,'0');
    let clef = 'xx';
    return `${sexe}.${annee}.${String(mois).padStart(2,'0')}.${dpt}.${commune}.${ordreDeNaissance}.${clef}`;
};

//module.exports = {jCalendaire, dureeJour, dureeSemaine, validationDate, triObjetsDate, dateEmbauche, dateMajorite, numeroSecuriteSociale, _dateEmbauche};


//const dates = {jCalendaire, dureeJour, dureeSemaine, validationDate, triObjetsDate, dateEmbauche, dateMajorite, numeroSecuriteSociale, _dateEmbauche};

//export default dates;
export { dureeJour, dureeSemaine, triObjetsDate, jCalendaire, validationDate, dateMajorite, dateEmbauche, _dateEmbauche, numeroSecuriteSociale};
