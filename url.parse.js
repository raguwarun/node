const { Console } = require('console');
var link=require('url');
var adr='http://localhost:8080/default.htm?year=2020&month=november';
var p=link.parse(adr, true);

console.log(p.host);
console.log(p.pathname);
console.log(p.search);

var pdata=p.query;
console.log(pdata.month);
