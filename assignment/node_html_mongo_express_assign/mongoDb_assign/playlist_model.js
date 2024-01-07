const mongoose = require('mongoose')

// defining the structure
const playlistSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true 
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date:{
        type: Date,
        default: Date.now }
})

//create the collection/table using the above structure
//using the model to create the collection
const Playlist = new mongoose.model('Playlist',playlistSchema)


module.exports = Playlist;