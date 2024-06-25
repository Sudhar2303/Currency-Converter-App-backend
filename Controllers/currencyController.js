const initialData = require('../Data/currencyData')
const currencyModel = require('../model/currencyModel')
const getAllData = async(request,response) =>
{
    try
    {
        const fetchData = await currencyModel.find()
        if(fetchData.length === 0)
        {
            const updateData = await currencyModel.insertMany(initialData)
            return response.status(200).send(updateData)
        }
        else
        {
            return response.status(200).send(fetchData)
        }
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
    
}
const calculateCurrencyValue = async(request,response) =>
{
    const fromData = request.params.fromcode
    const toData = request.params.tocode
    const NumberOfNotes = request.body
    console.log(NumberOfNotes.NumberOfNotes)
    try
    {
        const fromValue = await currencyModel.findOne({ code : fromData.toUpperCase()})
        const toValue = await currencyModel.findOne({code : toData.toUpperCase()})
        const expectedCurrencyValue = (toValue.value/fromValue.value) * NumberOfNotes.NumberOfNotes
        console.log(expectedCurrencyValue)
        response.status(200).send({expectedCurrencyValue})
    }
    catch(error)
    {
        return response.status(500).send({message: error.message})
    }
    console.log(fromData,toData)
    
}
3
module.exports = {getAllData,calculateCurrencyValue}