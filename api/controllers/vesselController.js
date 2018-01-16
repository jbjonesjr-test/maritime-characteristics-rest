'use strict'

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
const shortid = require('shortid')

const vesselTable = 'vessels'
exports.list_all_vessels = function (req, res) {
  let vessels = db.get(vesselTable)
  if (!vessels.value()) {
    res.status(500).send('Invalid table, ' + vesselTable)
  } else {
    res.json(vessels)
  }
}

exports.create_a_vessel = function (req, res) {
  res.json(
    db
    .get(vesselTable)
    .push({
      id: shortid.generate(),
      vesselName: '',
      mmsi: req.body.mmsi
    })
    .write().value())
}

exports.get_vessel = function (req, res) {
  let vessels = db.get(vesselTable)
  if (!vessels.value()) {
    res.status(500).send('Invalid table, ' + vesselTable)
  } else {
    let vessel = vessels.find({
      id: req.params.vesselId
    })
    if (!vessel.value()) {
      res.status(404).send(req.params.id + 'not found')
    } else {
      res.json(vessel.value())
    }
  }
}

exports.update_vessel = function (req, res) {
  let vessels = db.get(vesselTable)
  if (!vessels.value()) {
    res.status(500).send('Invalid table, ' + vesselTable)
  } else {
    vessels.find({ id: req.body.id })
      .assign(req.body)
      .write().value()
  }
}

exports.delete_vessel = function (req, res) {
  let vessels = db.get(vesselTable)
  if (!vessels.value()) {
    res.status(500).send('Invalid table, ' + vesselTable)
  } else {
    vessels.remove({id: req.body.id})
      .write()
    res.status(200)
  }
}

exports.get_by_mmsi = function (req, res) {
  let vessels = db.get(vesselTable)
  if (!vessels.value()) {
    res.status(500).send('Invalid table, ' + vesselTable)
  } else {
    let vessel = vessels.find({
      id: req.params.id
    })
    if (!vessel.value()) {
      res.status(404).send(req.params.id + 'not found')
    } else {
      res.json(vessel.value())
    }
  }
}
