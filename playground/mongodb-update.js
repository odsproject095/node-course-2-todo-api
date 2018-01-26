// const MongoClient = require('mongodb').MongoClient;


// ES6 Destructuring
// var user = {name: 'Dayat', age: 25};
// var {name} = user;
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a6a65d13d1f94fb7a5e0993')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  //...Challenge
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a69a50bb1f6000eb4dac6de')
  }, {
    $set: {
      name: 'Dayat'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
