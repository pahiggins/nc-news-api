const api = require('express').Router();
const topics = require('./topics');
const articles = require('./articles');
const users = require('./users');
const getApiDesc = require('../utilities');

api.use('/topics', topics);
api.use('/articles', articles);
api.use('/users', users);
api.use('/', getApiDesc);

module.exports = api;
