const liste = [
[1, "Maurice Garin"],
[2, "Henri Cornet"],
[3, "Louis Trousselier"],
[4, "René Pottier"],
[5, "Lucien Petit-Breton"],
[6, "Octave Lapize"],
[7, "Gustave Garrigou"],
[8, "Henri Pélissier"],
[9, "André Leducq"],
[10, "Antonin Magne"],
[11, "Georges Speicher"],
[12, "Roger Lapébie"],
[13, "Jean Robic"],
[14, "Louison Bobet"],
[15, "Roger Walkowiak"],
[16, "Jacques Anquetil"],
[17, "Lucien Aimar"],
[18, "Roger Pingeon"],
[19, "Bernard Thévenet"],
[20, "Bernard Hinault"],
[21, "Laurent Fignon"]
];

const vainqueurs = new Map(liste);
const defaut = 14;
const choix = envoi => vainqueurs.has(envoi) ? vainqueurs.get(envoi) : vainqueurs.get(defaut);

export default choix;
 
