var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OtherSchema = new Schema(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    source: {type: String, required: true},
    victim: {type: String, required: true},
    blockChainTech: {type: String, required: true},
    realOrTheory: {type: String, required: true},
  }
);

OtherSchema
.virtual('url')
.get(function () {
  return '/catalog/other/' + this._id;
});

//Export model
module.exports = mongoose.model('Other', OtherSchema);
