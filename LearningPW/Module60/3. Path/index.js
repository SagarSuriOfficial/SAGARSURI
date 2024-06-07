const { log } = require("console");
const path = require("path");
console.log(path.sep);
console.log(process.env.path);
console.log(path.delimiter);

// current path find 
const currentFilePath = __filename;
console.log(currentFilePath);

// console.log(__dirname);

// file name with extention
let basename = path.basename(currentFilePath);
console.log(basename , "<--basename");

//file name without extention
let basenameWithoutExt = path.basename(currentFilePath , '.js');
console.log(basenameWithoutExt, '<--without extention');

let dirname = path.dirname(currentFilePath);
console.log(dirname , '<--direcory name');

// find extention name 
console.log(path.extname(currentFilePath), "<--extention");

/*
let pathToFile = path.format((
    dir: '/public_html/home',
    base: 'index.html'
)); */  // OUTPUT - /public_html/home/index.html

// console.log('pathToFile', pathToFile);

console.log('IsAbsolutePath', path.isAbsolute(currentFilePath)); //true

let pathToDir = path.join('/home' , 'js', 'dist', 'index.js');
console.log(pathToDir, 'pathToDir') // output // \home\js\dist\index.js

console.log(path.parse(currentFilePath));

console.log('relative path -->' , path.relative('/home/user/config','/home/user/js/'));

console.log('normalize-->', path.normalize('//home//user//index.html'));