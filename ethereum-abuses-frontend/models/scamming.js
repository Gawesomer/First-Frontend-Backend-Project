var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScammingSchema = new Schema(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    URL: {type: String, required: true},
    source: {type: String, required: true},
    blockChainTech: {type: String, required: true},
  }
);

// Virtual for author's URL
ScammingSchema
.virtual('url')
.get(function () {
  return '/catalog/scamming/' + this._id;
});

//Export model
module.exports = mongoose.model('Scamming', ScammingSchema);
