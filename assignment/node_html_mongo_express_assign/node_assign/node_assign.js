const fs = require('fs');
//here we are using both synchronous and asynchronous fxn for file handling we can also use only anyone
//create folder 
fs.mkdirSync("collegeNotes");
//create file
 fs.writeFileSync('collegeNotes/notes.txt',"heloo i am learning node js")
 //adding some more text in the file 
 //performing operation 1
 fs.appendFile('collegeNotes/notes.txt',"keep learning", (err)=>{
     if(err){
         console.log(err);
     }
     console.log("append successfully");

 })
 //reading file
 fs.readFile('collegeNotes/notes.txt','utf-8',(err,data)=>{
     if(err){
         console.log(err);
     }
     console.log(data);
 })
  //performing operation 2
 const finalData =data.toUpperCase()
 // create the new file add add the data after performing fxn
 fs.writeFileSync('collegeNotes/notes2.txt',finalData)
 //note  -
//  if we dont use encoding then during reading file we get the buffer not the string 
// <Buffer 68 65 6c 6f 6f 20 69 20 6d 20 6c 65 61 72 6e 69 6e 67 20 6e 6f 64 65 20 6a 73>

