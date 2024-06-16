let mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/// Ecommerce --> database name
mongoose.connect('mongodb+srv://dbUsama:dbUsama123@cluster0.wxmid3z.mongodb.net/Ecommerce?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(connection) {
    console.log("Database connected");
});

let userSchema = new mongoose.Schema({
    name: {type: String},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
   

  // Middleware to hash password before saving to database
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    // Generate a salt and hash the password with 10 rounds
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  })



userSchema.methods.comparePassword = function (candidatePassword, cb) {
bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
    return cb(err);
    }
    cb(null, isMatch);
});
};


const UserModel = mongoose.model('Users', userSchema);
module.exports=UserModel