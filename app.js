const Koa = require('koa');
const Router = require('@koa/router');

const cors = require('@koa/cors');
const { koaBody } = require('koa-body');

const addTask = require('./addTask');

const router = new Router();
router.post('/api/addTask', addTask);


const app = new Koa();
app.use(cors());
app.use(koaBody());
app.use(router.routes());

module.exports = app.callback();