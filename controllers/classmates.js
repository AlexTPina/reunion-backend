const knex = require('../db/knex')


exports.getAllCustomers = function (req, res) {
    knex('classmates')
        .then(classmates => res.json(classmates))
}

exports.getOneCustomer = function (req, res) {
    knex('classmates')
        .where('id', req.params.id)
        .then(classmates => res.json(classmates))
}

exports.addOneCustomer = function (req, res) {
    knex('classmates')
        .insert(req.body)
        .returning('*')
    .then(newClassmate => res.json(newClassmate))
}

exports.updateOneCustomer = function (req, res) {
    knex('classmates')
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .where('id', req.params.id)
        .returning('*')
        .then(updatedClassmate => res.json(updatedClassmate))
}

exports.removeOneCustomer = function (req, res) {
    knex('classmates')
        .del()
        .where('id, req.params.id')
        .returning('*')
        .then(newClassmate => res.json(newClassmate))
}
