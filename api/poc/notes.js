console.log("starting notes.js...");
//console.log(module);
module.exports.age = 33;
module.exports.addNote = () => {
    console.log('addNote');
    return 'new Note';
};

module.exports.add = (a,b) =>{
    return a + b;
}