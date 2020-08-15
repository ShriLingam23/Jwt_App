const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

// bcrypt is a password hashing function based on the Blowfish cipher.

const Admin = new Schema(
    {
        login: { type: String, required: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        access: { type: [String], required: true },
        // array containing the access the admin has in the application, for instance, access to user and clients form.
    },
    { timestamps: true },
)

// Mongoose just helps us to create this with its middlewares, 
// in our case, we'll use a middleware before inserting the register on the database.
Admin.pre('save', function(next) {
    const admin = this

    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            res.json({ success: false, msg: err.message })
        } else {
            bcrypt.hash(admin.password, salt, function(err, hashed) {
                if (err) {
                    return next(err)
                }
                admin.password = hashed
                next()
            })
        }
    })
})

module.exports = mongoose.model('admins', Admin)