var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
});

// var newUser = new User({
//   email: 'oppadayat095@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });

module.exports = {User};
