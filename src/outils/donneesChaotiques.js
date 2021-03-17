//Données pour générateurs chaotiques.
/*
  let items = ['binaire','paragraphes','phrases','longueurPhrases','hexadecimal','mots','ponctuationsFortes','virgules','alphanumeriques','liste','feminins','masculins','patronymes','administratifs', 'misc', 'nomsVoies','typesVoies', 'centaine', 'ville', 'millier', 'valeur'].sort();

  const rV = () => 3.56995 + Math.random()*.1;
  const xV = () => Math.random();

  const xr = () => ({x: xV(), r:rV()});

  let tous = items.map((x, index) => ([x, xr()]));
  console.log(tous);
*/
const liste = [
    [ 'binaire', { x: 0.03763423762941365, r: 3.614562725513675 } ],
    [ 'paragraphes', { x: 0.39387215639717255, r: 3.6156284770850338 } ],
    [ 'phrases', { x: 0.26564888107997087, r: 3.5944607061377027 } ],
    [ 'longueurPhrases', { x: 0.295106910727295, r: 3.6144032873574 } ],
    [ 'hexadecimal', { x: 0.3612958668913364, r: 3.665735055706197 } ],
    [ 'mots', { x: 0.8418132657117574, r: 3.586309520486334 } ],
    [ 'ponctuationsFortes', { x: 0.6615878749832935, r: 3.666336664640707 } ],
    [ 'virgules', { x: 0.5130966737493039, r: 3.6240392362395273 } ],
    [ 'alphanumeriques', { x: 0.6688432256140522, r: 3.6677326578128566 } ],
    [ 'liste', { x: 0.14984482117786913, r: 3.62085289554814 } ],
    [ 'feminins', { x: 0.8686261746581219, r: 3.641169121397729 } ],
    [ 'masculins', { x: 0.573161957186876, r: 3.6001686180700263 } ],
    [ 'patronymes', { x: 0.4762353478223498, r: 3.6638689644923748 } ],
    [ 'administratifs', { x: 0.6927734878225513, r: 3.6412569435086644 }],
    [ 'misc', { x: 0.4364520797562117, r: 3.644581159298371 } ],
    [ 'nomsVoies', { x: 0.31126959580093194, r: 3.649046665739355 } ],
    [ 'typesVoies', { x: 0.7346096308259993, r: 3.6652444102478254 } ],
    [ 'centaine', { x: 0.5029073726726319, r: 3.657736287997922 } ],
    [ 'millier', { x: 0.220038866953568, r: 3.655097017515479 } ],
    [ 'ville', { x: 0.12946441822295185, r: 3.610726594448143 } ],
    [ 'ville', { x: 0.12946441822295185, r: 3.610726594448143 } ],
    [ 'valeur',{x: 0.972984356932395, r: 3.6594128902436225} ],
    [ 'melangeur', { x: 0.37459517189864777, r: 3.5746714781450835 }]
];

const xr = new Map(liste);
const defaut = 'binaire';
const choix = envoi => xr.has(envoi) ? xr.get(envoi) : xr.get(defaut);
//module.exports = choix; 
export default choix;
