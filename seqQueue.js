const axios = require('axios');

let seqQueue = [];

let moveNext = async () => {
  const task = seqQueue.pop();
  if (!task) return;
  const { action, value, resolve, reject } = task;
  const response = await axios.post(action, value);
  const body = response.data;
  resolve(body);
  moveNext();
}

let addTask = (action, value, resolve, reject) => {
  let isEnd = !seqQueue.length;
  seqQueue.unshift({ action, value, resolve, reject });
  isEnd && moveNext()
}

module.exports = addTask;