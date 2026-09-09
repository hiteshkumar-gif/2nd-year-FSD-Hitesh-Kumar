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
