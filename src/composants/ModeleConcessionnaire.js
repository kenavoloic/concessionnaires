const remplacementEspace = chaine => chaine.replace(/\s/g, "");
const  dateFR = date => date.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'});

import donnees from './donneesModeleConcessionnaire.js';

const ModeleConcessionnaire = function(faux){

    const marque = faux.generateurListe(donnees('marques'));
    
    const type = faux.generateurListe(donnees('types'));
    const motorisation = faux.generateurListe(donnees('motorisations'));

    const kilometrage = faux.generateurListe(donnees('kms'));

    const raisonSocialeConcessionnaire = faux.generateurListe(donnees('raisonsSocialesConcessionnaires'));
    const _ape = donnees('ape');

    const ape = faux.generateurListe(_ape.slice(1));

    const apes = () => {
	let base = _ape[0];
	let nombre = faux.aleaCentaine() % ( _ape.length -1);
	let t2 = Array(nombre).fill(0).map(x => ape());
	return [...new Set([base, ...t2])];
    };

    const raisonSocialeFournisseur = faux.generateurListe(donnees('raisonsSocialesFournisseurs'));

    const prenoms = (genre=2) => genre ===2 ? (faux.zeroUn() ? [faux.prenomMasculin(), "Monsieur"] : [faux.prenomFeminin(), "Madame"] ) : genre === 0 ? [faux.prenomMasculin(), "Monsieur"] : [faux.prenomFeminin(), "Madame"];


    const aujourdhui = new Date();
    const [_jour, _mois, _annee] = dateFR(aujourdhui).split("/");

    const ecartAnnee = donnees('ecartAnnee');
    const _da = donnees('dateAchat');
    const _dfp = donnees('dateFournisseurPlancher');
    const _dfpd = donnees('dateFournisseurPlafond');
    const _dgp = donnees('dateGerantPlancher');
    const _dgpd = donnees('dateGerantPlafond');

    const anneeModele = parseInt(_annee, 10) - ecartAnnee;

    const _dateAchat = `${_jour}.${_mois}.${parseInt(_annee,10) - _da}`;
    const _dateFournisseurPlancher = `1.1.${parseInt(_annee,10) - _dfp}`;
    const _dateFournisseurPlafond = `31.12.${parseInt(_annee,10) - _dfpd}`;
    const _dateGerantPlancher = `1.1.${parseInt(_annee,10) - _dgp}`;
    const _dateGerantPlafond = `31.12.${parseInt(_annee,10) - _dgpd}`;


    const {plancher:plancherC, generateur:jourNaissance, dureeJour} = faux.generateurDatePlancherPlafond(_dateGerantPlancher, _dateGerantPlafond);    
    const plancherGerant = plancherC.getTime();

    const {plancher:plancherF, generateur:creationFournisseur} = faux.generateurDatePlancherPlafond(_dateFournisseurPlancher, _dateFournisseurPlafond);    
    const plancherFournisseur = plancherF.getTime();

    const {plancher:plancherClient, generateur:jourAchat} = faux.generateurDateDepuis(_dateAchat);
    const plancherMS = plancherClient.getTime();

    const [_nfp, _nfpd] = donnees('nombreFournisseurs');
    const [_ncp, _ncpd] = donnees('nombreClients');
    const [_nup, _nupd] = donnees('nombreUnite');

    const nombreFournisseurs = faux.generateurValeur(_nfp, _nfpd);
    const nombreClients = faux.generateurValeur(_ncp, _ncpd);
    const nombreUnite = faux.generateurValeur(_nup, _nupd);

    const getSeuilVentes = () => donnees('seuilVentes');

    const analyses = liste => {
	let _occasions = liste.filter(x => x.km !== 0);
	let _neufs = liste.filter(x => x.km === 0);
	let nbOccasions = _occasions.length;	
	let nbNeufs = _neufs.length;
	let marquesNeufs = _neufs.reduce((retour, x) => retour.has(x.marque) ? retour.set(x.marque, retour.get(x.marque) +1) : retour.set(x.marque, 1), new Map());
	let marquesOccasions = _occasions.reduce((retour, x) => retour.has(x.marque) ? retour.set(x.marque, retour.get(x.marque) +1) : retour.set(x.marque, 1), new Map());
	let typesNeufs = _neufs.reduce((retour, x) => retour.has(x.type) ? retour.set(x.type, retour.get(x.type) +1) : retour.set(x.type, 1), new Map());
	let typesOccasions = _occasions.reduce((retour, x) => retour.has(x.type) ? retour.set(x.type, retour.get(x.type) +1) : retour.set(x.type, 1), new Map());
	let motorisationsNeufs = _neufs.reduce((retour, x) => retour.has(x.motorisation) ? retour.set(x.motorisation, retour.get(x.motorisation) +1) : retour.set(x.motorisation, 1), new Map());
	let motorisationsOccasions = _occasions.reduce((retour, x) => retour.has(x.motorisation) ? retour.set(x.motorisation, retour.get(x.motorisation) +1) : retour.set(x.motorisation, 1), new Map());

	let kmsOccasions = _occasions.reduce((retour, x) => retour.has(x.km) ? retour.set(x.km, retour.get(x.km) +1) : retour.set(x.km, 1), new Map());

	

	return {
	    total:liste.length,
	    nombreMarques: [...new Set([...marquesOccasions.keys(), ...marquesNeufs.keys()])],
	    nombreNeufs:nbNeufs,
	    nombreOccasions:nbOccasions,
	    nombreMarquesOccasions:marquesOccasions,
	    nombreMarquesNeufs:marquesNeufs,
	    nombreTypes: [...new Set([...typesOccasions.keys(), ...typesNeufs.keys()])],
	    nombreTypesOccasions:typesOccasions,
	    nombreTypesNeufs:typesNeufs,
	    nombreMotorisations: [...new Set([...motorisationsOccasions.keys(), ...motorisationsNeufs.keys()])],
	    nombreMotorisationsOccasions:motorisationsOccasions,
	    nombreMotorisationsNeufs:motorisationsNeufs,
	    nombreKmsOccasions:kmsOccasions,
	    marquesOccasions:[...new Set(marquesOccasions.keys())],
	    marquesNeufs:[...new Set(marquesNeufs.keys())],
	    typesOccasions:[...new Set(typesOccasions.keys())],
	    typesNeufs:[...new Set(typesNeufs.keys())],
	    motorisationsOccasions:[...new Set(motorisationsOccasions.keys())],
	    motorisationsNeufs:[...new Set(motorisationsNeufs.keys())]
	};

    };

    const getConcessionnaire = (genre, identifiant) => {
	//Entreprise
	let nom = faux.patronyme();
	let raisonSociale = raisonSocialeConcessionnaire();
	let adresse = faux.adresse();
	let ville = faux.nomVille();	
	let {numeroDepartement, isoRegion} = ville;
	let communesDepartementales = faux.communesDepartement(numeroDepartement);
	let communesRegionales = faux.communesRegion(isoRegion);
	
	let villesClients = faux.generateurListe(communesRegionales); // toute la region
	let villesFournisseurs = faux.generateurListe(communesDepartementales); // sur le département

	let seuilVentes = donnees('seuilVentes'); //Object mensuel

	const _marques = donnees('marques').map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
	const _types = donnees('types').map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
	const _motorisations = donnees('motorisations').map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
	
	const [_plancherMarques, _plafondMarques] = donnees('nombreMarques');
	const ecartMarques = _plafondMarques - _plancherMarques;
	let ttMarques = faux.aleaCentaine() % ecartMarques;
	ttMarques === 0 ? ttMarques = 1 : ttMarques;
	const listeMarques = Array(ttMarques).fill(0).map((x, index) => _marques[index]);
	const marques = faux.generateurListe(listeMarques);

	const [_plancherTypes, _plafondTypes] = donnees('nombreTypes');
	const ecartTypes = _plafondTypes - _plancherTypes;
	let ttTypes = faux.aleaCentaine() % ecartTypes;
	ttTypes === 0 ? ttTypes = 1 : ttTypes;
	const listeTypes = Array(ttTypes).fill(0).map((x, index) => _types[index]);
	const types = faux.generateurListe(listeTypes);

	const [_plancherMotorisations, _plafondMotorisations] = donnees('nombreMotorisations');
	const ecartMotorisations = _plafondMotorisations - _plancherMotorisations;
	let ttMotorisations = faux.aleaCentaine() % ecartMotorisations;
	ttMotorisations === 0 ? ttMotorisations = 1 : ttMotorisations;
	const listeMotorisations = Array(ttMotorisations).fill(0).map((x, index) => _motorisations[index]);
	const motorisations = faux.generateurListe(listeMotorisations);
	
	let fournisseurs = modeleFournisseur(villesFournisseurs);
	let clients = modeleClient(villesClients, marques, types, motorisations);
	let stock = modeleStock(marques, types, motorisations);
	
	let clientele = clients.map(x => x.facture).reduce((retour, {marque, type, motorisation, km, annee}) => [...retour,  {marque:marque, type:type, motorisation:motorisation, km:km, annee:annee}], []);
	let analysesClientele = analyses(clientele);
	
	let inventaire = stock.reduce((retour, {marque, type, motorisation, km, annee}) => [...retour, {marque:marque, type:type, motorisation:motorisation, km:km, annee:annee}], []);
	let analysesInventaire = analyses(inventaire);

	//Gérant
	let nomGerant = faux.zeroUn() ? nom : faux.patronyme();
	let naissanceGerant = new Date(plancherGerant + jourNaissance() * dureeJour);
	let villeNaissanceGerant = faux.nomVille();
	let villeDomicileGerant = villesFournisseurs();
	let adresseGerant = faux.adresse();
	let [prenom, civilite] = prenoms(genre);
	let _courrielGerant = civilite.toLowerCase() === "madame" ? `gerante@${raisonSociale.nom}.${nom}.${ville.nom}.fr` : `gerant@${raisonSociale.nom}.${nom}.${ville.nom}.fr`;
	let courrielGerant = remplacementEspace(_courrielGerant);
	let gerant = {nom:nomGerant, prenom:prenom, naissance:naissanceGerant, villeNaissance:villeNaissanceGerant, civilite:civilite, courriel:courrielGerant, villeDomicile:villeDomicileGerant, adresse:adresseGerant};

	let booleen = clients.length/12.0 > seuilVentes ? true:false;

	let bilanVentes = {ventes:clients, mensuel: clients.length/seuilVentes, booleen:booleen, analyse:analysesClientele, seuilVentes:seuilVentes};
	let bilanStock = {stock:stock, analyse:analysesInventaire};
	
	const lien = {url:`/${ville.codePostal}_${identifiant}`, nom:`${raisonSociale.nom} ${nom}`};


	return {identifiant:identifiant, lien:lien, gerant:gerant,  ape: apes(), nom: `${raisonSociale.nom} ${nom}`, adresse:adresse, ville:ville, clef: faux.chaine(8), fournisseurs: fournisseurs,  bilanVentes: bilanVentes,  bilanStock: bilanStock, seuil:seuilVentes};
	
    };


    const modeleFournisseur = villesFournisseurs => {

	let nombre = nombreFournisseurs();
	let codesFournisseurs = Array(nombre).fill(0);
	let fournisseurs = codesFournisseurs.map((x, index) => {
	    let ville = villesFournisseurs();
	    let adresse = faux.adresse();
	    let [prenom, civilite] = prenoms();
	    let nom = faux.patronyme();
	    let forme = raisonSocialeFournisseur();
	    let nomEntreprise = `${forme.nom} ${nom}`;

	    let dateF = new Date(plancherFournisseur + creationFournisseur() * dureeJour);
	    let chaineDateF = dateF.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'});
	    let [fJ, fM, fA] = chaineDateF.split('/');
	    let codeFournisseur = `F-${fA}-${fM}-${fJ}`;
	    
	    let courriel = civilite.toLowerCase() === "madame" ? `gerante@${ville.nom}.${forme.courriel}.${nom}.fr` : `gerant@${ville.nom}.${forme.courriel}.${nom}.fr`;
	    courriel = remplacementEspace(courriel);
	    let nomGerant = faux.zeroUn() ? nom : faux.patronyme();
	    let gerant = {nom:nomGerant, prenom:prenom, civilite:civilite, courriel:courriel.toLowerCase()};
	    return {nom:nomEntreprise, ville:ville, adresse:adresse, gerant:gerant, code:codeFournisseur};
	});
	return fournisseurs;
    };

    const modeleClient = (villesClients, marques, types, motorisations) => {

	let nombre = nombreClients();
	let xClients = faux.nombresUniques(nombre);
	let clients = Array(nombre).fill(0).map((x, index)  => {
	    let nom = faux.patronyme();
	    let [prenom, civilite] = prenoms();
	    let ville = villesClients();
	    let adresse = faux.adresse();
	    let indexClient = `c-${String(xClients[index]).padStart(4,'0')}`;
	    let courriel = `${prenom}.${nom.toLowerCase()}@${ville.nom}.fr`;
	    courriel = remplacementEspace(courriel);
	    let dateAchat = new Date(plancherMS + jourAchat() * dureeJour);
	    let chaineDateAchat = dateAchat.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'});
	    let [fJ, fM, fA] = chaineDateAchat.split('/');
	    let numeroFacture = `${xClients[index]}-${fA}-${fM}-${fJ}`;

	    let facture = {client:indexClient, numero:numeroFacture, marque: marques(), type: types(), motorisation: motorisations(), km: kilometrage(), annee: faux.aleaCentaine()%6 + 2015, achat: dateAchat}; 
	    return {numero:indexClient, nom: nom, prenom:prenom, civilite:civilite, courriel:courriel, facture:facture, ville:ville, adresse:adresse};
	});
	
	return clients.sort((a,b) => a.facture.achat.getTime() - b.facture.achat.getTime()).map((x, index) => ({...x, rang:index}));
    };

    const modeleStock = (marques, types, motorisations) => {
	let nombre = 1 + nombreUnite();

	let stock = Array(nombre).fill(0).map((x, index) => ({numero:index, marque:marques(), type:types(), motorisation: motorisations(), km: kilometrage(), annee: faux.aleaCentaine()%ecartAnnee + anneeModele}));
	return stock;
    }

    return {
	getConcessionnaire, getSeuilVentes
    };

};
export default ModeleConcessionnaire;
