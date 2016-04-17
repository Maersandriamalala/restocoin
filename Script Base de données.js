
/** baseResto indexes **/
db.getCollection("baseResto").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** client indexes **/
db.getCollection("client").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** commandeTable indexes **/
db.getCollection("commandeTable").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** employe indexes **/
db.getCollection("employe").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** plat indexes **/
db.getCollection("plat").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** reservationTable indexes **/
db.getCollection("reservationTable").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tableResto indexes **/
db.getCollection("tableResto").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** baseResto records **/
db.getCollection("baseResto").insert({
  "_id": ObjectId("56fbdba0982dc9fce7000000"),
  "eee": 11,
  "huuei": "hh",
  "ytj": NumberInt(12)
});

/** client records **/
db.getCollection("client").insert({
  "nom": "Tyr",
  "idTagNfc": "www.test.com",
  "jeton": NumberInt(0),
  "_id": ObjectId("5711eeccffb39cd99a876bcb")
});
db.getCollection("client").insert({
  "nom": "Maers2",
  "idTagNfc": "1111A2618191726b",
  "jeton": NumberInt(0),
  "_id": ObjectId("571298540c6d152e60d52f5e")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "Z1263738382t",
  "jeton": NumberInt(0),
  "_id": ObjectId("57139812fdf94693058971d4")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "ty12383817tyu",
  "jeton": NumberInt(0),
  "_id": ObjectId("57139a3efdf94693058971d5")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "tyeie123738yuu",
  "jeton": NumberInt(0),
  "_id": ObjectId("57139b76fdf94693058971d6")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "dekekeke",
  "jeton": NumberInt(0),
  "_id": ObjectId("57139c3afdf94693058971d7")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "12738383",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713a007fdf94693058971d9")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "hdieo1389ui",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713a1b7fdf94693058971db")
});
db.getCollection("client").insert({
  "nom": "Dd",
  "idTagNfc": "88399hjjs9298",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713a5e3fdf94693058971de")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "jjslo288716hqpa",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713a6a9fdf94693058971df")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "hyeiii2888yy982",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713a7b1fdf94693058971e1")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "yeiejhhampqjdjei18",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713aaf8fdf94693058971e5")
});
db.getCollection("client").insert({
  "nom": "Maers",
  "idTagNfc": "1227788i",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713acebfdf94693058971e8")
});
db.getCollection("client").insert({
  "nom": "Fff",
  "idTagNfc": "hyuu",
  "jeton": NumberInt(0),
  "_id": ObjectId("5713d788fdf94693058971f4")
});
db.getCollection("client").insert({
  "nom": "Kiadisoa",
  "idTagNfc": "69A5F992",
  "jeton": NumberInt(10),
  "_id": ObjectId("5713e841fdf94693058971f9")
});

/** commandeTable records **/
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 13-04-2016",
    "daty": "2016-04-13T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(10000)
  },
  "datePassageCommande": "2016-04-13T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": null,
  "utilisateur": {
    "nom": "Hyuj",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570e515c8ecce12e65493bed")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 13-04-2016",
    "daty": "2016-04-13T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(10000)
  },
  "datePassageCommande": "2016-04-13T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "numero": NumberInt(2),
    "nbrPlace": NumberInt(3),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Hyuj",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570e5234f9d749a39563342f")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 13-04-2016",
    "daty": "2016-04-13T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(10000)
  },
  "datePassageCommande": "2016-04-13T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "numero": NumberInt(2),
    "nbrPlace": NumberInt(3),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Hyuj",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570e5880956f974a84da3bdc")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 13-04-2016",
    "daty": "2016-04-13T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(10000)
  },
  "datePassageCommande": "2016-04-13T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "numero": NumberInt(2),
    "nbrPlace": NumberInt(3),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Hyuj",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570e591bff1a6b3e2f70b606")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 13-04-2016",
    "daty": "2016-04-13T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(10000)
  },
  "datePassageCommande": "2016-04-13T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "numero": NumberInt(2),
    "nbrPlace": NumberInt(3),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Hyuj",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570e5a61533b11b34f2b710c")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-13 17:40:48",
    "plats": [
      {
        "description": "Paella au fruits de mer",
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "ingredients": "Riz, Crevette, Poisson",
        "nom": "Paella au fruits de mer",
        "idPlat": NumberInt(4),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(120000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(4),
    "total": NumberInt(120000)
  },
  "datePassageCommande": "2016-04-13 17:40:50",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa",
    "objectId": "570d5868b5b7c97905d72129"
  },
  "_id": ObjectId("570e5a7484b674ed988ad21a")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 13-04-2016",
    "daty": "2016-04-13T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "description": "Doe",
        "prix": NumberInt(15000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(15000)
  },
  "datePassageCommande": "2016-04-13T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570e8af5b3f2b0967db68dc3")
});
db.getCollection("commandeTable").insert({
  "_id": ObjectId("570ec34e5342630161a7ed5d"),
  "commande": {
    "daty": "2016-04-14 01:08:07",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "ingredients": "Oeuf, ciboulette",
        "nom": "Omelette au fruits de mer",
        "idPlat": NumberLong(1),
        "prix": NumberLong(10000),
        "prixTotalCommande": NumberLong(30000),
        "quantite": NumberLong(3),
        "tempsCuisson": NumberLong(20)
      },
      {
        "description": "Paella au fruits de mer",
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "ingredients": "Riz, Crevette, Poisson",
        "nom": "Paella au fruits de mer",
        "idPlat": NumberLong(4),
        "prix": NumberLong(30000),
        "prixTotalCommande": NumberLong(120000),
        "quantite": NumberLong(4),
        "tempsCuisson": NumberLong(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberLong(7),
    "total": NumberLong(150000)
  },
  "datePassageCommande": "2016-04-14 01:08:12",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "nbrPlace": NumberLong(4),
    "numero": NumberLong(3)
  },
  "utilisateur": {
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  }
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(2),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(2),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(20000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(5),
    "total": NumberInt(80000)
  },
  "datePassageCommande": "2016-04-14T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570fa01eb2ad5e6543d8befc")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(2),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(2),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(20000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(5),
    "total": NumberInt(80000)
  },
  "datePassageCommande": "2016-04-14T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570fa058b2ad5e6543d8befd")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(3),
    "total": NumberInt(55000)
  },
  "datePassageCommande": "2016-04-14T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570fa063b2ad5e6543d8befe")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Defillet de mode de petits cochons",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
        "description": "Cochon de lait",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(60),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(4),
    "total": NumberInt(85000)
  },
  "datePassageCommande": "2016-04-14T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570fa0a5b2ad5e6543d8beff")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Defillet de mode de petits cochons",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
        "description": "Cochon de lait",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(60),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(3),
    "total": NumberInt(70000)
  },
  "datePassageCommande": "2016-04-14T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570fa17bb2ad5e6543d8bf02")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Defillet de mode de petits cochons",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
        "description": "Cochon de lait",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(60),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(2),
    "total": NumberInt(60000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57107f94b2ad5e6543d8bf03")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("571080c0b2ad5e6543d8bf04")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(2),
    "total": NumberInt(45000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57108190b2ad5e6543d8bf05")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57108358b2ad5e6543d8bf06")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(2),
    "total": NumberInt(25000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("571085b0b2ad5e6543d8bf07")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "description": "Doe",
        "prix": NumberInt(10000),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "description": "Doe",
        "prix": NumberInt(15000),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(2),
    "total": NumberInt(25000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57108f0ab2ad5e6543d8bf08")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(2),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(2),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-16T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("571218ea0c6d152e60d52f5c")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      
    ],
    "estPaye": false,
    "quantite": NumberInt(9),
    "total": NumberInt(0)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "1111A2618191726b",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("571390a5fdf94693058971d2")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Double coup de l'été",
        "description": "Double concentrée d'orange et de pêche",
        "prix": NumberInt(3000),
        "quantite": NumberInt(3),
        "idPlat": NumberInt(10),
        "image": "http://s22.postimg.org/g175ghp5d/doublecoup.png",
        "prixTotalCommande": NumberInt(9000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(6),
    "total": NumberInt(9000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "1111A2618191726b",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57139515fdf94693058971d3")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Delice de glace",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(12),
        "image": "http://s24.postimg.org/3z4531txh/glace.png",
        "description": "Coupe de glace aux fruits de la saison",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(15000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "1227788i",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713bfbafdf94693058971ec")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 13-04-2016",
    "daty": "2016-04-13T00:00:00",
    "plats": [
      {
        "nom": "Omelette au fruits de mer",
        "description": "Doe",
        "prix": NumberInt(10000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(1),
    "total": NumberInt(10000)
  },
  "datePassageCommande": "2016-04-13T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": null,
  "utilisateur": {
    "nom": "Hyuj",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570e50b4273dd8df912d22db")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-13 16:59:59",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "ingredients": "Poulet, Fromage",
        "nom": "Poulet grillé au fromage",
        "idPlat": NumberInt(1),
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(45000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(3),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(120000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(7),
    "total": NumberInt(165000)
  },
  "datePassageCommande": "2016-04-13 17:23:58",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa",
    "objectId": "570d5868b5b7c97905d72129"
  },
  "_id": ObjectId("570e567f956f974a84da3bdb")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-13 17:34:48",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "ingredients": "Poulet, Fromage",
        "nom": "Poulet grillé au fromage",
        "idPlat": NumberInt(1),
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(60000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(3),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(90000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Cochon de lait",
        "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
        "ingredients": "Cochon, Miel, Vanille",
        "nom": "Defillet de mode de petits cochons",
        "idPlat": NumberInt(5),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(90000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(60)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(10),
    "total": NumberInt(240000)
  },
  "datePassageCommande": "2016-04-13 17:35:34",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa",
    "objectId": "570d5868b5b7c97905d72129"
  },
  "_id": ObjectId("570e5937533b11b34f2b710a")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-13 17:35:51",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "ingredients": "Poulet, Fromage",
        "nom": "Poulet grillé au fromage",
        "idPlat": NumberInt(1),
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(45000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Doe",
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "ingredients": "Oeuf, ciboulette",
        "nom": "Omelette au fruits de mer",
        "idPlat": NumberInt(2),
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(40000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(20)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(7),
    "total": NumberInt(85000)
  },
  "datePassageCommande": "2016-04-13 17:35:55",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa",
    "objectId": "570d5868b5b7c97905d72129"
  },
  "_id": ObjectId("570e594d533b11b34f2b710b")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-13 17:42:30",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "ingredients": "Oeuf, ciboulette",
        "nom": "Omelette au fruits de mer",
        "idPlat": NumberInt(2),
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(20)
      },
      {
        "description": "Cochon de lait",
        "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
        "ingredients": "Cochon, Miel, Vanille",
        "nom": "Defillet de mode de petits cochons",
        "idPlat": NumberInt(5),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(90000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(60)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(6),
    "total": NumberInt(120000)
  },
  "datePassageCommande": "2016-04-13 17:42:34",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa",
    "objectId": "570d5868b5b7c97905d72129"
  },
  "_id": ObjectId("570e5adc84b674ed988ad21b")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-13 18:20:17",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "ingredients": "Poulet, Fromage",
        "nom": "Poulet grillé au fromage",
        "idPlat": NumberInt(1),
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(45000),
        "quantite": NumberInt(6),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(3),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(60000),
        "quantite": NumberInt(2),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(8),
    "total": NumberInt(150000)
  },
  "datePassageCommande": "2016-04-13 18:20:20",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa",
    "objectId": "570d5868b5b7c97905d72129"
  },
  "_id": ObjectId("570e63b484b674ed988ad21c")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 14-04-2016",
    "daty": "2016-04-14T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Defillet de mode de petits cochons",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(4),
        "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
        "description": "Cochon de lait",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(60),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(4),
    "total": NumberInt(85000)
  },
  "datePassageCommande": "2016-04-14T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("570fa0a5b2ad5e6543d8bf00")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(3),
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "prixTotalCommande": NumberInt(90000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Defillet de mode de petits cochons",
        "quantite": NumberInt(2),
        "description": "Cochon de lait",
        "prix": NumberInt(30000),
        "idPlat": NumberInt(4),
        "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(60),
        "ingredients": null
      },
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "description": "Doe",
        "prix": NumberInt(15000),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(6),
    "total": NumberInt(165000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57109073b2ad5e6543d8bf09")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "description": "Doe",
        "prix": NumberInt(15000),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(1),
        "description": "Doe",
        "prix": NumberInt(10000),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "prixTotalCommande": NumberInt(10000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Canard au poivre vert",
        "quantite": NumberInt(1),
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(3),
    "total": NumberInt(55000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("571091c629060cbcf1e11060")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(1),
        "description": "Doe",
        "prix": NumberInt(15000),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(1),
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(2),
    "total": NumberInt(45000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("571091fc29060cbcf1e11061")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 15-04-2016",
    "daty": "2016-04-15T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(10),
        "description": "Doe",
        "prix": NumberInt(15000),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "prixTotalCommande": NumberInt(150000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(4),
        "description": "Doe",
        "prix": NumberInt(10000),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "prixTotalCommande": NumberInt(40000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      },
      {
        "nom": "Paella au fruits de mer",
        "quantite": NumberInt(6),
        "description": "Paella au fruits de mer",
        "prix": NumberInt(30000),
        "idPlat": NumberInt(3),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "prixTotalCommande": NumberInt(180000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(20),
    "total": NumberInt(370000)
  },
  "datePassageCommande": "2016-04-15T00:00:00+03:00",
  "id_table": "www.test.com",
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5710953529060cbcf1e11062")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-16 23:42:31",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "ingredients": "Oeuf, ciboulette",
        "nom": "Omelette au fruits de mer",
        "idPlat": NumberInt(1),
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(40000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(20)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(4),
    "total": NumberInt(40000)
  },
  "datePassageCommande": "2016-04-16 23:44:22",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5712a427c0e93335f43f8143")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 16-04-2016",
    "daty": "2016-04-16T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "quantite": NumberInt(4),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "description": "Doe",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Omelette au fruits de mer",
        "quantite": NumberInt(4),
        "idPlat": NumberInt(2),
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "description": "Doe",
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(40000),
        "tempsCuisson": NumberInt(20),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(8),
    "total": NumberInt(100000)
  },
  "datePassageCommande": "2016-04-16T00:00:00+03:00",
  "id_table": "1111A2618191726b",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5712a50e55ebdd791d4dffd2")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 01:33:25",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s13.postimg.org/6stv7qo13/Fine_Herbs_and_Cheese_Omelet_Mix.png",
        "ingredients": "Oeuf, ciboulette",
        "nom": "Omelette au fruits de mer",
        "idPlat": NumberInt(1),
        "prix": NumberInt(10000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(20)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(3),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-17 01:33:31",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5712bdbc3c012f5dc10ba9c6")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 11:17:49",
    "plats": [
      {
        "description": "Doe",
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "ingredients": "Poulet, Fromage",
        "nom": "Poulet grillé au fromage",
        "idPlat": NumberInt(1),
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(1),
    "total": NumberInt(15000)
  },
  "datePassageCommande": "2016-04-17 11:17:53",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("571346b33c012f5dc10ba9d0")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 15:09:36",
    "plats": [
      {
        "description": "Coupe de glace aux fruits de la saison",
        "image": "http://s24.postimg.org/3z4531txh/glace.png",
        "ingredients": "",
        "nom": "Delice de glace",
        "idPlat": NumberInt(6),
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(60000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(10)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(4),
    "total": NumberInt(60000)
  },
  "datePassageCommande": "2016-04-17 15:09:47",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("57137d0dfdf94693058971cd")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 15:18:02",
    "plats": [
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(2),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(1),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-17 15:27:26",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("57138146fdf94693058971ce")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 15:18:02",
    "plats": [
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(2),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(1),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-17 15:27:30",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("57138147fdf94693058971cf")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 15:49:17",
    "plats": [
      {
        "description": "Melange de divers croquettes avec des légumes",
        "image": "http://s22.postimg.org/75lq97j4h/entreestouspourun_png_dga3.png",
        "ingredients": "",
        "nom": "Tous pour un",
        "idPlat": NumberInt(14),
        "prix": NumberInt(5000),
        "prixTotalCommande": NumberInt(15000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(10)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(3),
    "total": NumberInt(15000)
  },
  "datePassageCommande": "2016-04-17 15:49:29",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5713865cfdf94693058971d0")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Poulet grillé au fromage",
        "description": "Doe",
        "prix": NumberInt(15000),
        "quantite": NumberInt(4),
        "idPlat": NumberInt(1),
        "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Paella aux fruits de mer",
        "description": "Paella aux fruits de mer",
        "prix": NumberInt(30000),
        "quantite": NumberInt(8),
        "idPlat": NumberInt(6),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "prixTotalCommande": NumberInt(240000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Maïs doux ",
        "description": "Salade de mais doux et tomates  ",
        "prix": NumberInt(6000),
        "quantite": NumberInt(3),
        "idPlat": NumberInt(7),
        "image": "http://s24.postimg.org/ipu1q05ol/salad_Mais.png",
        "prixTotalCommande": NumberInt(18000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(15),
    "total": NumberInt(318000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "1111A2618191726b",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57138815fdf94693058971d1")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Canard au poivre vert",
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "quantite": NumberInt(4),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "prixTotalCommande": NumberInt(120000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Delice de glace",
        "description": "Coupe de glace aux fruits de la saison",
        "prix": NumberInt(15000),
        "quantite": NumberInt(3),
        "idPlat": NumberInt(12),
        "image": "http://s24.postimg.org/3z4531txh/glace.png",
        "prixTotalCommande": NumberInt(45000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(7),
    "total": NumberInt(165000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "dekekeke",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("57139cc5fdf94693058971d8")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Canard au poivre vert",
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "quantite": NumberInt(3),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "prixTotalCommande": NumberInt(90000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Salade de fruit",
        "description": "Salade de fruits de la saison",
        "prix": NumberInt(1000),
        "quantite": NumberInt(3),
        "idPlat": NumberInt(13),
        "image": "http://s24.postimg.org/4y9htozwl/saladfruit2.png",
        "prixTotalCommande": NumberInt(3000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Whisky",
        "description": " cocktail Whisky ",
        "prix": NumberInt(4000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(14),
        "image": "http://s24.postimg.org/yzkjdnvt1/whisky.png",
        "prixTotalCommande": NumberInt(8000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(8),
    "total": NumberInt(101000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "12738383",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713a085fdf94693058971da")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Canard au poivre vert",
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Delice de glace",
        "description": "Coupe de glace aux fruits de la saison",
        "prix": NumberInt(15000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(12),
        "image": "http://s24.postimg.org/3z4531txh/glace.png",
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Salade de fruit",
        "description": "Salade de fruits de la saison",
        "prix": NumberInt(1000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(13),
        "image": "http://s24.postimg.org/4y9htozwl/saladfruit2.png",
        "prixTotalCommande": NumberInt(2000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Whisky",
        "description": " cocktail Whisky ",
        "prix": NumberInt(4000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(14),
        "image": "http://s24.postimg.org/yzkjdnvt1/whisky.png",
        "prixTotalCommande": NumberInt(4000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(6),
    "total": NumberInt(81000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "hdieo1389ui",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713a22afdf94693058971dc")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Canard au poivre vert",
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "quantite": NumberInt(3),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "prixTotalCommande": NumberInt(90000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Brochette de fraises et de bananes",
        "description": "Brochette de fraises et de bananes",
        "prix": NumberInt(2000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(15),
        "image": "http://s22.postimg.org/q3hxngx3l/sakafo2.jpg",
        "prixTotalCommande": NumberInt(4000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Whisky",
        "description": " cocktail Whisky ",
        "prix": NumberInt(4000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(14),
        "image": "http://s24.postimg.org/yzkjdnvt1/whisky.png",
        "prixTotalCommande": NumberInt(4000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(6),
    "total": NumberInt(98000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "hyeiii2888yy982",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713a82dfdf94693058971e2")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Canard au poivre vert",
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Salade de fruit",
        "description": "Salade de fruits de la saison",
        "prix": NumberInt(1000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(13),
        "image": "http://s24.postimg.org/4y9htozwl/saladfruit2.png",
        "prixTotalCommande": NumberInt(1000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Whisky",
        "description": " cocktail Whisky ",
        "prix": NumberInt(4000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(14),
        "image": "http://s24.postimg.org/yzkjdnvt1/whisky.png",
        "prixTotalCommande": NumberInt(4000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(4),
    "total": NumberInt(65000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "yeiejhhampqjdjei18",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713ab61fdf94693058971e6")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Canard au poivre vert",
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Jus d'orange",
        "description": "Orange coincentré",
        "prix": NumberInt(1000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(11),
        "image": "http://s23.postimg.org/a96kqe68b/jus.jpg",
        "prixTotalCommande": NumberInt(1000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Whisky",
        "description": " cocktail Whisky ",
        "prix": NumberInt(4000),
        "quantite": NumberInt(1),
        "idPlat": NumberInt(14),
        "image": "http://s24.postimg.org/yzkjdnvt1/whisky.png",
        "prixTotalCommande": NumberInt(4000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(4),
    "total": NumberInt(65000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "1227788i",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713ad54fdf94693058971e9")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 18:57:59",
    "plats": [
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(1),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(90000),
        "quantite": NumberInt(3),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Paella aux fruits de mer",
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "ingredients": "Riz, Crevette, Poisson",
        "nom": "Paella aux fruits de mer",
        "idPlat": NumberInt(2),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Melange de divers croquettes avec des légumes",
        "image": "http://s22.postimg.org/75lq97j4h/entreestouspourun_png_dga3.png",
        "ingredients": "",
        "nom": "Tous pour un",
        "idPlat": NumberInt(14),
        "prix": NumberInt(5000),
        "prixTotalCommande": NumberInt(5000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(10)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(5),
    "total": NumberInt(125000)
  },
  "datePassageCommande": "2016-04-17 18:59:05",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5713b2cafdf94693058971eb")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Delice de glace",
        "quantite": NumberInt(1),
        "idPlat": NumberInt(12),
        "image": "http://s24.postimg.org/3z4531txh/glace.png",
        "description": "Coupe de glace aux fruits de la saison",
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(15000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Canard au poivre vert",
        "quantite": NumberInt(2),
        "idPlat": NumberInt(5),
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "description": "Canard laqué au poivre vert",
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(3),
    "total": NumberInt(75000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "1227788i",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713c0bbfdf94693058971ed")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 20:51:25",
    "plats": [
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(1),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(1),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-17 20:51:32",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5713cd24fdf94693058971f0")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 20:53:31",
    "plats": [
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(1),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(30)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(1),
    "total": NumberInt(30000)
  },
  "datePassageCommande": "2016-04-17 20:53:36",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5713cda1fdf94693058971f1")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 21:18:04",
    "plats": [
      {
        "description": "Orange coincentré",
        "image": "http://s23.postimg.org/a96kqe68b/jus.jpg",
        "ingredients": "",
        "nom": "Jus d'orange",
        "idPlat": NumberInt(9),
        "prix": NumberInt(1000),
        "prixTotalCommande": NumberInt(4000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(10)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(4),
    "total": NumberInt(4000)
  },
  "datePassageCommande": "2016-04-17 21:20:38",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5713d3f7fdf94693058971f2")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 21:42:28",
    "plats": [
      {
        "description": "Melange de légumes verts choux,carottes,haricots verts",
        "image": "http://s22.postimg.org/kifokc975/entrees_Achard.png",
        "ingredients": "",
        "nom": "Mélange de légumes verts",
        "idPlat": NumberInt(13),
        "prix": NumberInt(3000),
        "prixTotalCommande": NumberInt(12000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(10)
      },
      {
        "description": "Légumes aux fines thons",
        "image": "http://s24.postimg.org/jdjln8czp/Large_Image_Chicken_Salad.png",
        "ingredients": "",
        "nom": "Bouffée de vitamines",
        "idPlat": NumberInt(15),
        "prix": NumberInt(7000),
        "prixTotalCommande": NumberInt(14000),
        "quantite": NumberInt(2),
        "tempsCuisson": NumberInt(10)
      },
      {
        "description": "Bière au pêche",
        "image": "http://s23.postimg.org/i7erx9nnv/biere_Peche.png",
        "ingredients": "",
        "nom": "Bière au pêche avec pression",
        "idPlat": NumberInt(10),
        "prix": NumberInt(5000),
        "prixTotalCommande": NumberInt(10000),
        "quantite": NumberInt(2),
        "tempsCuisson": NumberInt(10)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(8),
    "total": NumberInt(36000)
  },
  "datePassageCommande": "2016-04-17 21:43:10",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "570d5868b5b7c97905d72129",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5713d93ffdf94693058971f5")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 22:10:31",
    "plats": [
      {
        "description": "Canard laqué au poivre vert",
        "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
        "ingredients": "Canard, Poivre",
        "nom": "Canard au poivre vert",
        "idPlat": NumberInt(1),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(60000),
        "quantite": NumberInt(2),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Roulleau de printems aux poissons et salades",
        "image": "http://s23.postimg.org/4gwwjgpor/nems.png",
        "ingredients": "",
        "nom": "Rouleuax de printemps",
        "idPlat": NumberInt(16),
        "prix": NumberInt(3000),
        "prixTotalCommande": NumberInt(3000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(10)
      },
      {
        "description": "Coupe de glace aux fruitts et au chocolat",
        "image": "http://s23.postimg.org/ykgstaeq3/glace3.png",
        "ingredients": "",
        "nom": "Delice de glace au chocolat",
        "idPlat": NumberInt(6),
        "prix": NumberInt(15000),
        "prixTotalCommande": NumberInt(60000),
        "quantite": NumberInt(4),
        "tempsCuisson": NumberInt(10)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(7),
    "total": NumberInt(123000)
  },
  "datePassageCommande": "2016-04-17 22:11:42",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f98b",
    "idTagNfc": "69A5F992",
    "nom": "Palmier",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(5)
  },
  "utilisateur": {
    "_id": "5713df68fdf94693058971f6",
    "idTagNfc": "69A5F992",
    "nom": "Jean"
  },
  "_id": ObjectId("5713dfeffdf94693058971f7")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "daty": "2016-04-17 22:48:27",
    "plats": [
      {
        "description": "Paella aux fruits de mer",
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "ingredients": "Riz, Crevette, Poisson",
        "nom": "Paella aux fruits de mer",
        "idPlat": NumberInt(2),
        "prix": NumberInt(30000),
        "prixTotalCommande": NumberInt(30000),
        "quantite": NumberInt(1),
        "tempsCuisson": NumberInt(30)
      },
      {
        "description": "Roulleau de printems aux poissons et salades",
        "image": "http://s23.postimg.org/4gwwjgpor/nems.png",
        "ingredients": "",
        "nom": "Rouleuax de printemps",
        "idPlat": NumberInt(16),
        "prix": NumberInt(3000),
        "prixTotalCommande": NumberInt(15000),
        "quantite": NumberInt(5),
        "tempsCuisson": NumberInt(10)
      }
    ],
    "estPaye": true,
    "quantite": NumberInt(6),
    "total": NumberInt(45000)
  },
  "datePassageCommande": "2016-04-17 22:49:18",
  "table": {
    "_id": "5700e16ac0a2c3a03f12f989",
    "idTagNfc": "04B1107A7A4884",
    "nom": "Cannel",
    "addition": NumberInt(0),
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(3)
  },
  "utilisateur": {
    "_id": "5713e841fdf94693058971f9",
    "idTagNfc": "69A5F992",
    "nom": "Kiadisoa"
  },
  "_id": ObjectId("5713e8c0fdf94693058971fa")
});
db.getCollection("commandeTable").insert({
  "commande": {
    "datyDisplay": "Du 17-04-2016",
    "daty": "2016-04-17T00:00:00",
    "plats": [
      {
        "nom": "Delice de glace",
        "description": "Coupe de glace aux fruits de la saison",
        "prix": NumberInt(15000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(12),
        "image": "http://s24.postimg.org/3z4531txh/glace.png",
        "prixTotalCommande": NumberInt(30000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      },
      {
        "nom": "Paella aux fruits de mer",
        "description": "Paella aux fruits de mer",
        "prix": NumberInt(30000),
        "quantite": NumberInt(2),
        "idPlat": NumberInt(6),
        "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
        "prixTotalCommande": NumberInt(60000),
        "tempsCuisson": NumberInt(30),
        "ingredients": null
      },
      {
        "nom": "Passion de l'été",
        "description": "Cocktail coco et orange",
        "prix": NumberInt(2000),
        "quantite": NumberInt(3),
        "idPlat": NumberInt(16),
        "image": "http://s23.postimg.org/cw9241gcr/coco.png",
        "prixTotalCommande": NumberInt(6000),
        "tempsCuisson": NumberInt(10),
        "ingredients": null
      }
    ],
    "estPaye": false,
    "quantite": NumberInt(7),
    "total": NumberInt(96000)
  },
  "datePassageCommande": "2016-04-17T00:00:00+03:00",
  "id_table": "hyuu",
  "tableResto": null,
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "www.test.com"
  },
  "_id": ObjectId("5713ee21fdf94693058971fb")
});

/** employe records **/
db.getCollection("employe").insert({
  "nom": "hehe",
  "motdepasse": "huhu",
  "poste": "cuisinier",
  "_id": ObjectId("570c98e4f864c1e6ee82f318")
});
db.getCollection("employe").insert({
  "nom": "hehe",
  "motdepasse": "huhu",
  "poste": "cuisinier",
  "_id": ObjectId("570c9a08dc11f6795b0aa28a")
});

/** plat records **/
db.getCollection("plat").insert({
  "_id": ObjectId("57016f65982dc9b2b6000003"),
  "categiorie": "Plats",
  "description": "Canard laqué au poivre vert",
  "image": "http://s30.postimg.org/uxp9vkcjl/canardau_Poivre_Vert.jpg",
  "ingredients": [
    {
      "nom": "Canard",
      "quantite": 1
    },
    {
      "nom": "Poivre",
      "quantite": ""
    }
  ],
  "nom": "Canard au poivre vert",
  "prix": 30000,
  "tempsCuisson": 30,
  "tempsCuissonMin": NumberLong(0)
});
db.getCollection("plat").insert({
  "_id": ObjectId("57016f82982dc9044d000002"),
  "categiorie": "Plats",
  "description": "Paella aux fruits de mer",
  "image": "http://s28.postimg.org/yo81gyi3h/Paella_de_marisco.jpg",
  "ingredients": [
    {
      "nom": "Riz",
      "quantite": 1
    },
    {
      "nom": "Crevette",
      "quantite": ""
    },
    {
      "nom": "Poisson",
      "quantite": ""
    }
  ],
  "nom": "Paella aux fruits de mer",
  "prix": 30000,
  "tempsCuisson": 30,
  "tempsCuissonMin": NumberLong(0)
});
db.getCollection("plat").insert({
  "_id": ObjectId("57016faa982dc9b2b6000004"),
  "categiorie": "Plats",
  "description": "Cochon de lait",
  "image": "http://s29.postimg.org/5lgxznrwn/travers_de_porc_laque_et_ses_legumes_wok.jpg",
  "ingredients": [
    {
      "nom": "Cochon",
      "quantite": 1
    },
    {
      "nom": "Miel",
      "quantite": ""
    },
    {
      "nom": "Vanille",
      "quantite": ""
    }
  ],
  "nom": "Defillet de mode de petits cochons",
  "prix": 30000,
  "tempsCuisson": 60,
  "tempsCuissonMin": NumberLong(0)
});
db.getCollection("plat").insert({
  "_id": ObjectId("57016f08982dc9b2b6000002"),
  "categiorie": "Plats",
  "description": "Poulé grillé garni avec du camembert",
  "image": "http://s15.postimg.org/njuaevtcr/poulet_Grilletau_Fromage.png",
  "ingredients": [
    {
      "nom": "Poulet",
      "quantite": 1
    },
    {
      "nom": "Fromage",
      "quantite": 2
    }
  ],
  "nom": "Poulet grillé au fromage",
  "prix": 15000,
  "tempsCuisson": 30,
  "tempsCuissonMin": NumberLong(0)
});
db.getCollection("plat").insert({
  "_id": ObjectId("57135dfe982dc97431000000"),
  "categiorie": "Desserts",
  "description": "Coupe de glace aux fruits de la saison",
  "image": "http://s24.postimg.org/3z4531txh/glace.png",
  "ingredients": [
    
  ],
  "nom": "Delice de glace",
  "prix": 15000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57135e1e982dc90a72000000"),
  "categiorie": "Desserts",
  "description": "Coupe de glace aux fruitts et au chocolat",
  "image": "http://s23.postimg.org/ykgstaeq3/glace3.png",
  "ingredients": [
    
  ],
  "nom": "Delice de glace au chocolat",
  "prix": 15000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57135e2e982dc97431000001"),
  "categiorie": "Desserts",
  "description": "Coupe de glace à la vanille et aux cerises",
  "image": "http://s22.postimg.org/fkren0c5t/glace4.png",
  "ingredients": [
    
  ],
  "nom": "Delice de glace aux cerises",
  "prix": 15000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57136613982dc9ea04000000"),
  "categiorie": "Boissons",
  "description": " cocktail Whisky ",
  "image": "http://s24.postimg.org/yzkjdnvt1/whisky.png",
  "ingredients": [
    
  ],
  "nom": "Whisky",
  "prix": 4000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57136637982dc9ea04000001"),
  "categiorie": "Boissons",
  "description": "Orange coincentré",
  "image": "http://s23.postimg.org/a96kqe68b/jus.jpg",
  "ingredients": [
    
  ],
  "nom": "Jus d'orange",
  "prix": 1000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57136646982dc9177d000000"),
  "categiorie": "Boissons",
  "description": "Bière au pêche",
  "image": "http://s23.postimg.org/i7erx9nnv/biere_Peche.png",
  "ingredients": [
    
  ],
  "nom": "Bière au pêche avec pression",
  "prix": 5000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57136654982dc9ea04000002"),
  "categiorie": "Boissons",
  "description": "Cocktail coco et orange",
  "image": "http://s23.postimg.org/cw9241gcr/coco.png",
  "ingredients": [
    
  ],
  "nom": "Passion de l'été",
  "prix": 2000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57136664982dc9177d000001"),
  "categiorie": "Boissons",
  "description": "Double concentrée d'orange et de pêche",
  "image": "http://s22.postimg.org/g175ghp5d/doublecoup.png",
  "ingredients": [
    
  ],
  "nom": "Double coup de l'été",
  "prix": 3000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57138076982dc9177d000002"),
  "categiorie": "Entrees",
  "description": "Melange de légumes verts choux,carottes,haricots verts",
  "image": "http://s22.postimg.org/kifokc975/entrees_Achard.png",
  "ingredients": [
    
  ],
  "nom": "Mélange de légumes verts",
  "prix": 3000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("5713809f982dc9ea04000003"),
  "categiorie": "Entrees",
  "description": "Melange de divers croquettes avec des légumes",
  "image": "http://s22.postimg.org/75lq97j4h/entreestouspourun_png_dga3.png",
  "ingredients": [
    
  ],
  "nom": "Tous pour un",
  "prix": 5000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("571380ae982dc9177d000003"),
  "categiorie": "Entrees",
  "description": "Légumes aux fines thons",
  "image": "http://s24.postimg.org/jdjln8czp/Large_Image_Chicken_Salad.png",
  "ingredients": [
    
  ],
  "nom": "Bouffée de vitamines",
  "prix": 7000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("571380bc982dc9ea04000004"),
  "categiorie": "Entrees",
  "description": "Roulleau de printems aux poissons et salades",
  "image": "http://s23.postimg.org/4gwwjgpor/nems.png",
  "ingredients": [
    
  ],
  "nom": "Rouleuax de printemps",
  "prix": 3000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("571380ca982dc9177d000004"),
  "categiorie": "Entrees",
  "description": "Chairs de crabes à l'épice de l'Inde avec des légumes  ",
  "image": "http://s22.postimg.org/vqyx58tch/spicy_crab_salad.png",
  "ingredients": [
    
  ],
  "nom": "Salade de chairs de crabe",
  "prix": 10000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("571380d6982dc9177d000005"),
  "categiorie": "Entrees",
  "description": "Suchi au thon et au Sol  ",
  "image": "http://s24.postimg.org/4yu61j64l/sushi.png",
  "ingredients": [
    
  ],
  "nom": "Sushi",
  "prix": 6000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("571380e5982dc9ea04000006"),
  "categiorie": "Entrees",
  "description": "Salade de mais doux et tomates  ",
  "image": "http://s24.postimg.org/ipu1q05ol/salad_Mais.png",
  "ingredients": [
    
  ],
  "nom": "Maïs doux ",
  "prix": 6000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("5713822d982dc9177d000006"),
  "categiorie": "Entrees",
  "description": "Légumes aux fines thons",
  "image": "http://s24.postimg.org/jdjln8czp/Large_Image_Chicken_Salad.png",
  "ingredients": [
    
  ],
  "nom": "Bouffée de vitamines",
  "prix": 7000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("5713860a982dc9ea04000007"),
  "categiorie": "Desserts",
  "description": "Patte à choux au coulis de chocolat et au fraise",
  "image": "http://s22.postimg.org/f6glypac1/desserts.png",
  "ingredients": [
    
  ],
  "nom": "Délice de patte à choux",
  "prix": 2000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("5713861d982dc9177d000007"),
  "categiorie": "Desserts",
  "description": "Brochette de fraises et de bananes",
  "image": "http://s22.postimg.org/q3hxngx3l/sakafo2.jpg",
  "ingredients": [
    
  ],
  "nom": "Brochette de fraises et de bananes",
  "prix": 2000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57138631982dc9ea04000008"),
  "categiorie": "Desserts",
  "description": "Salade de fruits de la saison",
  "image": "http://s24.postimg.org/4y9htozwl/saladfruit2.png",
  "ingredients": [
    
  ],
  "nom": "Salade de fruit",
  "prix": 1000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});
db.getCollection("plat").insert({
  "_id": ObjectId("57138651982dc9177d000008"),
  "categiorie": "Desserts",
  "description": "Crèpes aux oranges et à la fraise",
  "image": "http://s24.postimg.org/lputcg05h/crepe.png",
  "ingredients": [
    
  ],
  "nom": "Crèpe du maitre",
  "prix": 1000,
  "tempsCuisson": 10,
  "tempsCuissonMin": 0
});

/** reservationTable records **/
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Palmier",
    "nbrPlace": NumberInt(6),
    "numero": NumberInt(5),
    "idTagNfc": "156"
  },
  "daty": "17/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Fthh",
    "idTagNfc": "hdieo1389ui"
  },
  "_id": ObjectId("5713a42ffdf94693058971dd")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "YlangYlang",
    "nbrPlace": NumberInt(5),
    "numero": NumberInt(4),
    "idTagNfc": "111"
  },
  "daty": "17/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "jjslo288716hqpa"
  },
  "_id": ObjectId("5713a710fdf94693058971e0")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Beryl",
    "nbrPlace": NumberInt(7),
    "numero": NumberInt(6),
    "idTagNfc": "114"
  },
  "daty": "20/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "hyeiii2888yy982"
  },
  "_id": ObjectId("5713a859fdf94693058971e3")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Beryl",
    "nbrPlace": NumberInt(7),
    "numero": NumberInt(6),
    "idTagNfc": "114"
  },
  "daty": "17/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "hyeiii2888yy982"
  },
  "_id": ObjectId("5713a8e7fdf94693058971e4")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Vanille",
    "nbrPlace": NumberInt(2),
    "numero": NumberInt(1),
    "idTagNfc": "121"
  },
  "daty": "22/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "yeiejhhampqjdjei18"
  },
  "_id": ObjectId("5713ab90fdf94693058971e7")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Vanille",
    "nbrPlace": NumberInt(2),
    "numero": NumberInt(1),
    "idTagNfc": "121"
  },
  "daty": "18/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "1227788i"
  },
  "_id": ObjectId("5713ad76fdf94693058971ea")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Coco",
    "nbrPlace": NumberInt(3),
    "numero": NumberInt(2),
    "idTagNfc": "www.test.com"
  },
  "daty": "20/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "1227788i"
  },
  "_id": ObjectId("5713c0d6fdf94693058971ee")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Palmier",
    "nbrPlace": NumberInt(6),
    "numero": NumberInt(5),
    "idTagNfc": "156"
  },
  "daty": "17/09/2016 00:00:00",
  "utilisateur": {
    "nom": "Maers",
    "idTagNfc": "1227788i"
  },
  "_id": ObjectId("5713ca80fdf94693058971ef")
});
db.getCollection("reservationTable").insert({
  "tableResto": {
    "nom": "Palmier",
    "nbrPlace": NumberInt(4),
    "numero": NumberInt(5),
    "idTagNfc": "69A5F992"
  },
  "daty": "18/04/2016 00:00:00",
  "utilisateur": {
    "nom": "Fff",
    "idTagNfc": "hyuu"
  },
  "_id": ObjectId("5713fddbfdf94693058971fc")
});

/** tableResto records **/
db.getCollection("tableResto").insert({
  "_id": ObjectId("5700e16ac0a2c3a03f12f98b"),
  "idTagNfc": "69A5F992",
  "nbrPlace": 4,
  "nom": "Palmier",
  "numero": NumberLong(5)
});
db.getCollection("tableResto").insert({
  "_id": ObjectId("5700e16ac0a2c3a03f12f98a"),
  "idTagNfc": "111",
  "nbrPlace": NumberLong(5),
  "nom": "YlangYlang",
  "numero": NumberLong(4)
});
db.getCollection("tableResto").insert({
  "_id": ObjectId("5700e16ac0a2c3a03f12f98c"),
  "idTagNfc": "114",
  "nbrPlace": NumberLong(7),
  "nom": "Beryl",
  "numero": NumberLong(6)
});
db.getCollection("tableResto").insert({
  "_id": ObjectId("5700e16ac0a2c3a03f12f989"),
  "idTagNfc": "04B1107A7A4884",
  "nbrPlace": NumberLong(4),
  "nom": "Cannel",
  "numero": NumberLong(3)
});
db.getCollection("tableResto").insert({
  "_id": ObjectId("5700e16ac0a2c3a03f12f988"),
  "idTagNfc": "www.test.com",
  "nbrPlace": NumberLong(3),
  "nom": "Coco",
  "numero": NumberLong(2)
});
db.getCollection("tableResto").insert({
  "_id": ObjectId("5700e16ac0a2c3a03f12f987"),
  "idTagNfc": "121",
  "nbrPlace": NumberLong(2),
  "nom": "Vanille",
  "numero": NumberLong(1)
});
