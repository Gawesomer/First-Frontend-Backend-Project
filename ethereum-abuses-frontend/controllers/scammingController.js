var Scamming = require('../models/scamming');

var async = require('async');

// Display list of all Scamming abuses.
exports.scamming_list = function(req, res) {
    Scamming.find({}, 'name category')
      .exec(function (err, list_scammings) {
          if (err) { return next(err); }
          // Successful, so render
          res.render('scamming_list', { name: 'Scamming list', scamming_list: list_scammings });
      });
};

// Display detail page for a specific Scamming abuse.
exports.scamming_detail = function(req, res) {

    async.parallel({
        scamming: function(callback) {

            Scamming.findById(req.params.id)
              .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.scamming==null) { // No results.
            var err = new Error('Scams not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('scamming_detail', { scamming: results.scamming } );
    });

};

// Display Scamming create form on GET.
exports.scamming_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Scamming create GET');
};

// Handle Scamming create on POST.
exports.scamming_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Scamming create POST');
};

// Display Scamming delete form on GET.
exports.scamming_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Scamming delete GET');
};

// Handle Scamming delete on POST.
exports.scamming_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Scamming delete POST');
};

// Display Scamming update form on GET.
exports.scamming_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Scamming update GET');
};

// Handle Scamming update on POST.
exports.scamming_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Scamming update POST');
};
