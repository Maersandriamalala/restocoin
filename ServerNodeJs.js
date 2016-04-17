#!/bin/env node

var express = require('express');
var fs      = require('fs');
var mongodb = require('mongodb');

var App = function()
{
	var assert = require('assert');
    var responseGenerique = {message:'success'};
    // Scope
    var self = this;
    // Setup
	self.dbServer = new mongodb.Server(process.env.OPENSHIFT_MONGODB_DB_HOST,parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT));
	self.db = new mongodb.Db(process.env.OPENSHIFT_APP_NAME, self.dbServer, {auto_reconnect: true});
	self.dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME;
	self.dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD;

	self.ipaddr  = process.env.OPENSHIFT_NODEJS_IP;
	self.port    = parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8080;
	if (typeof self.ipaddr === "undefined") 
	{
		console.warn('No OPENSHIFT_NODEJS_IP environment variable');
	};


	// Web app logic
	self.routes = {};
	
	

	
	//return all tableResto
    self.routes['tableRestos'] = function(req, res){
        var predicat = {};
        if(req.query.idTagNfc != null)
        {
            predicat = {idTagNfc:req.query.idTagNfc};
        }
        self.db.collection('tableResto').find(predicat).toArray(function(err, names) {
            res.end(JSON.stringify(names));
        });
    };
	//return reservationTable by uid
	self.routes['reservationTable'] = function(req, res){
        var predicat = {};
        if(req.query.idTagNfc != null)
        {
            predicat = {"utilisateur.idTagNfc":req.query.idTagNfc};
        }
        self.db.collection('reservationTable').find(predicat).sort( {_id: 1 } ).toArray(function(err, names) {
            res.end(JSON.stringify(names));
        });
    };
	//verifier disponibilité table sur une date donnée
	 self.routes['verifierTable'] = function(req, res){
        var predicat = {};
        if(req.query.daty != null)
        {
           
			predicat ={$and:[
								{"tableResto.idTagNfc":req.query.uidTable},
								{"daty":req.query.daty}
							]
						};
			
        }
        self.db.collection('reservationTable').find(predicat).toArray(function(err, names) {
			
			res.end(JSON.stringify(names));
        });
    };
	//ajout d'une reservation de table
	self.routes['ajoutReservationTable'] = function(req, res){
		
		self.db.collection('reservationTable').insert( req.body, function(err, records){
			if (err) { throw err; }
			//res.end('success'+toString(commande));
		});
	};
	
	//return all plats
	self.routes['plats'] = function(req, res){
		var predicat = {};
        if(req.query.categorie!= null)
        {
            predicat = {"categiorie":req.query.categorie};
        }
		self.db.collection('plat').find(predicat).toArray(function(err, names) {
			res.header("Content-Type:","application/json");
			res.end(JSON.stringify(names));
		});
	};
	
	
	//constructeur tableResto
	function TableResto(num,nom,nbrPlace, idTagNfc) 
	{
		this.numero =num;
		this.nom = nom;
		this.nbrPlace = nbrPlace;
		this.idTagNfc = idTagNfc || '';
	}
	//constructeur employé
	function Employe(nom, motdepasse, poste) 
	{
	    this.nom = nom;
	    this.motdepasse = motdepasse;
	    this.poste = poste;
	}
	//constructeur client
	function Client(nom,idTagNfc,jeton) 
    {
        this.nom = nom;
        this.idTagNfc = idTagNfc;
        this.jeton = jeton || 0;
    }
	//les tables du restaurant;
	var tabTableResto=[];
	//ajout table statiques
	self.routes['ajoutTables'] = function(req, res){
		var tableResto1=new TableResto(parseInt(1),"Vanille",2);
		var tableResto2=new TableResto(2,"Coco",3);
		var tableResto3=new TableResto(3,"Cannel",4);
		var tableResto4=new TableResto(4,"YlangYlang",5);
		var tableResto5=new TableResto(5,"Palmier",6);
		var tableResto6=new TableResto(6,"Beryl",7);
		tabTableResto.push(tableResto1);
		tabTableResto.push(tableResto2);
		tabTableResto.push(tableResto3);
		tabTableResto.push(tableResto4);
		tabTableResto.push(tableResto5);
		tabTableResto.push(tableResto6);
		self.db.collection('tableResto').insert( tabTableResto, function(err, records){
			if (err) { throw err; }
			res.end('success');
		});
	};
	function Commande(id_table,id_client,date_commande){
		this.id_table=id_table;
		this.id_client=id_client;
		this.date_commande=date_commande;
	}
	function CommandeResto(tableName,client,platCommande,paye)
    {
        this.tableName = tableName;
        this.client = client;
        this.platCommande = platCommande;
        this.paye = paye || false;
    }
	//inserer une commande 
	self.routes['ajoutCommande'] = function(req, res){
		//var commande=new Commande(parseInt(req.body.id_table),req.body.id_client_resto,req.body.date_commande);
		self.db.collection('commandeTable').insert( req.body, function(err, records){
			if (err) { throw err; }
			res.end('success');
		});
	};
  
	self.routes['ajoutCommandeResto'] = function(req, res){
        var commande = JSON.parse(req.body.commande);
        var predicat = {"table.idTagNfc":commande.table.idTagNfc, "datePassageCommande":commande.datePassageCommande};
        //gestion du possible double insertion venant du client android
        self.db.collection('commandeTable').findOne(predicat, function(err, item) {
            assert.equal(null, err);
            console.log('item = ' + item);
            if(item != null)
            {
                responseGenerique.message = 'success';
                res.end(JSON.stringify(responseGenerique));
            }
            else
            {
                //creer
                self.db.collection('commandeTable').insert( commande, function(err, commandeInserted){
                    responseGenerique.message = 'success';
                    if (err) 
                    {
                        responseGenerique.message = 'erreur:'+err.message;
                        res.end(JSON.stringify(responseGenerique));
                        throw err;
                    }
                    else
                    {
                        console.log(commandeInserted._id);
                        res.end(JSON.stringify(responseGenerique));
                    }

                });
            }
        });
    };
    self.routes['commandes'] = function(req, res){
        var predicat = {"commande.estPaye":false};
        console.log(req.params.table);
        if(req.params.table != null)
        {
            var param = JSON.parse(req.params.table);
            if(param.idTagNfc != undefined)
            {
                predicat = {"table.idTagNfc":param.idTagNfc, "commande.estPaye":false};
            }
        }
        console.log(JSON.stringify(predicat));
        self.db.collection('commandeTable').find(predicat).sort( { "_id": 1 } ).toArray(function(err, commandes) {
            
            if(err)
            {
                res.end(err.message);
            }
            else
            {
                res.end(JSON.stringify(commandes));
            }
        });
    };
	self.routes['ajoutEmploye'] = function(req, res){
        var employe=new Employe(req.body.nom,req.body.motdepasse,req.query.poste);
        //creer
        self.db.collection('employe').insert( employe, function(err, employeInserted){
            responseGenerique.message = 'success';
            if (err) 
            {
                responseGenerique.message = 'erreur:'+err.message;
                res.end(JSON.stringify(responseGenerique));
                throw err; 
            }
            else
            {
                console.log(employe._id);
                res.end(JSON.stringify(responseGenerique));
            }
            
        });
    };  
    self.routes['ajoutClient'] = function(req, res){
        var client=new Client(req.body.nom,req.body.idTagNfc);
        
        self.db.collection('client').findOne({idTagNfc:req.body.idTagNfc}, function(err, item) {
            assert.equal(null, err);
            console.log('item = ' + item);
            if(item != null)
            {
            	responseGenerique.message = 'Ce tag n\'est utilisé par aucun compte, appuyer sur "Je possède déjà un compte" pour vous connecter';
                res.end(JSON.stringify(responseGenerique));
            }
            else
            {
                //creer
                self.db.collection('client').insert( client, function(err, records){
                    if (err) 
                    {
                        responseGenerique.message = 'erreur:'+err.message;
                        res.end(JSON.stringify(responseGenerique));
                        throw err; 
                    }
                    else res.end(JSON.stringify(client));
                });
            }
        });
        
    }; 
    self.routes['connexionClient'] = function(req, res){
    	if(req.body.idTagNfc != undefined && req.body.idTagNfc != null)
		{
    		self.db.collection('client').findOne({idTagNfc:req.body.idTagNfc}, function(err, item) {
                assert.equal(null, err);
                console.log('item = ' + item);
                if(item != null)
                {
                    res.end(JSON.stringify(item));
                }
                else
                {
                	
                    responseGenerique.message = 'Ce tag n\'est utilisé par aucun compte, appuyer sur "Je possède déjà un compte" pour vous connecter';
                    res.end(JSON.stringify(responseGenerique));
                }
            });
		}
    	else
        {
            responseGenerique.message = "Aucun tag en parametre";
            res.end(JSON.stringify(responseGenerique));
        }
    };  
    self.routes['connexionEmploye'] = function(req, res){
        console.log(JSON.stringify(req.body));
        self.db.collection('employe').findOne({nom:req.body.nom, motdepasse:req.body.motdepasse}, function(err, item) {
            assert.equal(null, err);
            console.log('item = ' + item);
            if(item != null)
            {
                res.end(JSON.stringify(item));
            }
            else
            {
                responseGenerique.message = 'Le nom et/ou le mot de passe sont/est invalide(s)';
                res.end(JSON.stringify(responseGenerique));
            }
        });
    };  
    self.routes['payerCommandes'] = function(req, res)
    {
        console.log(JSON.stringify(req.body.table));
        var table = JSON.parse(req.body.table);
        self.db.collection('commandeTable').updateMany( {"table._id" : table._id}, 
        {
            $set: { "commande.estPaye": true },
        });
        res.end("success");
        var client = JSON.parse(req.body.client);
        var addition = req.body.addition;
        attribuerJeton(client, addition);
        
    };
    self.routes['echangerJetonPlat'] = function(req, res)
    {
        console.log(req.body.clientIdTagNfc);
        console.log(req.body.plat);
        if(req.body.clientIdTagNfc != undefined && req.body.clientIdTagNfc != null)
        {
            self.db.collection('client').findOne({idTagNfc:req.body.clientIdTagNfc}, function(err, item) {
                assert.equal(null, err);
                console.log('item = ' + item);
                if(item != null)
                {
                    var nouveauJeton = item.jeton - 10;
                    console.log(nouveauJeton);
                    console.log(JSON.stringify(item));
                    self.db.collection('client').updateOne ( {"idTagNfc" : item.idTagNfc}, 
                    {
                        $set: { "jeton":  nouveauJeton},
                    });
                    responseGenerique.message = "Echange effectuée.";
                    res.end(JSON.stringify(responseGenerique));
                }
                else
                {
                    responseGenerique.message = "Ce tag n'appartient à aucun client.";
                    res.end(JSON.stringify(responseGenerique));
                }
            });
        }
        else
        {
            responseGenerique.message = "Aucun tag en paramètre.";
            res.end(JSON.stringify(responseGenerique));
        }
    };
    self.routes['valeurJetonClient'] = function(req, res)
    {
        if(req.params.idTagNfc != undefined && req.params.idTagNfc != null)
        {
            self.db.collection('client').findOne({idTagNfc:req.params.idTagNfc}, function(err, item) {
                assert.equal(null, err);
                console.log('item = ' + item);
                if(item != null)
                {
                    responseGenerique.message = {'valeur' : calculerValeurJeton(item.jeton)};
                    res.end(JSON.stringify(responseGenerique.message));
                }
                else
                {
                    responseGenerique.message = "Ce tag n'appartient à aucun client.";
                    res.end(JSON.stringify(responseGenerique));
                }
            });
        }
        else
        {
            responseGenerique.message = "Aucun tag en paramètre.";
            res.end(JSON.stringify(responseGenerique));
        }
    }
    var valeurUniteJeton = 10000;
    function calculerValeurJeton(jeton)
    {
        var valeur = 0;
        for(var i = 10; i <= jeton; i += 10)
        {
            valeur += valeurUniteJeton;
        }
        return valeur;
    }
    function calculJetonEnFonctionAddition(addition)
    {
        var jeton = 0;
        for(var i = valeurUniteJeton; i <= addition; i += valeurUniteJeton)
        {
            jeton ++;
        }
        return jeton;
    }
    function attribuerJeton(client, addition)
    {
        self.db.collection('client').findOne({idTagNfc:client.idTagNfc}, function(err, item) {
            assert.equal(null, err);
            if(item != null)
            {
                var nouveauJeton = item.jeton + calculJetonEnFonctionAddition(addition);
                self.db.collection('client').updateOne ( {"idTagNfc" : item.idTagNfc}, 
                {
                    $set: { "jeton":  nouveauJeton},
                });
            }
        });
    }
	// Web app urls
	self.app  = express();

	//This uses the Connect frameworks body parser to parse the body of the post request
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');
	// parse application/x-www-form-urlencoded
	self.app.use(bodyParser.urlencoded());
  	// parse application/json
	self.app.use(bodyParser.json());
	// override with POST having ?_method=DELETE
	self.app.use(methodOverride('_method'))

	//define all the url mappings
	
	self.app.get('/ajoutTables', self.routes['ajoutTables']);
	self.app.get('/plats', self.routes['plats'])
	self.app.get('/tableRestos', self.routes['tableRestos']);
	self.app.get('/verifierTable', self.routes['verifierTable']);
	self.app.post('/ajoutReservationTable', self.routes['ajoutReservationTable']);
	self.app.get('/reservationTable', self.routes['reservationTable']);

	self.app.post('/ajoutCommande', self.routes['ajoutCommande']);
	self.app.post('/ajoutClient', self.routes['ajoutClient']);
    self.app.post('/ajoutEmploye', self.routes['ajoutEmploye']);
    self.app.post('/connexionClient', self.routes['connexionClient']);
    self.app.post('/connexionEmploye', self.routes['connexionEmploye']);
    self.app.post('/ajoutCommandeResto', self.routes['ajoutCommandeResto']);
    self.app.get('/commandes/:table', self.routes['commandes']);
    self.app.put('/payerCommandes', self.routes['payerCommandes']);
    self.app.get('/valeurJetonClient/:idTagNfc', self.routes['valeurJetonClient']);
    self.app.post('/echangerJetonPlat', self.routes['echangerJetonPlat']);
    
	// Logic to open a database connection. We are going to call this outside of app so it is available to all our functions inside.
	self.connectDb = function(callback){
		self.db.open(function(err, db){
			if(err){ throw err };
			self.db.authenticate(self.dbUser, self.dbPass, {authdb: "admin"}, function(err, res){
				if(err){ throw err };
				callback();
			});
		});
	};
  
  
	//starting the nodejs server with express
	self.startServer = function(){
		self.app.listen(self.port, self.ipaddr, function(){
			console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddr, self.port);
		});
	}

	// Destructors
	self.terminator = function(sig) {
		if (typeof sig === "string") 
		{
			console.log('%s: Received %s - terminating Node server ...', Date(Date.now()), sig);
			process.exit(1);
		};
		console.log('%s: Node server stopped.', Date(Date.now()) );
	};

	process.on('exit', function() { self.terminator(); });

	self.terminatorSetup = function(element, index, array) {
		process.on(element, function() { self.terminator(element); });
	};

	['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGPIPE', 'SIGTERM'].forEach(self.terminatorSetup);
};

//make a new express app
var app = new App();

//call the connectDb function and pass in the start server command
app.connectDb(app.startServer);
