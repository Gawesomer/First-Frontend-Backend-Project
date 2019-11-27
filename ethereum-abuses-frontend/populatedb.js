#! /usr/bin/env node

console.log('This script populates some test phishings, scams and sourceCodeExploits to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Phishing = require('./models/phishing')
var Scamming = require('./models/scamming')
var SourceCodeExploits = require('./models/sourceCodeExploits')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var phishings = []
var scammings = []
var sourceCodeExploits = []

function phishingCreate(name, category, description, URL, source, cb) {
  phishingdetail = {name:name, category:category, description:description, URL:URL, source:source}
  
  var phishing = new Phishing(phishingdetail);
       
  phishing.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Phishing: ' + phishing);
    phishings.push(phishing)
    cb(null, phishing)
  }  );
}

function createPhishings(cb) {
    async.parallel([
        function(callback) {
          phishingCreate('Phishing 1', 'PhishingCat', 'This is a phishing abuse', 'https://google.com', 'https://google.com', callback);
        }
        ],
        // optional callback
        cb);
}

function sourceCodeExploitCreate(name, category, description, contractAddress, sourceCode, ABI, compilerVersion, constructorArguments, cb) {
  sourceCodeExploitdetail = {name:name, category:category, description:description, contractAddress:contractAddress, sourceCode:sourceCode, ABI:ABI, compilerVersion:compilerVersion, constructorArguments:constructorArguments}
  
  var sourceCodeExploit = new SourceCodeExploits(sourceCodeExploitdetail);
       
  sourceCodeExploit.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New SourceCodeExploit: ' + sourceCodeExploit);
    sourceCodeExploits.push(sourceCodeExploit)
    cb(null, sourceCodeExploit)
  }  );
}

function createSourceCodeExploits(cb) {
    async.parallel([
        function(callback) {
          sourceCodeExploitCreate('Phishing 1', 'PhishingCat', 'This is a phishing abuse', 'https://google.com', 'https://google.com', 'ABI', 'compiler', 'constructor', callback);
        }
        ],
        // optional callback
        cb);
}

async.series([
    createPhishings,
    createSourceCodeExploits
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Done');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});





