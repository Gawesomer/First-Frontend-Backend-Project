var express = require('express');
var router = express.Router();

// Require controller modules.
var phishing_controller = require('../controllers/phishingController');
var scamming_controller = require('../controllers/scammingController');
var sourceCodeExploits_controller = require('../controllers/sourceCodeExploitsController');
var other_controller = require('../controllers/otherController');

/// PHISHING ROUTES ///

// GET catalog home page.
router.get('/', phishing_controller.index);

// GET request for creating a Phishing. NOTE This must come before routes that display Phishing(uses id).
router.get('/phishing/create', phishing_controller.phishing_create_get);

// POST request for creating Phishing.
router.post('/phishing/create', phishing_controller.phishing_create_post);

// GET request to delete Phishing.
router.get('/phishing/:id/delete', phishing_controller.phishing_delete_get);

// POST request to delete Phishing.
router.post('/phishing/:id/delete', phishing_controller.phishing_delete_post);

// GET request to update Phishing.
router.get('/phishing/:id/update', phishing_controller.phishing_update_get);

// POST request to update Phishing.
router.post('/phishing/:id/update', phishing_controller.phishing_update_post);

// GET request for one Phishing.
router.get('/phishing/:id', phishing_controller.phishing_detail);

// GET request for list of all Phishing items.
router.get('/phishings', phishing_controller.phishing_list);

/// SCAMMING ROUTES ///

// GET request for creating Scamming. NOTE This must come before route for id (i.e. display scamming).
router.get('/scamming/create', scamming_controller.scamming_create_get);

// POST request for creating Scamming.
router.post('/scamming/create', scamming_controller.scamming_create_post);

// GET request to delete Scamming.
router.get('/scamming/:id/delete', scamming_controller.scamming_delete_get);

// POST request to delete Scamming.
router.post('/scamming/:id/delete', scamming_controller.scamming_delete_post);

// GET request to update Scamming.
router.get('/scamming/:id/update', scamming_controller.scamming_update_get);

// POST request to update Scamming.
router.post('/scamming/:id/update', scamming_controller.scamming_update_post);

// GET request for one Scamming.
router.get('/scamming/:id', scamming_controller.scamming_detail);

// GET request for list of all Scamming.
router.get('/scammings', scamming_controller.scamming_list);

/// SOURCECODEEXPLOITS ROUTES ///

// GET request for creating a SourceCodeExploits. NOTE This must come before route that displays SourceCodeExploits (uses id).
router.get('/sourceCodeExploit/create', sourceCodeExploits_controller.sourceCodeExploits_create_get);

//POST request for creating SourceCodeExploits.
router.post('/sourceCodeExploit/create', sourceCodeExploits_controller.sourceCodeExploits_create_post);

// GET request to delete SourceCodeExploits.
router.get('/sourceCodeExploit/:id/delete', sourceCodeExploits_controller.sourceCodeExploits_delete_get);

// POST request to delete SourceCodeExploits.
router.post('/sourceCodeExploit/:id/delete', sourceCodeExploits_controller.sourceCodeExploits_delete_post);

// GET request to update SourceCodeExploits.
router.get('/sourceCodeExploit/:id/update', sourceCodeExploits_controller.sourceCodeExploits_update_get);

// POST request to update SourceCodeExploits.
router.post('/sourceCodeExploit/:id/update', sourceCodeExploits_controller.sourceCodeExploits_update_post);

// GET request for one SourceCodeExploits.
router.get('/sourceCodeExploits/:id', sourceCodeExploits_controller.sourceCodeExploits_detail);

// GET request for list of all SourceCodeExploits.
router.get('/sourceCodeExploits', sourceCodeExploits_controller.sourceCodeExploits_list);

/// OTHER ROUTES ///

// GET request for creating Other. NOTE This must come before route for id (i.e. display other).
router.get('/other/create', other_controller.other_create_get);

// POST request for creating Other.
router.post('/other/create', other_controller.other_create_post);

// GET request to delete Other.
router.get('/other/:id/delete', other_controller.other_delete_get);

// POST request to delete Other.
router.post('/other/:id/delete', other_controller.other_delete_post);

// GET request to update Other.
router.get('/other/:id/update', other_controller.other_update_get);

// POST request to update Other.
router.post('/other/:id/update', other_controller.other_update_post);

// GET request for one Other.
router.get('/other/:id', other_controller.other_detail);

// GET request for list of all Other.
router.get('/others', other_controller.other_list);


module.exports = router;
