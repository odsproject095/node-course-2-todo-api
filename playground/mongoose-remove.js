const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// // Todo.remove({})
// Todo.remove({}).then((result) => {
//   console.log(result)
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5a6c36c13d1f94fb7a5e38a0'}).then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});

// Todo.findByIdAndRemove
// Todo.findByIdAndRemove('5a6c36c13d1f94fb7a5e38a0').then((todo) => {
//   console.log(JSON.stringify(todo, undefined, 2));
// });
