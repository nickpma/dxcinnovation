console.log("Starting app...");

//const fs = require('fs');
//const os = require('os');
//fs.appendFile('greeting.txt','hello world');
//fs.appendFileSync('greeting.txt',' hello world 2');
//var user = os.userInfo();
//console.log(user);

const notes = require("./notes.js");
//fs.appendFileSync('greeting.txt','Hello '+ user.username + 'and You are '+ notes.age);

var res = notes.addNote();
var result = notes.add(9,-2);
console.log(res);
console.log(result);