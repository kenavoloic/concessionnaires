const liste = [
    ["01004","Ambérieu-en-Bugey"],
    ["01033","Valserhône"],
    ["01034","Belley"],
    ["01053","Bourg-en-Bresse"],
    ["01143","Divonne-les-Bains"],
    ["01160","Ferney-Voltaire"],
    ["01173","Gex"],
    ["01249","Miribel"],
    ["01283","Oyonnax"],
    ["01313","Prévessin-Moëns"],
    ["01354","Saint-Genis-Pouilly"],
    ["02168","Château-Thierry"],
    ["02173","Chauny"],
    ["02381","Hirson"],
    ["02408","Laon"],
    ["02691","Saint-Quentin"],
    ["02722","Soissons"],
    ["02738","Tergnier"],
    ["02810","Villers-Cotterêts"],
    ["03023","Bellerive-sur-Allier"],
    ["03095","Cusset"],
    ["03101","Domérat"],
    ["03185","Montluçon"],
    ["03190","Moulins"],
    ["03310","Vichy"],
    ["03321","Yzeure"],
    ["04070","Digne-les-Bains"],
    ["04112","Manosque"],
    ["05023","Briançon"],
    ["05061","Gap"],
    ["06004","Antibes"],
    ["06012","Beausoleil"],
    ["06018","Biot"],
    ["06027","Cagnes-sur-Mer"],
    ["06029","Cannes"],
    ["06030","Le Cannet"],
    ["06033","Carros"],
    ["06069","Grasse"],
    ["06079","Mandelieu-la-Napoule"],
    ["06083","Menton"],
    ["06084","Mouans-Sartoux"],
    ["06085","Mougins"],
    ["06088","Nice"],
    ["06090","Pégomas"],
    ["06095","Peymeinade"],
    ["06104","Roquebrune-Cap-Martin"],
    ["06123","Saint-Laurent-du-Var"],
    ["06149","La Trinité"],
    ["06152","Valbonne"],
    ["06155","Vallauris"],
    ["06157","Vence"],
    ["06161","Villeneuve-Loubet"],
    ["07010","Annonay"],
    ["07019","Aubenas"],
    ["07102","Guilherand-Granges"],
    ["07186","Privas"],
    ["07319","Le Teil"],
    ["07324","Tournon-sur-Rhône"],
    ["08105","Charleville-Mézières"],
    ["08409","Sedan"],
    ["09122","Foix"],
    ["09225","Pamiers"],
    ["10081","La Chapelle-Saint-Luc"],
    ["10323","Romilly-sur-Seine"],
    ["10333","Saint-André-les-Vergers"],
    ["10362","Sainte-Savine"],
    ["10387","Troyes"],
    ["11069","Carcassonne"],
    ["11076","Castelnaudary"],
    ["11203","Lézignan-Corbières"],
    ["11206","Limoux"],
    ["11262","Narbonne"],
    ["12145","Millau"],
    ["12176","Onet-le-Château"],
    ["12202","Rodez"],
    ["12208","Saint-Affrique"],
    ["12300","Villefranche-de-Rouergue"],
    ["13001","Aix-en-Provence"],
    ["13002","Allauch"],
    ["13004","Arles"],
    ["13005","Aubagne"],
    ["13007","Auriol"],
    ["13014","Berre-l’Étang"],
    ["13015","Bouc-Bel-Air"],
    ["13019","Cabriès"],
    ["13026","Châteauneuf-les-Martigues"],
    ["13027","Châteaurenard"],
    ["13028","La Ciotat"],
    ["13037","La Fare-les-Oliviers"],
    ["13039","Fos-sur-Mer"],
    ["13040","Fuveau"],
    ["13041","Gardanne"],
    ["13043","Gignac-la-Nerthe"],
    ["13047","Istres"],
    ["13050","Lambesc"],
    ["13051","Lançon-Provence"],
    ["13054","Marignane"],
    ["13056","Martigues"],
    ["13063","Miramas"],
    ["13069","Pélissanne"],
    ["13071","Les Pennes-Mirabeau"],
    ["13075","Plan-de-Cuques"],
    ["13077","Port-de-Bouc"],
    ["13078","Port-Saint-Louis-du-Rhône"],
    ["13081","Rognac"],
    ["13086","Roquevaire"],
    ["13092","Saint-Chamas"],
    ["13097","Saint-Martin-de-Crau"],
    ["13100","Saint-Rémy-de-Provence"],
    ["13103","Salon-de-Provence"],
    ["13106","Septèmes-les-Vallons"],
    ["13108","Tarascon"],
    ["13110","Trets"],
    ["13112","Velaux"],
    ["13113","Venelles"],
    ["13117","Vitrolles"],
    ["13201","Marseille 1er"],
    ["13202","Marseille 2e"],
    ["13203","Marseille 3e"],
    ["13204","Marseille 4e"],
    ["13205","Marseille 5e"],
    ["13206","Marseille 6e"],
    ["13207","Marseille 7e"],
    ["13208","Marseille 8e"],
    ["13209","Marseille 9e"],
    ["13210","Marseille 10e"],
    ["13211","Marseille 11e"],
    ["13212","Marseille 12e"],
    ["13213","Marseille 13e"],
    ["13214","Marseille 14e"],
    ["13215","Marseille 15e"],
    ["13216","Marseille 16e"],
    ["14047","Bayeux"],
    ["14061","Souleuvre en Bocage"],
    ["14118","Caen"],
    ["14258","Falaise"],
    ["14327","Hérouville-Saint-Clair"],
    ["14341","Ifs"],
    ["14366","Lisieux"],
    ["14431","Mézidon Vallée d’Auge"],
    ["14437","Mondeville"],
    ["14488","Ouistreham"],
    ["14762","Vire Normandie"],
    ["15014","Aurillac"],
    ["16015","Angoulême"],
    ["16102","Cognac"],
    ["16374","Soyaux"],
    ["17028","Aytré"],
    ["17274","Périgny"],
    ["17299","Rochefort"],
    ["17300","La Rochelle"],
    ["17306","Royan"],
    ["17415","Saintes"],
    ["17449","Tonnay-Charente"],
    ["18033","Bourges"],
    ["18197","Saint-Amand-Montrond"],
    ["18205","Saint-Doulchard"],
    ["18279","Vierzon"],
    ["19031","Brive-la-Gaillarde"],
    ["19123","Malemort"],
    ["19272","Tulle"],
    ["19275","Ussel"],
    ["21054","Beaune"],
    ["21166","Chenôve"],
    ["21171","Chevigny-Saint-Sauveur"],
    ["21231","Dijon"],
    ["21278","Fontaine-lès-Dijon"],
    ["21355","Longvic"],
    ["21515","Quetigny"],
    ["21617","Talant"],
    ["22050","Dinan"],
    ["22093","Lamballe-Armor"],
    ["22113","Lannion"],
    ["22136","Loudéac"],
    ["22187","Plérin"],
    ["22215","Ploufragan"],
    ["22278","Saint-Brieuc"],
    ["22360","Trégueux"],
    ["23096","Guéret"],
    ["24037","Bergerac"],
    ["24053","Boulazac Isle Manoire"],
    ["24138","Coulounieix-Chamiers"],
    ["24322","Périgueux"],
    ["24520","Sarlat-la-Canéda"],
    ["25031","Audincourt"],
    ["25056","Besançon"],
    ["25388","Montbéliard"],
    ["25462","Pontarlier"],
    ["25580","Valentigney"],
    ["26057","Bourg-de-Péage"],
    ["26058","Bourg-lès-Valence"],
    ["26108","Crest"],
    ["26165","Livron-sur-Drôme"],
    ["26198","Montélimar"],
    ["26235","Pierrelatte"],
    ["26252","Portes-lès-Valence"],
    ["26281","Romans-sur-Isère"],
    ["26324","Saint-Paul-Trois-Châteaux"],
    ["26362","Valence"],
    ["27016","Les Andelys"],
    ["27056","Bernay"],
    ["27229","Évreux"],
    ["27284","Gisors"],
    ["27375","Louviers"],
    ["27467","Pont-Audemer"],
    ["27679","Verneuil d’Avre et d’Iton"],
    ["27681","Vernon"],
    ["27701","Val-de-Reuil"],
    ["28085","Chartres"],
    ["28088","Châteaudun"],
    ["28134","Dreux"],
    ["28218","Lucé"],
    ["28229","Mainvilliers"],
    ["28280","Nogent-le-Rotrou"],
    ["28404","Vernouillet"],
    ["29019","Brest"],
    ["29039","Concarneau"],
    ["29046","Douarnenez"],
    ["29051","Ergué-Gabéric"],
    ["29058","Fouesnant"],
    ["29069","Guilers"],
    ["29075","Guipavas"],
    ["29103","Landerneau"],
    ["29105","Landivisiau"],
    ["29151","Morlaix"],
    ["29160","Plabennec"],
    ["29189","Plougastel-Daoulas"],
    ["29212","Plouzané"],
    ["29220","Pont-l’Abbé"],
    ["29232","Quimper"],
    ["29233","Quimperlé"],
    ["29235","Le Relecq-Kerhuon"],
    ["29260","Saint-Renan"],
    ["30003","Aigues-Mortes"],
    ["30007","Alès"],
    ["30011","Les Angles"],
    ["30028","Bagnols-sur-Cèze"],
    ["30032","Beaucaire"],
    ["30133","Le Grau-du-Roi"],
    ["30156","Marguerittes"],
    ["30189","Nîmes"],
    ["30202","Pont-Saint-Esprit"],
    ["30258","Saint-Gilles"],
    ["30334","Uzès"],
    ["30341","Vauvert"],
    ["30351","Villeneuve-lès-Avignon"],
    ["31022","Aucamville"],
    ["31033","Auterive"],
    ["31044","Balma"],
    ["31069","Blagnac"],
    ["31113","Castanet-Tolosan"],
    ["31116","Castelginest"],
    ["31149","Colomiers"],
    ["31157","Cugnaux"],
    ["31187","Fonsorbes"],
    ["31203","Frouzins"],
    ["31232","Grenade"],
    ["31282","Launaguet"],
    ["31291","Léguevin"],
    ["31395","Muret"],
    ["31417","Pibrac"],
    ["31424","Plaisance-du-Touch"],
    ["31433","Portet-sur-Garonne"],
    ["31446","Ramonville-Saint-Agne"],
    ["31451","Revel"],
    ["31483","Saint-Gaudens"],
    ["31488","Saint-Jean"],
    ["31499","Saint-Lys"],
    ["31506","Saint-Orens-de-Gameville"],
    ["31526","La Salvetat-Saint-Gilles"],
    ["31547","Seysses"],
    ["31555","Toulouse"],
    ["31557","Tournefeuille"],
    ["31561","L’Union"],
    ["31588","Villeneuve-Tolosane"],
    ["32013","Auch"],
    ["32160","L’Isle-Jourdain"],
    ["33003","Ambarès-et-Lagrave"],
    ["33005","Andernos-les-Bains"],
    ["33009","Arcachon"],
    ["33013","Artigues-près-Bordeaux"],
    ["33019","Audenge"],
    ["33039","Bègles"],
    ["33051","Biganos"],
    ["33056","Blanquefort"],
    ["33063","Bordeaux"],
    ["33069","Le Bouscat"],
    ["33075","Bruges"],
    ["33096","Carbon-Blanc"],
    ["33119","Cenon"],
    ["33122","Cestas"],
    ["33138","Coutras"],
    ["33162","Eysines"],
    ["33167","Floirac"],
    ["33192","Gradignan"],
    ["33199","Gujan-Mestras"],
    ["33200","Le Haillan"],
    ["33236","Lège-Cap-Ferret"],
    ["33238","Léognan"],
    ["33243","Libourne"],
    ["33249","Lormont"],
    ["33281","Mérignac"],
    ["33284","Mios"],
    ["33312","Parempuyre"],
    ["33318","Pessac"],
    ["33366","Saint-André-de-Cubzac"],
    ["33422","Saint-Jean-d’Illac"],
    ["33433","Saint-Loubès"],
    ["33449","Saint-Médard-en-Jalles"],
    ["33519","Le Taillan-Médoc"],
    ["33522","Talence"],
    ["33527","Le Teich"],
    ["33529","La Teste-de-Buch"],
    ["33550","Villenave-d’Ornon"],
    ["34003","Agde"],
    ["34032","Béziers"],
    ["34057","Castelnau-le-Lez"],
    ["34079","Clermont-l’Hérault"],
    ["34090","Le Crès"],
    ["34108","Frontignan"],
    ["34116","Grabels"],
    ["34123","Juvignac"],
    ["34129","Lattes"],
    ["34145","Lunel"],
    ["34154","Mauguio"],
    ["34157","Mèze"],
    ["34172","Montpellier"],
    ["34198","Pérols"],
    ["34199","Pézenas"],
    ["34255","Saint-Gély-du-Fesc"],
    ["34270","Saint-Jean-de-Védas"],
    ["34301","Sète"],
    ["34337","Villeneuve-lès-Maguelone"],
    ["34344","La Grande-Motte"],
    ["35024","Betton"],
    ["35047","Bruz"],
    ["35051","Cesson-Sévigné"],
    ["35055","Chantepie"],
    ["35069","Châteaugiron"],
    ["35093","Dinard"],
    ["35115","Fougères"],
    ["35126","Guichen"],
    ["35136","Janzé"],
    ["35210","Pacé"],
    ["35236","Redon"],
    ["35238","Rennes"],
    ["35240","Le Rheu"],
    ["35278","Saint-Grégoire"],
    ["35281","Saint-Jacques-de-la-Lande"],
    ["35288","Saint-Malo"],
    ["35334","Thorigné-Fouillard"],
    ["35352","Vern-sur-Seiche"],
    ["35360","Vitré"],
    ["36044","Châteauroux"],
    ["36088","Issoudun"],
    ["37003","Amboise"],
    ["37018","Ballan-Miré"],
    ["37050","Chambray-lès-Tours"],
    ["37072","Chinon"],
    ["37109","Fondettes"],
    ["37122","Joué-lès-Tours"],
    ["37156","Montlouis-sur-Loire"],
    ["37195","La Riche"],
    ["37208","Saint-Avertin"],
    ["37214","Saint-Cyr-sur-Loire"],
    ["37233","Saint-Pierre-des-Corps"],
    ["37261","Tours"],
    ["38053","Bourgoin-Jallieu"],
    ["38085","Charvieu-Chavagneux"],
    ["38111","Claix"],
    ["38140","Crolles"],
    ["38151","Échirolles"],
    ["38158","Eybens"],
    ["38169","Fontaine"],
    ["38185","Grenoble"],
    ["38193","L’Isle-d’Abeau"],
    ["38229","Meylan"],
    ["38239","Moirans"],
    ["38317","Le Pont-de-Claix"],
    ["38344","Roussillon"],
    ["38382","Saint-Égrève"],
    ["38416","Saint-Marcellin"],
    ["38421","Saint-Martin-d’Hères"],
    ["38474","Sassenage"],
    ["38485","Seyssinet-Pariset"],
    ["38509","La Tour-du-Pin"],
    ["38524","Varces-Allières-et-Risset"],
    ["38544","Vienne"],
    ["38545","Vif"],
    ["38553","Villefontaine"],
    ["38563","Voiron"],
    ["38565","Voreppe"],
    ["39097","Champagnole"],
    ["39198","Dole"],
    ["39300","Lons-le-Saunier"],
    ["39478","Saint-Claude"],
    ["40046","Biscarrosse"],
    ["40065","Capbreton"],
    ["40088","Dax"],
    ["40192","Mont-de-Marsan"],
    ["40279","Saint-Paul-lès-Dax"],
    ["40281","Saint-Pierre-du-Mont"],
    ["40310","Soustons"],
    ["40312","Tarnos"],
    ["41018","Blois"],
    ["41194","Romorantin-Lanthenay"],
    ["41269","Vendôme"],
    ["41295","Vineuil"],
    ["42005","Andrézieux-Bouthéon"],
    ["42044","Le Chambon-Feugerolles"],
    ["42094","Feurs"],
    ["42095","Firminy"],
    ["42147","Montbrison"],
    ["42184","Riorges"],
    ["42186","Rive-de-Gier"],
    ["42187","Roanne"],
    ["42189","Roche-la-Molière"],
    ["42207","Saint-Chamond"],
    ["42218","Saint-Étienne"],
    ["42279","Saint-Just-Saint-Rambert"],
    ["42302","Sorbiers"],
    ["42316","Unieux"],
    ["42323","Veauche"],
    ["42330","Villars"],
    ["43137","Monistrol-sur-Loire"],
    ["43157","Le Puy-en-Velay"],
    ["44003","Ancenis-Saint-Géréon"],
    ["44009","Basse-Goulaine"],
    ["44015","Blain"],
    ["44020","Bouguenais"],
    ["44026","Carquefou"],
    ["44035","La Chapelle-sur-Erdre"],
    ["44036","Châteaubriant"],
    ["44047","Couëron"],
    ["44052","Donges"],
    ["44055","La Baule-Escoublac"],
    ["44069","Guérande"],
    ["44084","Le Loroux-Bottereau"],
    ["44109","Nantes"],
    ["44110","Nort-sur-Erdre"],
    ["44114","Orvault"],
    ["44129","Pontchâteau"],
    ["44131","Pornic"],
    ["44132","Pornichet"],
    ["44143","Rezé"],
    ["44154","Saint-Brevin-les-Pins"],
    ["44162","Saint-Herblain"],
    ["44172","Sainte-Luce-sur-Loire"],
    ["44184","Saint-Nazaire"],
    ["44188","Saint-Philbert-de-Grand-Lieu"],
    ["44190","Saint-Sébastien-sur-Loire"],
    ["44194","Sautron"],
    ["44195","Savenay"],
    ["44198","Les Sorinières"],
    ["44204","Thouaré-sur-Loire"],
    ["44209","Treillières"],
    ["44212","Vallet"],
    ["44215","Vertou"],
    ["45004","Amilly"],
    ["45068","Châlette-sur-Loing"],
    ["45075","La Chapelle-Saint-Mesmin"],
    ["45082","Châteauneuf-sur-Loire"],
    ["45089","Chécy"],
    ["45147","Fleury-les-Aubrais"],
    ["45155","Gien"],
    ["45169","Ingré"],
    ["45191","Le Malesherbois"],
    ["45208","Montargis"],
    ["45232","Olivet"],
    ["45234","Orléans"],
    ["45252","Pithiviers"],
    ["45284","Saint-Jean-de-Braye"],
    ["45285","Saint-Jean-de-la-Ruelle"],
    ["45286","Saint-Jean-le-Blanc"],
    ["45302","Saran"],
    ["46042","Cahors"],
    ["46102","Figeac"],
    ["47001","Agen"],
    ["47157","Marmande"],
    ["47201","Le Passage"],
    ["47310","Tonneins"],
    ["47323","Villeneuve-sur-Lot"],
    ["48095","Mende"],
    ["49007","Angers"],
    ["49015","Avrillé"],
    ["49018","Baugé-en-Anjou"],
    ["49023","Beaupréau-en-Mauges"],
    ["49050","Brissac Loire Aubance"],
    ["49069","Orée d’Anjou"],
    ["49080","Les Hauts-d’Anjou"],
    ["49092","Chemillé-en-Anjou"],
    ["49099","Cholet"],
    ["49125","Doué-en-Anjou"],
    ["49218","Montrevault-sur-Èvre"],
    ["49244","Mauges-sur-Loire"],
    ["49246","Les Ponts-de-Cé"],
    ["49248","Ombrée d’Anjou"],
    ["49261","Gennes-Val-de-Loire"],
    ["49267","Saint-Barthélemy-d’Anjou"],
    ["49301","Sèvremoine"],
    ["49307","Loire-Authion"],
    ["49328","Saumur"],
    ["49331","Segré-en-Anjou Bleu"],
    ["49353","Trélazé"],
    ["49373","Lys-Haut-Layon"],
    ["50025","Avranches"],
    ["50041","La Hague"],
    ["50099","Carentan-les-Marais"],
    ["50129","Cherbourg-en-Cotentin"],
    ["50147","Coutances"],
    ["50218","Granville"],
    ["50502","Saint-Lô"],
    ["51108","Châlons-en-Champagne"],
    ["51230","Épernay"],
    ["51454","Reims"],
    ["51573","Tinqueux"],
    ["51649","Vitry-le-François"],
    ["52121","Chaumont"],
    ["52269","Langres"],
    ["52448","Saint-Dizier"],
    ["53062","Château-Gontier-sur-Mayenne"],
    ["53097","Évron"],
    ["53130","Laval"],
    ["53147","Mayenne"],
    ["54099","Val de Briey"],
    ["54159","Dombasle-sur-Meurthe"],
    ["54184","Essey-lès-Nancy"],
    ["54273","Jarny"],
    ["54274","Jarville-la-Malgrange"],
    ["54304","Laxou"],
    ["54323","Longwy"],
    ["54329","Lunéville"],
    ["54339","Malzéville"],
    ["54357","Maxéville"],
    ["54382","Mont-Saint-Martin"],
    ["54395","Nancy"],
    ["54431","Pont-à-Mousson"],
    ["54482","Saint-Max"],
    ["54526","Tomblaine"],
    ["54528","Toul"],
    ["54547","Vandœuvre-lès-Nancy"],
    ["54578","Villers-lès-Nancy"],
    ["54580","Villerupt"],
    ["55029","Bar-le-Duc"],
    ["55545","Verdun"],
    ["56007","Auray"],
    ["56078","Guidel"],
    ["56083","Hennebont"],
    ["56098","Lanester"],
    ["56101","Languidic"],
    ["56107","Larmor-Plage"],
    ["56121","Lorient"],
    ["56162","Ploemeur"],
    ["56165","Ploërmel"],
    ["56178","Pontivy"],
    ["56185","Quéven"],
    ["56206","Saint-Avé"],
    ["56240","Sarzeau"],
    ["56243","Séné"],
    ["56251","Theix-Noyalo"],
    ["56260","Vannes"],
    ["57019","Amnéville"],
    ["57160","Creutzwald"],
    ["57206","Fameck"],
    ["57221","Florange"],
    ["57227","Forbach"],
    ["57240","Freyming-Merlebach"],
    ["57283","Hagondange"],
    ["57306","Hayange"],
    ["57433","Maizières-lès-Metz"],
    ["57447","Marly"],
    ["57463","Metz"],
    ["57480","Montigny-lès-Metz"],
    ["57591","Rombas"],
    ["57606","Saint-Avold"],
    ["57630","Sarrebourg"],
    ["57631","Sarreguemines"],
    ["57660","Stiring-Wendel"],
    ["57672","Thionville"],
    ["57751","Woippy"],
    ["57757","Yutz"],
    ["58086","Cosne-Cours-sur-Loire"],
    ["58194","Nevers"],
    ["58303","Varennes-Vauzelles"],
    ["59008","Aniche"],
    ["59009","Villeneuve-d’Ascq"],
    ["59011","Annœullin"],
    ["59014","Anzin"],
    ["59017","Armentières"],
    ["59033","Aulnoye-Aymeries"],
    ["59043","Bailleul"],
    ["59090","Bondues"],
    ["59112","Bruay-sur-l’Escaut"],
    ["59122","Cambrai"],
    ["59139","Caudry"],
    ["59143","La Chapelle-d’Armentières"],
    ["59152","Comines"],
    ["59153","Condé-sur-l’Escaut"],
    ["59155","Coudekerque-Branche"],
    ["59163","Croix"],
    ["59172","Denain"],
    ["59178","Douai"],
    ["59179","Douchy-les-Mines"],
    ["59183","Dunkerque"],
    ["59205","Escaudain"],
    ["59220","Faches-Thumesnil"],
    ["59249","Fourmies"],
    ["59271","Grande-Synthe"],
    ["59273","Gravelines"],
    ["59279","Halluin"],
    ["59286","Haubourdin"],
    ["59291","Hautmont"],
    ["59295","Hazebrouck"],
    ["59299","Hem"],
    ["59324","Jeumont"],
    ["59328","Lambersart"],
    ["59339","Leers"],
    ["59343","Lesquin"],
    ["59350","Lille"],
    ["59352","Linselles"],
    ["59360","Loos"],
    ["59367","Lys-lez-Lannoy"],
    ["59368","La Madeleine"],
    ["59378","Marcq-en-Barœul"],
    ["59383","Marly"],
    ["59386","Marquette-lez-Lille"],
    ["59392","Maubeuge"],
    ["59400","Merville"],
    ["59410","Mons-en-Barœul"],
    ["59421","Mouvaux"],
    ["59426","Neuville-en-Ferrain"],
    ["59447","Onnaing"],
    ["59449","Orchies"],
    ["59457","Pérenchies"],
    ["59491","Raismes"],
    ["59507","Ronchin"],
    ["59508","Roncq"],
    ["59512","Roubaix"],
    ["59526","Saint-Amand-les-Eaux"],
    ["59527","Saint-André-lez-Lille"],
    ["59544","Saint-Saulve"],
    ["59560","Seclin"],
    ["59569","Sin-le-Noble"],
    ["59574","Somain"],
    ["59588","Téteghem-Coudekerque-Village"],
    ["59599","Tourcoing"],
    ["59606","Valenciennes"],
    ["59616","Vieux-Condé"],
    ["59636","Wambrechies"],
    ["59646","Wasquehal"],
    ["59648","Wattignies"],
    ["59650","Wattrelos"],
    ["60057","Beauvais"],
    ["60139","Chambly"],
    ["60141","Chantilly"],
    ["60157","Clermont"],
    ["60159","Compiègne"],
    ["60175","Creil"],
    ["60176","Crépy-en-Valois"],
    ["60282","Gouvieux"],
    ["60346","Lamorlaye"],
    ["60382","Margny-lès-Compiègne"],
    ["60395","Méru"],
    ["60414","Montataire"],
    ["60463","Nogent-sur-Oise"],
    ["60471","Noyon"],
    ["60509","Pont-Sainte-Maxence"],
    ["60612","Senlis"],
    ["61001","Alençon"],
    ["61006","Argentan"],
    ["61169","Flers"],
    ["61214","L’Aigle"],
    ["62014","Aire-sur-la-Lys"],
    ["62040","Arques"],
    ["62041","Arras"],
    ["62048","Auchel"],
    ["62065","Avion"],
    ["62108","Berck"],
    ["62119","Béthune"],
    ["62126","Beuvry"],
    ["62133","Billy-Montigny"],
    ["62160","Boulogne-sur-Mer"],
    ["62178","Bruay-la-Buissière"],
    ["62186","Bully-les-Mines"],
    ["62193","Calais"],
    ["62215","Carvin"],
    ["62250","Courrières"],
    ["62318","Étaples"],
    ["62413","Harnes"],
    ["62427","Hénin-Beaumont"],
    ["62473","Isbergues"],
    ["62498","Lens"],
    ["62510","Liévin"],
    ["62516","Lillers"],
    ["62525","Longuenesse"],
    ["62548","Marck"],
    ["62563","Mazingarbe"],
    ["62570","Méricourt"],
    ["62587","Montigny-en-Gohelle"],
    ["62617","Nœux-les-Mines"],
    ["62637","Oignies"],
    ["62643","Outreau"],
    ["62667","Le Portel"],
    ["62724","Rouvroy"],
    ["62758","Saint-Martin-Boulogne"],
    ["62765","Saint-Omer"],
    ["62771","Sallaumines"],
    ["62842","Vendin-le-Vieil"],
    ["62895","Wingles"],
    ["62907","Libercourt"],
    ["63014","Aubière"],
    ["63032","Beaumont"],
    ["63063","Cébazat"],
    ["63075","Chamalières"],
    ["63113","Clermont-Ferrand"],
    ["63124","Cournon-d’Auvergne"],
    ["63164","Gerzat"],
    ["63178","Issoire"],
    ["63193","Lempdes"],
    ["63284","Pont-du-Château"],
    ["63300","Riom"],
    ["63430","Thiers"],
    ["64024","Anglet"],
    ["64102","Bayonne"],
    ["64122","Biarritz"],
    ["64129","Billère"],
    ["64140","Boucau"],
    ["64260","Hendaye"],
    ["64335","Lescar"],
    ["64348","Lons"],
    ["64422","Oloron-Sainte-Marie"],
    ["64430","Orthez"],
    ["64445","Pau"],
    ["64483","Saint-Jean-de-Luz"],
    ["64545","Urrugne"],
    ["65286","Lourdes"],
    ["65440","Tarbes"],
    ["66008","Argelès-sur-Mer"],
    ["66028","Cabestany"],
    ["66037","Canet-en-Roussillon"],
    ["66049","Céret"],
    ["66065","Elne"],
    ["66136","Perpignan"],
    ["66141","Pia"],
    ["66164","Rivesaltes"],
    ["66171","Saint-Cyprien"],
    ["66172","Saint-Estève"],
    ["66180","Saint-Laurent-de-la-Salanque"],
    ["67043","Bischheim"],
    ["67046","Bischwiller"],
    ["67067","Brumath"],
    ["67130","Erstein"],
    ["67180","Haguenau"],
    ["67204","Hœnheim"],
    ["67218","Illkirch-Graffenstaden"],
    ["67267","Lingolsheim"],
    ["67300","Molsheim"],
    ["67348","Obernai"],
    ["67365","Ostwald"],
    ["67437","Saverne"],
    ["67447","Schiltigheim"],
    ["67462","Sélestat"],
    ["67471","Souffelweyersheim"],
    ["67482","Strasbourg"],
    ["68056","Brunstatt-Didenheim"],
    ["68063","Cernay"],
    ["68066","Colmar"],
    ["68112","Guebwiller"],
    ["68154","Illzach"],
    ["68166","Kingersheim"],
    ["68224","Mulhouse"],
    ["68256","Pfastatt"],
    ["68271","Riedisheim"],
    ["68278","Rixheim"],
    ["68297","Saint-Louis"],
    ["68375","Wittelsheim"],
    ["68376","Wittenheim"],
    ["69019","Belleville-en-Beaujolais"],
    ["69027","Brignais"],
    ["69029","Bron"],
    ["69034","Caluire-et-Cuire"],
    ["69043","Chaponost"],
    ["69069","Craponne"],
    ["69072","Dardilly"],
    ["69081","Écully"],
    ["69089","Francheville"],
    ["69091","Givors"],
    ["69096","Grigny"],
    ["69100","Irigny"],
    ["69149","Oullins"],
    ["69152","Pierre-Bénite"],
    ["69199","Saint-Fons"],
    ["69202","Sainte-Foy-lès-Lyon"],
    ["69204","Saint-Genis-Laval"],
    ["69243","Tarare"],
    ["69244","Tassin-la-Demi-Lune"],
    ["69256","Vaulx-en-Velin"],
    ["69259","Vénissieux"],
    ["69264","Villefranche-sur-Saône"],
    ["69266","Villeurbanne"],
    ["69271","Chassieu"],
    ["69273","Corbas"],
    ["69275","Décines-Charpieu"],
    ["69276","Feyzin"],
    ["69277","Genas"],
    ["69282","Meyzieu"],
    ["69283","Mions"],
    ["69286","Rillieux-la-Pape"],
    ["69290","Saint-Priest"],
    ["69381","Lyon 1er"],
    ["69382","Lyon 2e"],
    ["69383","Lyon 3e"],
    ["69384","Lyon 4e"],
    ["69385","Lyon 5e"],
    ["69386","Lyon 6e"],
    ["69387","Lyon 7e"],
    ["69388","Lyon 8e"],
    ["69389","Lyon 9e"],
    ["70285","Héricourt"],
    ["70310","Lure"],
    ["70550","Vesoul"],
    ["71014","Autun"],
    ["71076","Chalon-sur-Saône"],
    ["71153","Le Creusot"],
    ["71176","Digoin"],
    ["71270","Mâcon"],
    ["71306","Montceau-les-Mines"],
    ["71342","Paray-le-Monial"],
    ["71486","Saint-Vallier"],
    ["72003","Allonnes"],
    ["72132","La Ferté-Bernard"],
    ["72154","La Flèche"],
    ["72181","Le Mans"],
    ["72264","Sablé-sur-Sarthe"],
    ["73008","Aix-les-Bains"],
    ["73011","Albertville"],
    ["73065","Chambéry"],
    ["73179","La Motte-Servolex"],
    ["73213","La Ravoire"],
    ["73248","Saint-Jean-de-Maurienne"],
    ["74010","Annecy"],
    ["74012","Annemasse"],
    ["74042","Bonneville"],
    ["74056","Chamonix-Mont-Blanc"],
    ["74081","Cluses"],
    ["74112","Epagny Metz-Tessy"],
    ["74119","Évian-les-Bains"],
    ["74133","Gaillard"],
    ["74208","Passy"],
    ["74213","Poisy"],
    ["74220","Reignier-Ésery"],
    ["74224","La Roche-sur-Foron"],
    ["74225","Rumilly"],
    ["74243","Saint-Julien-en-Genevois"],
    ["74256","Sallanches"],
    ["74264","Scionzier"],
    ["74281","Thonon-les-Bains"],
    ["74282","Fillière"],
    ["74298","Vétraz-Monthoux"],
    ["74305","Ville-la-Grand"],
    ["75101","Paris 1er"],
    ["75102","Paris 2e"],
    ["75103","Paris 3e"],
    ["75104","Paris 4e"],
    ["75105","Paris 5e"],
    ["75106","Paris 6e"],
    ["75107","Paris 7e"],
    ["75108","Paris 8e"],
    ["75109","Paris 9e"],
    ["75110","Paris 10e"],
    ["75111","Paris 11e"],
    ["75112","Paris 12e"],
    ["75113","Paris 13e"],
    ["75114","Paris 14e"],
    ["75115","Paris 15e"],
    ["75116","Paris 16e"],
    ["75117","Paris 17e"],
    ["75118","Paris 18e"],
    ["75119","Paris 19e"],
    ["75120","Paris 20e"],
    ["76057","Barentin"],
    ["76095","Bihorel"],
    ["76108","Bois-Guillaume"],
    ["76114","Bolbec"],
    ["76157","Canteleu"],
    ["76165","Caudebec-lès-Elbeuf"],
    ["76212","Darnétal"],
    ["76216","Déville-lès-Rouen"],
    ["76217","Dieppe"],
    ["76231","Elbeuf"],
    ["76259","Fécamp"],
    ["76305","Gonfreville-l’Orcher"],
    ["76319","Grand-Couronne"],
    ["76322","Le Grand-Quevilly"],
    ["76341","Harfleur"],
    ["76351","Le Havre"],
    ["76384","Lillebonne"],
    ["76410","Maromme"],
    ["76429","Le Mesnil-Esnard"],
    ["76447","Montivilliers"],
    ["76451","Mont-Saint-Aignan"],
    ["76476","Port-Jérôme-sur-Seine"],
    ["76484","Oissel"],
    ["76497","Petit-Couronne"],
    ["76498","Le Petit-Quevilly"],
    ["76540","Rouen"],
    ["76561","Saint-Aubin-lès-Elbeuf"],
    ["76575","Saint-Étienne-du-Rouvray"],
    ["76618","Petit-Caux"],
    ["76640","Saint-Pierre-lès-Elbeuf"],
    ["76681","Sotteville-lès-Rouen"],
    ["76758","Yvetot"],
    ["77014","Avon"],
    ["77053","Brie-Comte-Robert"],
    ["77058","Bussy-Saint-Georges"],
    ["77067","Cesson"],
    ["77083","Champs-sur-Marne"],
    ["77108","Chelles"],
    ["77118","Claye-Souilly"],
    ["77122","Combs-la-Ville"],
    ["77131","Coulommiers"],
    ["77152","Dammarie-les-Lys"],
    ["77153","Dammartin-en-Goële"],
    ["77183","La Ferté-sous-Jouarre"],
    ["77186","Fontainebleau"],
    ["77215","Gretz-Armainvilliers"],
    ["77243","Lagny-sur-Marne"],
    ["77251","Lieusaint"],
    ["77258","Lognes"],
    ["77268","Magny-le-Hongre"],
    ["77284","Meaux"],
    ["77285","Le Mée-sur-Seine"],
    ["77288","Melun"],
    ["77294","Mitry-Mory"],
    ["77296","Moissy-Cramayel"],
    ["77305","Montereau-Fault-Yonne"],
    ["77307","Montévrain"],
    ["77316","Moret-Loing-et-Orvanne"],
    ["77327","Nangis"],
    ["77333","Nemours"],
    ["77337","Noisiel"],
    ["77350","Ozoir-la-Ferrière"],
    ["77373","Pontault-Combault"],
    ["77379","Provins"],
    ["77390","Roissy-en-Brie"],
    ["77407","Saint-Fargeau-Ponthierry"],
    ["77445","Savigny-le-Temple"],
    ["77449","Serris"],
    ["77464","Thorigny-sur-Marne"],
    ["77468","Torcy"],
    ["77470","Tournan-en-Brie"],
    ["77479","Vaires-sur-Marne"],
    ["77487","Vaux-le-Pénil"],
    ["77514","Villeparisis"],
    ["78005","Achères"],
    ["78015","Andrésy"],
    ["78029","Aubergenville"],
    ["78073","Bois-d’Arcy"],
    ["78092","Bougival"],
    ["78123","Carrières-sous-Poissy"],
    ["78124","Carrières-sur-Seine"],
    ["78126","La Celle-Saint-Cloud"],
    ["78138","Chanteloup-les-Vignes"],
    ["78146","Chatou"],
    ["78158","Le Chesnay-Rocquencourt"],
    ["78165","Les Clayes-sous-Bois"],
    ["78172","Conflans-Sainte-Honorine"],
    ["78190","Croissy-sur-Seine"],
    ["78208","Élancourt"],
    ["78242","Fontenay-le-Fleury"],
    ["78297","Guyancourt"],
    ["78311","Houilles"],
    ["78322","Jouy-en-Josas"],
    ["78335","Limay"],
    ["78356","Magny-les-Hameaux"],
    ["78358","Maisons-Laffitte"],
    ["78361","Mantes-la-Jolie"],
    ["78362","Mantes-la-Ville"],
    ["78372","Marly-le-Roi"],
    ["78383","Maurepas"],
    ["78401","Meulan-en-Yvelines"],
    ["78418","Montesson"],
    ["78423","Montigny-le-Bretonneux"],
    ["78440","Les Mureaux"],
    ["78481","Le Pecq"],
    ["78490","Plaisir"],
    ["78498","Poissy"],
    ["78517","Rambouillet"],
    ["78545","Saint-Cyr-l’École"],
    ["78551","Saint-Germain-en-Laye"],
    ["78575","Saint-Rémy-lès-Chevreuse"],
    ["78586","Sartrouville"],
    ["78621","Trappes"],
    ["78624","Triel-sur-Seine"],
    ["78640","Vélizy-Villacoublay"],
    ["78642","Verneuil-sur-Seine"],
    ["78643","Vernouillet"],
    ["78646","Versailles"],
    ["78650","Le Vésinet"],
    ["78674","Villepreux"],
    ["78686","Viroflay"],
    ["78688","Voisins-le-Bretonneux"],
    ["79049","Bressuire"],
    ["79079","Mauléon"],
    ["79191","Niort"],
    ["79202","Parthenay"],
    ["79329","Thouars"],
    ["80001","Abbeville"],
    ["80016","Albert"],
    ["80021","Amiens"],
    ["81004","Albi"],
    ["81060","Carmaux"],
    ["81065","Castres"],
    ["81099","Gaillac"],
    ["81105","Graulhet"],
    ["81140","Lavaur"],
    ["81163","Mazamet"],
    ["81271","Saint-Sulpice-la-Pointe"],
    ["82033","Castelsarrasin"],
    ["82112","Moissac"],
    ["82121","Montauban"],
    ["83009","Bandol"],
    ["83016","Le Beausset"],
    ["83019","Bormes-les-Mimosas"],
    ["83023","Brignoles"],
    ["83034","Carqueiranne"],
    ["83042","Cogolin"],
    ["83047","La Crau"],
    ["83049","Cuers"],
    ["83050","Draguignan"],
    ["83054","La Farlède"],
    ["83061","Fréjus"],
    ["83062","La Garde"],
    ["83069","Hyères"],
    ["83071","La Londe-les-Maures"],
    ["83072","Lorgues"],
    ["83073","Le Luc"],
    ["83086","Le Muy"],
    ["83090","Ollioules"],
    ["83098","Le Pradet"],
    ["83099","Puget-sur-Argens"],
    ["83107","Roquebrune-sur-Argens"],
    ["83112","Saint-Cyr-sur-Mer"],
    ["83115","Sainte-Maxime"],
    ["83116","Saint-Maximin-la-Sainte-Baume"],
    ["83118","Saint-Raphaël"],
    ["83123","Sanary-sur-Mer"],
    ["83126","La Seyne-sur-Mer"],
    ["83129","Six-Fours-les-Plages"],
    ["83130","Solliès-Pont"],
    ["83137","Toulon"],
    ["83144","La Valette-du-Var"],
    ["83148","Vidauban"],
    ["84003","Apt"],
    ["84007","Avignon"],
    ["84019","Bollène"],
    ["84031","Carpentras"],
    ["84035","Cavaillon"],
    ["84043","Entraigues-sur-la-Sorgue"],
    ["84054","L’Isle-sur-la-Sorgue"],
    ["84080","Monteux"],
    ["84081","Morières-lès-Avignon"],
    ["84087","Orange"],
    ["84088","Pernes-les-Fontaines"],
    ["84089","Pertuis"],
    ["84092","Le Pontet"],
    ["84129","Sorgues"],
    ["84132","Le Thor"],
    ["84138","Valréas"],
    ["84141","Vedène"],
    ["85003","Aizenay"],
    ["85047","Challans"],
    ["85051","Chantonnay"],
    ["85084","Essarts en Bocage"],
    ["85092","Fontenay-le-Comte"],
    ["85109","Les Herbiers"],
    ["85128","Luçon"],
    ["85146","Montaigu-Vendée"],
    ["85178","Le Poiré-sur-Vie"],
    ["85191","La Roche-sur-Yon"],
    ["85194","Les Sables-d’Olonne"],
    ["85226","Saint-Hilaire-de-Riez"],
    ["85234","Saint-Jean-de-Monts"],
    ["86041","Buxerolles"],
    ["86066","Châtellerault"],
    ["86194","Poitiers"],
    ["87050","Couzeix"],
    ["87085","Limoges"],
    ["87114","Panazol"],
    ["87154","Saint-Junien"],
    ["88160","Épinal"],
    ["88196","Gérardmer"],
    ["88209","Golbey"],
    ["88383","Remiremont"],
    ["88413","Saint-Dié-des-Vosges"],
    ["88465","Capavenir Vosges"],
    ["89024","Auxerre"],
    ["89206","Joigny"],
    ["89387","Sens"],
    ["90010","Belfort"],
    ["91021","Arpajon"],
    ["91027","Athis-Mons"],
    ["91086","Bondoufle"],
    ["91103","Brétigny-sur-Orge"],
    ["91105","Breuillet"],
    ["91114","Brunoy"],
    ["91122","Bures-sur-Yvette"],
    ["91161","Chilly-Mazarin"],
    ["91174","Corbeil-Essonnes"],
    ["91191","Crosne"],
    ["91200","Dourdan"],
    ["91201","Draveil"],
    ["91215","Épinay-sous-Sénart"],
    ["91216","Épinay-sur-Orge"],
    ["91223","Étampes"],
    ["91228","Évry-Courcouronnes"],
    ["91235","Fleury-Mérogis"],
    ["91272","Gif-sur-Yvette"],
    ["91286","Grigny"],
    ["91312","Igny"],
    ["91326","Juvisy-sur-Orge"],
    ["91345","Longjumeau"],
    ["91363","Marcoussis"],
    ["91377","Massy"],
    ["91386","Mennecy"],
    ["91421","Montgeron"],
    ["91432","Morangis"],
    ["91434","Morsang-sur-Orge"],
    ["91471","Orsay"],
    ["91477","Palaiseau"],
    ["91514","Quincy-sous-Sénart"],
    ["91521","Ris-Orangis"],
    ["91549","Sainte-Geneviève-des-Bois"],
    ["91552","Saint-Germain-lès-Arpajon"],
    ["91570","Saint-Michel-sur-Orge"],
    ["91573","Saint-Pierre-du-Perray"],
    ["91589","Savigny-sur-Orge"],
    ["91645","Verrières-le-Buisson"],
    ["91657","Vigneux-sur-Seine"],
    ["91661","Villebon-sur-Yvette"],
    ["91687","Viry-Châtillon"],
    ["91691","Yerres"],
    ["91692","Les Ulis"],
    ["92002","Antony"],
    ["92004","Asnières-sur-Seine"],
    ["92007","Bagneux"],
    ["92009","Bois-Colombes"],
    ["92012","Boulogne-Billancourt"],
    ["92014","Bourg-la-Reine"],
    ["92019","Châtenay-Malabry"],
    ["92020","Châtillon"],
    ["92022","Chaville"],
    ["92023","Clamart"],
    ["92024","Clichy"],
    ["92025","Colombes"],
    ["92026","Courbevoie"],
    ["92032","Fontenay-aux-Roses"],
    ["92033","Garches"],
    ["92035","La Garenne-Colombes"],
    ["92036","Gennevilliers"],
    ["92040","Issy-les-Moulineaux"],
    ["92044","Levallois-Perret"],
    ["92046","Malakoff"],
    ["92048","Meudon"],
    ["92049","Montrouge"],
    ["92050","Nanterre"],
    ["92051","Neuilly-sur-Seine"],
    ["92060","Le Plessis-Robinson"],
    ["92062","Puteaux"],
    ["92063","Rueil-Malmaison"],
    ["92064","Saint-Cloud"],
    ["92071","Sceaux"],
    ["92072","Sèvres"],
    ["92073","Suresnes"],
    ["92075","Vanves"],
    ["92076","Vaucresson"],
    ["92077","Ville-d’Avray"],
    ["92078","Villeneuve-la-Garenne"],
    ["93001","Aubervilliers"],
    ["93005","Aulnay-sous-Bois"],
    ["93006","Bagnolet"],
    ["93007","Le Blanc-Mesnil"],
    ["93008","Bobigny"],
    ["93010","Bondy"],
    ["93013","Le Bourget"],
    ["93014","Clichy-sous-Bois"],
    ["93027","La Courneuve"],
    ["93029","Drancy"],
    ["93030","Dugny"],
    ["93031","Épinay-sur-Seine"],
    ["93032","Gagny"],
    ["93039","L’Île-Saint-Denis"],
    ["93045","Les Lilas"],
    ["93046","Livry-Gargan"],
    ["93047","Montfermeil"],
    ["93048","Montreuil"],
    ["93049","Neuilly-Plaisance"],
    ["93050","Neuilly-sur-Marne"],
    ["93051","Noisy-le-Grand"],
    ["93053","Noisy-le-Sec"],
    ["93055","Pantin"],
    ["93057","Les Pavillons-sous-Bois"],
    ["93059","Pierrefitte-sur-Seine"],
    ["93061","Le Pré-Saint-Gervais"],
    ["93062","Le Raincy"],
    ["93063","Romainville"],
    ["93064","Rosny-sous-Bois"],
    ["93066","Saint-Denis"],
    ["93070","Saint-Ouen-sur-Seine"],
    ["93071","Sevran"],
    ["93072","Stains"],
    ["93073","Tremblay-en-France"],
    ["93077","Villemomble"],
    ["93078","Villepinte"],
    ["93079","Villetaneuse"],
    ["94002","Alfortville"],
    ["94003","Arcueil"],
    ["94004","Boissy-Saint-Léger"],
    ["94011","Bonneuil-sur-Marne"],
    ["94015","Bry-sur-Marne"],
    ["94016","Cachan"],
    ["94017","Champigny-sur-Marne"],
    ["94018","Charenton-le-Pont"],
    ["94019","Chennevières-sur-Marne"],
    ["94021","Chevilly-Larue"],
    ["94022","Choisy-le-Roi"],
    ["94028","Créteil"],
    ["94033","Fontenay-sous-Bois"],
    ["94034","Fresnes"],
    ["94037","Gentilly"],
    ["94038","L’Haÿ-les-Roses"],
    ["94041","Ivry-sur-Seine"],
    ["94042","Joinville-le-Pont"],
    ["94043","Le Kremlin-Bicêtre"],
    ["94044","Limeil-Brévannes"],
    ["94046","Maisons-Alfort"],
    ["94052","Nogent-sur-Marne"],
    ["94054","Orly"],
    ["94055","Ormesson-sur-Marne"],
    ["94058","Le Perreux-sur-Marne"],
    ["94059","Le Plessis-Trévise"],
    ["94060","La Queue-en-Brie"],
    ["94067","Saint-Mandé"],
    ["94068","Saint-Maur-des-Fossés"],
    ["94069","Saint-Maurice"],
    ["94071","Sucy-en-Brie"],
    ["94073","Thiais"],
    ["94074","Valenton"],
    ["94075","Villecresnes"],
    ["94076","Villejuif"],
    ["94077","Villeneuve-le-Roi"],
    ["94078","Villeneuve-Saint-Georges"],
    ["94079","Villiers-sur-Marne"],
    ["94080","Vincennes"],
    ["94081","Vitry-sur-Seine"],
    ["95018","Argenteuil"],
    ["95019","Arnouville"],
    ["95051","Beauchamp"],
    ["95052","Beaumont-sur-Oise"],
    ["95063","Bezons"],
    ["95127","Cergy"],
    ["95176","Cormeilles-en-Parisis"],
    ["95197","Deuil-la-Barre"],
    ["95199","Domont"],
    ["95203","Eaubonne"],
    ["95210","Enghien-les-Bains"],
    ["95218","Éragny"],
    ["95219","Ermont"],
    ["95229","Ézanville"],
    ["95250","Fosses"],
    ["95252","Franconville"],
    ["95268","Garges-lès-Gonesse"],
    ["95277","Gonesse"],
    ["95280","Goussainville"],
    ["95288","Groslay"],
    ["95306","Herblay-sur-Seine"],
    ["95313","L’Isle-Adam"],
    ["95323","Jouy-le-Moutier"],
    ["95351","Louvres"],
    ["95394","Méry-sur-Oise"],
    ["95424","Montigny-lès-Cormeilles"],
    ["95427","Montmagny"],
    ["95428","Montmorency"],
    ["95476","Osny"],
    ["95487","Persan"],
    ["95488","Pierrelaye"],
    ["95491","Le Plessis-Bouchard"],
    ["95500","Pontoise"],
    ["95539","Saint-Brice-sous-Forêt"],
    ["95555","Saint-Gratien"],
    ["95563","Saint-Leu-la-Forêt"],
    ["95572","Saint-Ouen-l’Aumône"],
    ["95582","Sannois"],
    ["95585","Sarcelles"],
    ["95598","Soisy-sous-Montmorency"],
    ["95607","Taverny"],
    ["95637","Vauréal"],
    ["95680","Villiers-le-Bel"],
    ["97101","Les Abymes"],
    ["97103","Baie-Mahault"],
    ["97105","Basse-Terre"],
    ["97107","Capesterre-Belle-Eau"],
    ["97113","Le Gosier"],
    ["97115","Lamentin"],
    ["97116","Morne-à-l’Eau"],
    ["97117","Le Moule"],
    ["97118","Petit-Bourg"],
    ["97119","Petit-Canal"],
    ["97120","Pointe-à-Pitre"],
    ["97124","Saint-Claude"],
    ["97125","Saint-François"],
    ["97128","Sainte-Anne"],
    ["97129","Sainte-Rose"],
    ["97132","Trois-Rivières"],
    ["97207","Ducos"],
    ["97209","Fort-de-France"],
    ["97210","Le François"],
    ["97212","Gros-Morne"],
    ["97213","Le Lamentin"],
    ["97217","Le Marin"],
    ["97220","Rivière-Pilote"],
    ["97221","Rivière-Salée"],
    ["97222","Le Robert"],
    ["97223","Saint-Esprit"],
    ["97224","Saint-Joseph"],
    ["97227","Sainte-Luce"],
    ["97228","Sainte-Marie"],
    ["97229","Schœlcher"],
    ["97230","La Trinité"],
    ["97232","Le Vauclin"],
    ["97302","Cayenne"],
    ["97304","Kourou"],
    ["97305","Macouria"],
    ["97306","Mana"],
    ["97307","Matoury"],
    ["97309","Remire-Montjoly"],
    ["97311","Saint-Laurent-du-Maroni"],
    ["97353","Maripasoula"],
    ["97360","Apatou"],
    ["97401","Les Avirons"],
    ["97402","Bras-Panon"],
    ["97404","L’Étang-Salé"],
    ["97405","Petite-Île"],
    ["97407","Le Port"],
    ["97408","La Possession"],
    ["97409","Saint-André"],
    ["97410","Saint-Benoît"],
    ["97411","Saint-Denis"],
    ["97412","Saint-Joseph"],
    ["97413","Saint-Leu"],
    ["97414","Saint-Louis"],
    ["97415","Saint-Paul"],
    ["97416","Saint-Pierre"],
    ["97418","Sainte-Marie"],
    ["97420","Sainte-Suzanne"],
    ["97422","Le Tampon"],
    ["2A004","Ajaccio"],
    ["97607","Dembeni"],
    ["97608","Dzaoudzi"],
    ["97610","Koungou"],
    ["97611","Mamoudzou"],
    ["2A247","Porto-Vecchio"],
    ["2B033","Bastia"],
    ["2B037","Biguglia"],
    ["2B042","Borgo"]
];
const cog = new Map(liste);
//module.exports = cog;
export default cog;