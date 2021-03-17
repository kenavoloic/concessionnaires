
const vehiculesNeufs = [0,0,0,0,0];
const vehiculesOccasion = [5,10,15,20,25,30,35,45,50];
const kms = [...vehiculesNeufs, ...vehiculesOccasion];

const anneeModele = -3;
const seuilVentes = 12;//20;

const marques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS","Fiat","Ford","Hyundai","Isuzu","Kia","Land Rover","Mercedes","Nissan","Opel","Peugeot","Renault","Seat","Škoda","Suzuki","Toyota","Volkswagen","Volvo"];
const types = ['berline', 'break', 'cabriolet', 'monospace', 'SUV', 'tout-terrain', 'utilitaire'];
const motorisations = ['électrique', 'essence', 'gpl', 'diesel', 'hybride'];

const raisonsSocialesConcessionnaires = [{nom:'Concession',courriel:'concession'},{nom:'Garage',courriel:'garage'},{nom:'Ateliers',courriel:'ateliers'},{nom:'Voitures',courriel:'voitures'},{nom:'Véhicules',courriel:'vehicules'}, {nom:'Autos',courriel:'autos'}, {nom:'Automobiles',courriel:'automobiles'} ];

const ape = [
    "Commerce de voitures et de véhicules automobiles légers",
    "Commerce d’autres véhicules automobiles",
    "Entretien et réparation de véhicules automobiles légers",
    "Entretien et réparation d'autres véhicules automobiles"
];

const raisonsSocialesFournisseurs = [{nom:'Société', courriel:"ste"}, {nom:'Sarl',courriel:'entreprise'}, {nom:'Maison',courriel:'maison'}, {nom:'Compagnie', courriel:'cie'}, {nom:'Coopérative', courriel:'cooperative'}, {nom:'SCI', courriel:'sci'}, {nom:'SCP', courriel:'scp'}, {nom:'Garage',courriel:'garage'}];


const defaut = 'seuilVentes';
const liste = [
    ['marques', marques],//liste
    ['types', types],//liste
    ['motorisations', motorisations],//liste
    ['kms', kms],//liste
    ['raisonsSocialesConcessionnaires', raisonsSocialesConcessionnaires],
    ['ape', ape],
    ['raisonsSocialesFournisseurs', raisonsSocialesFournisseurs],
    ['ecartAnnee', 3],
    ['dateAchat', 1],
    ['dateFournisseurPlancher', 10],
    ['dateFournisseurPlafond', 7],
    ['dateGerantPlancher', 60],
    ['dateGerantPlafond', 30],
    ['nombreFournisseurs', [10,100]],
    ['nombreClients', [10,1000]],
    ['nombreUnite', [10,500]], //inventaire
    ['nombreMarques', [3, 9]],
    ['nombreTypes', [2, types.length]],
    ['nombreMotorisations', [2, motorisations.length]],    
    ['seuilVentes',  30]
];

const choix = new Map(liste);
const donnees = envoi => choix.has(envoi) ? choix.get(envoi) : choix.get(defaut);

//module.exports=donneesModeleConcessionnaire;
export default donnees;
