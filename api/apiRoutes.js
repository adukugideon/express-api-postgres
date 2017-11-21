const express = require('express');

const router = express.Router();

const queries = require('../db/queries');
const Treeize   = require('treeize');

//Function to check if id is valid
function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}



router.get('/categories', (req, res) => {
    const categoryData    = new Treeize();

    queries.getAllCategories().then(category => {
        const categoryResponse=res.json(category);
        categoryData .grow(categoryResponse);

        res.send(categoryData .getData())

    });
});


router.get('/books', (req, res) => {
    queries.getAllBooks().then(book => {
        res.json(book);
    });
});

router.get('/bookcat/:id', isValidId, (req, res,next) => {
    queries.getBookByCategory(req.params.id).then(book1 => {
        if(book1){
            res.json(book1);
        }
        else {
            next();
        }
    });
});
router.get('/bookstatclient/:id', isValidId, (req, res,next) => {
    queries.getBookStatClients(req.params.id).then(book1 => {
        if(book1){
            res.json(book1);
        }
        else {
            next();
        }
    });
});
router.get('/bookstatregclient/:id', isValidId, (req, res,next) => {
    queries.getBookStatClients(req.params.id).then(book1 => {
        if(book1){
            res.json(book1);
        }
        else {
            next();
        }
    });
});
router.get('/bookstatclientpercount/:id', isValidId, (req, res,next) => {
    queries.getBookClientsPerCountry(req.params.id).then(book1 => {
        if(book1){
            res.json(book1);
        }
        else {
            next();
        }
    });
});

router.get('/users', (req, res) => {
    queries.getAllUsers().then(wr_user => {
        res.json(wr_user);
    });
});

router.get('/user/:id', (req, res, next) => {
    queries.getUsersDetails(req.params.id).then(wr_user => {
        if(wr_user) {
            res.json(wr_user);
        }else {
            next();
        }

    });
});




module.exports = router;
