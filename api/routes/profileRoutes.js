'use strict';
module.exports = function(app) {
  var profileList = require('../controllers/profileController');
  
  app.route('/profiles')
    .get(profileList.list_all_profiles)
    .post(profileList.create_a_profile);

  app.route('/profiles/:profileId')
    .get(profileList.read_a_profile)
    .put(profileList.update_a_profile)
    .delete(profileList.delete_a_profile);
};