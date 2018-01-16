'use strict'
module.exports = function(app) {
  var vesselList = require('../controllers/vesselController');

  // todoList Routes
  app.route('/vessels')
    .get(vesselList.list_all_vessels)
    .post(vesselList.create_a_vessel)


  app.route('/vessel/:vesselId')
    .get(vesselList.get_vessel)
    .put(vesselList.update_vessel)
    .delete(vesselList.delete_vessel)

  app.route('vessel/mmsi/:mmsi')
    .get(vesselList.get_by_mmsi)
}
