//write file asynchronously
const fs = require('fs');
fs.writeFile(
    'sample.txt','Welcome To Full Stack Development', (err) => {
        if(err){
            console.log('Error creating file:',err);
            return;
        }
        console.log('1File created successfully');
    }
)
//read file asynchronously
fs.readFile('sample.txt','utf-8',(err,data) => {
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('2File content:',data);
})
//append file asynchronously
fs.appendFile('sample.txt','\nThis is an appended text.',(err) => {
    if(err){
        console.log('Error appending file:',err);
        return;
    }
    console.log('3File appended successfully');
})

//update read file asynchronously
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('4File Content: ');
    console.log(data);
})
//append file asynchronously
fs.appendFile('sample.txt','\nThis is an text.',(err) => {
    if(err){
        console.log('Error appending file:',err);
        return;
    }
    console.log('5File appended successfully');
})
//update read file asynchronously
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('6File Content: ');
    console.log(data);
})
//delete
// fs.unlink('sample.txt',(err)=>{
//     if(err){
//         console.log('error deleting file:',err);
//     }
//     else{
//         console.log('file delted succesfully');
//     }
// })
