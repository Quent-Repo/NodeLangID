var langs = require('langs');
var frank = require('franc');
try {
    let b = process.argv.slice(2);
    let v = frank(b.toString());
    let h= langs.where("2",v.toString());
    console.log(h["name"]);   
} catch (error) {
    console.log("could not find anything")
    
}

