// Importing file modules
const fs = require('fs');


//#region 

// SYNCHRONOUS BLOCKING 

// /**
//  * reading text using readfilesync which is a synchronous code
//  * @argument: #1: File Name
//  * @argument: #2: encode type
//  */
// const text = fs.readFileSync('read_file_test.txt', 'utf-8');

// // Outputting the content of the file
// console.log(text);

// /**
//  * Editing file using writeFileSync function
//  * @argument: #1: File Name
//  * @argument: #2: Content
//  */

// const newText = `${text}.\nThis is a new text appended by using function writeFileSync(). ${Date.now()}`;

// fs.writeFileSync('read_file_test.txt', newText);

//#endregion

//#region 
// ASYNCHRONOUS NON - BLOCKING 

fs.readFile('read_file_test.txt', 'utf-8', (err, data) => {
  console.log(data);
});

console.log("Will read file");

//#endregion
