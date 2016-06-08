"use strict";

var fs = require("fs");
var path = process.cwd()+"directory-name-here";

// console.log(process.cwd());
fs.readdir(path, function(err, files) {
    if (err) {
        throw err;
    }
    files.forEach(function (file){
        var newFIleName = file.replace("_", "-");
        fs.rename(path+file, path+newFIleName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    });
});
