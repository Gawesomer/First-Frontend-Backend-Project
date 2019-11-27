var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PhishingSchema = new Schema(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    URL: {type: String, required: true},
    source: {type: String, required: true},
    blockChainTech: {type: String, required: true},
    accountAddress: {type: String, required: true},
    profit: {type: Number, required: true},
  }
);

// Virtual for author's URL
PhishingSchema
.virtual('url')
.get(function () {
  return '/catalog/phishing/' + this._id;
});

//Export model
module.exports = mongoose.model('Phishing', PhishingSchema);
