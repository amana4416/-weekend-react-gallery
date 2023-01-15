const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let increaseLikes = req.body.likes += 1;
    let sqlText = `
        UPDATE "kittens"
            SET "likes"=$1
            WHERE "id"=$2;
    `;
    let sqlValues = [increaseLikes, req.params.id];
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
    let sqlText = `
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

module.exports = router;