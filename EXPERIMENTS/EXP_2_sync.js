const fs = require('fs');
 fs.writeFileSync('secastudent.txt','this is the exp 4 in fsd workshop','utf-8');
 console.log('file is written successfully')

 //read
 const data=fs.readFileSync("secastudent.txt",'utf8')
 console.log('file content is given as : ',data)

 //append
 fs.appendFileSync('secastudent.txt','\n This is new line added')
 console.log('File is appended')

 //create
 fs.writeFileSync('student.txt','this is i made for delted','utf-8');
 console.log('file is written successfully')

 //delete
//  fs.unlinkSync('student.txt');
//  console.log("file is deleted")

//folder creation
//  fs.mkdirSync('sample folder');
//  console.log("new folder is created")

//delete a folder
//  fs.rmdirSync('sample folder');
//  console.log("folder deleted")

if (fs.existsSync('secastudent.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}