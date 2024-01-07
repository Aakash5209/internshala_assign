const mongoose = require('mongoose')
const connectToDb = require('./connection')
const Playlist = require('./playlist_model')

connectToDb()
// here ctype means course type

const createDocument = async ()=>{

    const reactPlaylist = new Playlist({
        name :" java",
        ctype: 'backend',
        videos: 60,
        author: "shivam",
        active: true
    })

    const javaPlaylist = new Playlist({
        name :"  react JS",
        ctype: 'frontend',
        videos: 40,
        author: "tushar",
        active: true
    })
    const htmlplaylist = new Playlist({
        name :"   JS",
        ctype: 'script',
        videos: 80,
        author: "vansh",
        active: true
    })
    const angularPlaylist = new Playlist({
        name :" angular",
        ctype: 'frontend',
        videos: 90,
        author: "ansh",
        active: true
    })
     const result = await Playlist.insertMany([reactPlaylist,javaPlaylist,htmlplaylist,angularPlaylist])
}

//createDocument()

// using querry here we will appply the querry on the collection/table
                        //performing querry
//here we are getting only those Playlist whoose videos are greater than 70
const getDocument = async ()=>{
    try{
        
    // it will show all the document
    // const result = await Playlist.find();
    // console.log(result);

    //find documnet whoose ctype is frontend and its only 1 field is visible of first two documnet
    const result = await Playlist.find({ videos: { $gt: 70 } })
    
    console.log(result);
    }
    catch(err){
        console.log(err);
    }

}

getDocument();
