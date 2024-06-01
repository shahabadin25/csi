const fs=require('fs');
const http=require('http');
const readline=require('readline');

/*********************************** */


/************CREATE A FILE********** */
let create=fs.writeFileSync('./input.txt',"this is madness");

/**********READING FILES************ */
let textIn=fs.readFileSync('./input.txt','utf-8');
console.log(textIn);

/**********WRITING FILES************ */
let textOut=fs.writeFileSync('./output.txt',textIn);

/**********DELETING FILES*********** */
fs.unlinkSync('./input.txt');