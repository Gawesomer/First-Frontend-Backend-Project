var Other = require('../models/other');

var async = require('async');

// Display list of all Other abuses.
exports.other_list = function(req, res) {
    Other.find({}, 'name category')
      .exec(function (err, list_others) {
          if (err) { return next(err); }
          // Successful, so render
          res.render('other_list', { name: 'Other list', other_list: list_others });
      });
};

// Display detail page for a specific Other abuse.
exports.other_detail = function(req, res) {

    async.parallel({
        other: function(callback) {

            Other.findById(req.params.id)
              .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.other==null) { // No results.
            var err = new Error('Others not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('other_detail', { other: results.other } );
    });

};

// Display Other create form on GET.
exports.other_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Other create GET');
};

// Handle Other create on POST.
exports.other_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Other create POST');
};

// Display Other delete form on GET.
exports.other_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Other delete GET');
};

// Handle Other delete on POST.
exports.other_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Other delete POST');
};

// Display Other update form on GET.
exports.other_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Other update GET');
};

// Handle Other update on POST.
exports.other_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Other update POST');
};
