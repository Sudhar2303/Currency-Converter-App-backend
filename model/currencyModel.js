const mongoose = require('mongoose')
const currencyModel = mongoose.Schema(
    {
        code :
        {
            type : String,
            required : true,
            unique : true
        },
        value :
        {
            type : Number,
            unique : true
        },
        NumberOfNotes :
        {
            type: Number
        }
    },
    {
        collection : 'currencyData'
    }
)

module.exports = mongoose.model('currencyData',currencyModel)