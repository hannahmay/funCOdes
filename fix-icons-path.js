"use strict";

let fs = require('fs');
let _ = require('underscore');

let replaceStringArr = {
    '/fonts/Flaticon2\\.' : './fonts/Flaticon2.',
    '/fonts/Flaticon\\.' : './fonts/Flaticon.',
    '/fonts/line-awesome\\.' : './fonts/line-awesome.'
};

console.log('Loading JS file...');

fs.readFile('public/js/app.js', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    let result = data;

    _.map(replaceStringArr, function (val, key) {
        console.log('Replacing ' + key + ' with ' + val);

        let replace = new RegExp(key, 'g');

        result = result.replace(replace, val);
    });

    console.log('Writing JS file...');

    fs.writeFile('public/js/app.js', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });

    console.log('Done replacing!');
});