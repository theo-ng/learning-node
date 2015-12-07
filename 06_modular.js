var mymodule = require('./module.js');

mymodule(process.argv[2], process.argv[3], function(err, list) {
  if(err) return console.error('Error:', err)
  list.forEach(function(file) {
    console.log(file);
  });
});