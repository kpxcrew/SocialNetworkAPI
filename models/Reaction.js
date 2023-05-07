const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId ()
    },

    username: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, 
    },
    createdAt: {
        type: Date,
        default: Date.now,

    }

  },
  {
    toJSON: {
      virtuals: true,
    },
   id: false,
   _id: false,
  }
);


module.exports = reactionSchema;