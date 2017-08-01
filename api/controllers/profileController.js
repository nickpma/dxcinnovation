'use strict';

var mongoose = require('mongoose'),
  profile = mongoose.model('profiles');

exports.list_all_profiles = function(req, res) {
  profile.find({}, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

exports.create_a_profile = function(req, res) {
  var new_profile = new profile(req.body);
  new_profile.save(function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

exports.read_a_profile = function(req, res) {
  profile.findById(req.params.profileId, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

exports.update_a_profile = function(req, res) {
  profile.findOneAndUpdate({_id: req.params.profileId}, req.body, {new: true}, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

exports.delete_a_profile = function(req, res) {
  profile.remove({
    _id: req.params.profileId
  }, function(err, profile) {
    if (err)
      res.send(err);
    res.json({ message: 'profile successfully deleted' });
  });
};