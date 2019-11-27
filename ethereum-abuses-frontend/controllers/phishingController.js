var Phishing = require('../models/phishing');
var Scamming = require('../models/scamming');
var SourceCodeExploits = require('../models/sourceCodeExploits');
var Other = require('../models/other');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        phishing_count: function(callback) {
            Phishing.countDocuments({}, callback);  // Pass an empty object as match condition to fund all documents of this collection
        },
        scamming_count: function(callback) {
            Scamming.countDocuments({}, callback);
        },
        sourceCodeExploits_count: function(callback) {
            SourceCodeExploits.countDocuments({}, callback);
        },
        other_count: function (callback) {
            Other.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'BlockChain Abuses Home', error: err, data: results });
    });
};

// Display list of all Phishing abuses.
exports.phishing_list = function(req, res) {

    Phishing.find({}, 'name category')
      .exec(function (err, list_phishings) {
          if (err) { return next(err); }
          // Successful, so render
          res.render('phishing_list', { name: 'Phishing List', phishing_list: list_phishings });
      });

};

// Display detail page for a specific Phishing abuse.
exports.phishing_detail = function(req, res) {

    async.parallel({
        phishing: function(callback) {

            Phishing.findById(req.params.id)
              .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.phishing==null) { // No results.
            var err = new Error('Phishing abuse not found');
            err.status = 404;
            return err;
        }
        // Successful, so render.
        res.render('phishing_detail', { phishing: results.phishing } );
    });

};

// Display Phishing create form on GET.
exports.phishing_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Phishing create GET');
};

// Handle Phishing create on POST.
exports.phishing_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Phishing create POST');
};

// Display Phishing delete form on GET.
exports.phishing_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Phishing delete GET');
};

// Handle Phishing delete on POST.
exports.phishing_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Phishing delete POST');
};

// Display Phishing update form on GET.
exports.phishing_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Phishing update GET');
};

// Handle Phishing update on POST.
exports.phishing_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Phishing update POST');
};
