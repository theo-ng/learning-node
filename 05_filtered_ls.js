var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  if(!err) {
    list.forEach(function(e, i) {
      if(e.match("\."+process.argv[3]+"$")) {
        console.log(list[i]);
      }
    });
  }
});