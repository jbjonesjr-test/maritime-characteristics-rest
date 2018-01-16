const req = require('request');

let url = "https://public.enigma.com/api/datasets/d416ba07-6be9-4f13-9793-370fe715b9c1"

req.get(url).on('response',('res') ]> {
  console.log('details',res);
});
