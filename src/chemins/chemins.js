import FauxTexte from 'outils/FauxTexte';

const faux = new FauxTexte();
const defautNombrePages = 8;

const chemins = (nombrePages=8, accueil = 'Accueil') => {

    nombrePages = isNaN(nombrePages) ? defautNombrePages  : nombrePages ;
    accueil = accueil.length === 0 ? 'Accueil' : accueil;

    let nombres = Array(nombrePages).fill('0').map((x, index) => faux.nombreLettres(index));

    let liens = nombres.map((x, index) => {
        let chaine = `${String(index).padStart(3,'0')}`;
        let url = `/p${chaine}`;            
        return { index:index, libelle:x, chaine:chaine, url:url,  exact: false};                
    });
    liens[0].libelle = 'Accueil';
    liens[0].url = '/';
    liens[0].exact = true;
    return liens;
};

export default chemins;
