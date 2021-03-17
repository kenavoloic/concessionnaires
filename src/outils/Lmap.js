// Utilisation
/*
const r = 3.57011;
const g1x = 0.12341234;
const g1 = lmap(g1x, r);

const nombrePremier = 17597;
let liste = [0,1,2,3,4,5,6];
let taille = liste.length;

const iteration357 = iteration(taille, nombrePremier);

const fois = 25;
let t1 = Array(fois).fill(0).map(x => iteration357(g1.next().value));
t1.forEach(x => console.log(liste[x]));

*/

const Lmap = function*(x0, r){
    let x = x0;
    while(true){
	x = x * r * (1 -x);
	yield x;
    }
}
module.exports = Lmap;
//export default Lmap;

/*
  const Lmap = function(x0, r){
  return function *lmap(x0,r){
  let x = 0;
  while(true){
  x = x * r * (1 - x);
  yield x;
  }
  }
  };
*/
/*
  function *lmap(x0, r) { 
  let x = x0;
  while(true){
  x = x * r * (1 - x);
  yield x;
  }
  };
*/
//module.exports = lmap;
//exports.lmap = lmap;


//module.exports = {lmap, iteration, aleaListe, aleaPlancherPlafond};
//module.exports = lmap;
