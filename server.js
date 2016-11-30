//var users = require('./leads.json');
var express = require('express');
var winston = require('winston'),
    expressWinston = require('express-winston');
var _ = require('lodash');
const logger = require('./logging.js');

//create app
var app = express();
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});


var users =
[
{
"_id": "jkj238238jdsnfsj23",
"email": "foo@bar.com",
"firstName":  "John",
"lastName": "Smith",
"address": "123 Street St",
"entryDate": "2014-05-07T17:30:20+00:00"
},
{
"_id": "edu45238jdsnfsj23",
"email": "mae@bar.com",
"firstName":  "Ted",
"lastName": "Masters",
"address": "44 North Hampton St",
"entryDate": "2014-05-07T17:31:20+00:00"
},
{
"_id": "wabaj238238jdsnfsj23",
"email": "bog@bar.com",
"firstName":  "Fran",
"lastName": "Jones",
"address": "8803 Dark St",
"entryDate": "2014-05-07T17:31:20+00:00"
},
{
"_id": "jkj238238jdsnfsj23",
"email": "coo@bar.com",
"firstName":  "Ted",
"lastName": "Jones",
"address": "456 Neat St",
"entryDate": "2014-05-07T17:32:20+00:00"
},
{
"_id": "sel045238jdsnfsj23",
"email": "foo@bar.com",
"firstName":  "John",
"lastName": "Smith",
"address": "123 Street St",
"entryDate": "2014-05-07T17:32:20+00:00"
},
{
"_id": "qest38238jdsnfsj23",
"email": "foo@bar.com",
"firstName":  "John",
"lastName": "Smith",
"address": "123 Street St",
"entryDate": "2014-05-07T17:32:20+00:00"
},
{
"_id": "vug789238jdsnfsj23",
"email": "foo1@bar.com",
"firstName":  "Blake",
"lastName": "Douglas",
"address": "123 Reach St",
"entryDate": "2014-05-07T17:33:20+00:00"
},
{
"_id": "wuj08238jdsnfsj23",
"email": "foo@bar.com",
"firstName":  "Micah",
"lastName": "Valmer",
"address": "123 Street St",
"entryDate": "2014-05-07T17:33:20+00:00"
},
{
"_id": "belr28238jdsnfsj23",
"email": "mae@bar.com",
"firstName":  "Tallulah",
"lastName": "Smith",
"address": "123 Water St",
"entryDate": "2014-05-07T17:33:20+00:00"
},
{
"_id": "jkj238238jdsnfsj23",
"email": "bill@bar.com",
"firstName":  "John",
"lastName": "Smith",
"address": "888 Mayberry St",
"entryDate": "2014-05-07T17:33:20+00:00"
}
]

// for(var i = 0; i < users.length; i++) {
//     console.log(users[i].email);
// }

var uDupEmail = _.uniqBy(users, function(p) {
  return p.email;
});
console.log(uDupEmail);
console.log(uDupEmail.length);
console.log(uDupEmail.length);
console.log(uDupEmail.length);


var uDupId = _.uniqBy(users, function(p) {
  return p._id;
});
console.log(uDupId);
console.log(uDupId.length);
console.log(uDupId.length);
console.log(uDupId.length);

var uDupEmail = _.uniqBy(uDupId, function(p) {
  return p.email;
});
console.log(uDupEmail);
console.log(uDupEmail.length);
console.log(uDupEmail.length);
console.log(uDupEmail.length);
