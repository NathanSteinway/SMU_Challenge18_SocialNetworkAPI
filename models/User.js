const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username:{
            type: String,
            unique: true,
            required: 'Please enter a username.',
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: 'Please enter an email address.',
            match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/],
            trim: true
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]

    }
)

UserSchema.virtual('friendsCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;