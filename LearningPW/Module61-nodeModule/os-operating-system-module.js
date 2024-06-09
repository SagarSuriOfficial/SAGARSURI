
const os = require('os');

console.log('CPU Architecture:- ' + os.arch());

console.log("free Memorey:- " + os.freemem());

console.log("Total Memory:- " + os.totalmem());

console.log("Network Interfrence:- " + JSON.stringify(os.networkInterfaces()));

console.log("Os defaul tempt directory:- " + os.tmpdir());


console.log("Endianess:- " + os.endianness());

console.log("HOSTNAME:- " +  os.hostname());

console.log("OS type:- " + os.type()); 

console.log("OS Platform:- " + os.platform());

console.log("OS Release:- " + os.release());