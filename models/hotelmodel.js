const mongoose = require("mongoose")
const hotelSchema = mongoose.Schema({
    name:String,
    img:String,
    location:String,
    price:Number,
    rating:Number,
    userID:String
})

const HotelModel = mongoose.model("hotels",hotelSchema)

module.exports = {HotelModel}