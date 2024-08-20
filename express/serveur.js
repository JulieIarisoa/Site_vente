const express = require("express");
const mysql = require('mysql');

const cors = require('cors');


const app = express();
app.use(express.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gestion_biblio"
})
/*selectioner liste dans le base de données */
app.get("/", (req, res) => {
    const sql = "SELECT * FROM membre";
    db.query(sql, (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
});

/*inserer données dans la base de données*/
app.post('/insert/', (req, res) => {
    const sqli = "INSERT INTO membre('NOM', 'PRENOM', 'ADRESSE', 'DATE_NAISSANCE') VALUES (?)";
    const values = [
        req.body.nom,
        req.body.prenom,
        req.body.adresse
    ]
    db.query(sqli, [values], (err, data) => {
        if(err) throw res.json("error");
        return res.json(data);
    })
});

/*modifier données dans la base de données*/
app.put('/update/:NUMERO/', (req, res) => {
    const sqlu = "UPDATE membre SET 'NOM' = ? 'PRENOM' = ? 'ADRESSE' = ? WHERE NUMERO = ?";
    const values = [
        req.body.nom,
        req.body.prenom,
        req.body.adresse
    ]
    const NUMERO = req.params.NUMERO;
    db.query(sqlu, [...values, NUMERO], (err, data) => {
        if(err) throw res.json("error");
        return res.json(data);
    })
});

/*supprimer données dans la base de données*/
app.delete('/delete/:NUMERO/', (req, res) => {
    const sqlu = "DELETE FROM membre WHERE NUMERO = ?";
    const NUMERO = req.params.NUMERO;
    db.query(sqlu, [NUMERO], (err, data) => {
        if(err) throw res.json("error");
        return console.log("requete ok");
    })
});


/*Modification données der la base de données *//*
var sqlu = "UPDATE membre SET NOM='juju' WHERE NUMERO=2 ";
db.query(sqlu, function(err, resul){
    if(err) throw err;
    console.log("update" + resul.affectedRows);
});*/

/*suppression de données de la base de données*//*
var sqld = "DELETE FROM membre WHERE NOM='juju'";
db.query(sqld, function(err, res){
    if(err) throw err;
    console.log("deleted" + res.affectedRows);
})*/

app.listen(8081, () => {
    console.log("listening");
});