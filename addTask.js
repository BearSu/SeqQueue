let addTask = require('./seqQueue');

let addTaskApi = async (ctx) => {
  const postData = { action, value } = ctx.request.body;
  let result = null;
  await new Promise((resolve, reject) => addTask(action, value, resolve, reject))
    .then(response => result = response);
  ctx.body = result;
}

module.exports = addTaskApi;

