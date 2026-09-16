const fs=require("fs").promises;
async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello Students!");
        console.log("File created and data written succesfully.");
    } catch(error){
        console.log(error)
            console.log("Error:",error);
        
    }
}
writeFile();
//read file
async function readFile(){
    try{
        const data=await fs.readFile("promise.txt","utf-8");
        console.log("File content:");
        console.log(data);
    } catch(error){
        console.log("Error:",error);
    }
}
readFile();
//update
async function updateFile(){
    try{
        await fs.appendFile("promise.txt","\nThis is an appended text.");
        console.log("File updated successfully.");
    } catch(error){
        console.log("Error:",error);
    }
}
updateFile();

//rename
async function renameFile(){
    try{
        await fs.rename("promise.txt","renamedPromise.txt");
        console.log("File renamed successfully.");
    } catch(error){
        console.log("Error:",error);
    }
}
renameFile();



//delete
async function deleteFile(){
    try{
        await fs.unlink("Promisenew.txt");
        console.log("File deleted successfully.");
    } catch(error){
        console.log("Error:",error);
    }
}
deleteFile();   