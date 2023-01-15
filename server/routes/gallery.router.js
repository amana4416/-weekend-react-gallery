const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const increaseLikes = req.body.likes += 1;
    const sqlText = `
        UPDATE "kittens"
            SET "likes"=$1
            WHERE "id"=$2;
    `;
    const sqlValues = [increaseLikes, req.params.id];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        console.log('showed interest in a kitten');
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.log('something broke in /gallery put', dbErr);
        res.sendStatus(500);
    })

    // console.log(req.params);
    // const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('sending kittens to client');
    const sqlText = `
    SELECT * FROM "kittens"
        ORDER BY "id";
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        //send database to DOM
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        console.log('something broke in /gallery GET', dbErr);
        res.sendStatus(500);
    })
})

// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route


//POST route
router.post('/', (req, res) => {
    const kitten = req.body;
    const sqlText =`
        INSERT INTO "kittens" ("name", "description", "path")
            VALUES ($1, $2, $3);
    `;
    const sqlParams = [kitten.name, kitten.description, kitten.path];
    pool.query(sqlText, sqlParams)
        .then((dbRes) => {
            console.log(`Added a kitten for addoption`);
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            console.log(`error in server post route ${sqlText}`, dbErr);
            res.sendStatus(500);
        })
})

//DELETE route
router.delete('/:id', (req, res) => {
    let id = req.params.id
    let sqlValues = [id]
    const sqlText = `
        DELETE FROM "kittens"
            WHERE "id"=$1;
    `;
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            console.log('deleting a kitten from database');
            res.sendStatus(201);
        })
        .catch ((dbErr) => {
            console.log('error in server delete route', dbErr);
            res.sendStatus(500);
        })
})

module.exports = router;