/*
module.exports = [
17681, 17683, 17707, 17713, 17729, 17737, 17747, 17749, 17761, 17783,
17789, 17791, 17807, 17827, 17837, 17839, 17851, 17863, 17881, 17891,
17903, 17909, 17911, 17921, 17923, 17929, 17939, 17957, 17959, 17971,
17977, 17981, 17987, 17989, 18013, 18041, 18043, 18047, 18049, 18059,
18061, 18077, 18089, 18097, 18119, 18121, 18127, 18131, 18133, 18143,
18149, 18169, 18181, 18191, 18199, 18211, 18217, 18223, 18229, 18233,
18251, 18253, 18257, 18269, 18287, 18289, 18301, 18307, 18311, 18313,
18329, 18341, 18353, 18367, 18371, 18379, 18397, 18401, 18413, 18427,
18433, 18439, 18443, 18451, 18457, 18461, 18481, 18493, 18503, 18517,
18521, 18523, 18539, 18541, 18553, 18583, 18587, 18593, 18617, 18637,
18661, 18671, 18679, 18691, 18701, 18713, 18719, 18731, 18743, 18749];
 */
const liste = [17011,17021,17027,17029,17033,17041,17047,17053,17077,17093,17099,17107,17117,17123,17137,17159,17167,17183,17189,17191,17203,17207,17209,17231,17239,17257,17291,17293,17299,17317,17321,17327,17333,17341,17351,17359,17377,17383,17387,17389,17393,17401,17417,17419,17431,17443,17449,17467,17471,17477,17483,17489,17491,17497,17509,17519,17539,17551,17569,17573,17579,17581,17597,17599,17609,17623,17627,17657,17659,17669,17681,17683,17707,17713,17729,17737,17747,17749,17761,17783,17789,17791,17807,17827,17837,17839,17851,17863,17881,17891,17903,17909,17911,17921,17923,17929,17939,17957,17959,17971,17977,17981,17987,17989,18013,18041,18043,18047,18049,18059,18061,18077,18089,18097,18119,18121,18127,18131,18133,18143,18149,18169,18181,18191,18199,18211,18217,18223,18229,18233,18251,18253,18257,18269,18287,18289,18301,18307,18311,18313,18329,18341,18353,18367,18371,18379,18397,18401,18413,18427,18433,18439,18443,18451,18457,18461,18481,18493,18503,18517,18521,18523,18539,18541,18553,18583,18587,18593,18617,18637,18661,18671,18679,18691,18701,18713,18719,18731,18743,18749,18757,18773,18787,18793,18797,18803,18839,18859,18869,18899,18911,18913,18917,18919,18947,18959,18973,18979,19001,19009];

const nombresPremiers = envoi => liste[envoi % liste.length];
const reducteurGraine = graineAleatoire => [...graineAleatoire].reduce((retour, x) => (retour + x.charCodeAt(0) % liste.length), 0);

export {nombresPremiers, reducteurGraine};