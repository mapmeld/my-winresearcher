#! /usr/bin/env node

var fs = require('fs');
var winResearcher = require('./my-winresearcher.js');

if (process.argv.length > 2) {
  var srcFile = process.argv[2];
  fs.readFile(srcFile, 'utf-8', function(err, srcText) {
    if (err) {
      throw err;
    }
    var processed = winResearcher(srcText);
    if (process.argv.length > 3) {
      var outputFile = process.argv[3];
      fs.writeFile(outputFile, processed, function(err) {
        if (err) {
          throw err;
        }
        console.log('done');
      });
    } else {
      console.log(processed);
    }
  });
} else {
  console.log('Usage: winresearcher input.txt [output.txt]');
}
