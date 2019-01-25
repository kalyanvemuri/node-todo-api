const mongoose = require('mongoose');

var useSchema = {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
};
var User = mongoose.model('User', useSchema);

module.exports = User;