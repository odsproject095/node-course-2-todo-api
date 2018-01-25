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

  //deleteMany
  //deleteOne
  //findOneAndDelete

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  //..Challenge 1
  // db.collection('Users').deleteMany({name: 'Dayat'}).then((result) => {
  //   console.log(result);
  // });

  //..Challenge 2
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a6935e67ef38311646fc304')
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
