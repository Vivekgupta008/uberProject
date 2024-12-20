const express = require('express');
const router = express.Router();
const authMiiddleware = require('../middlewares/auth.middleware');
const mapsController = require('../controllers/maps.controller');
const {query} = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiiddleware.authUser,mapsController.getCoordinates)


router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiiddleware.authUser,mapsController.getDistanceTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authMiiddleware.authUser,mapsController.getSuggestions
)

module.exports = router;