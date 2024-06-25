const express = require('express')
const route = express.Router()
const {getAllData,calculateCurrencyValue} = require('../Controllers/currencyController')

route.get('/',getAllData)
route.post('/from/:fromcode/to/:tocode',calculateCurrencyValue)
module.exports = route