var langs = require('langs');
var frank = require('franc');

let b = process.argv.slice(2);
let v = frank(b.toString());
let h= langs.where("2",v.toString());
console.log(h["name"]);
