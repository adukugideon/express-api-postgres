const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

//Function to check if id is valid
function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

router.get('/books', (req, res) => {
    queries.getAllBooks().then(book => {
        res.json(book);
    });
});

router.get('/bookcat/:id', isValidId, (req, res,next) => {
    queries.getBookByCategory(req.params.id).then(book => {
        if(book){
            res.json(book);
        }
        else {
            next();
        }
    });
});

router.get('/categories', (req, res) => {
    queries.getAllCategories().then(category => {
        res.json(category);
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
