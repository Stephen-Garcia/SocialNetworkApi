const {
    Schema,
    model
} = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => {
            return moment(createdAtVal).format('YYYY-MM-DD hh:mm a')
        }
    },
}, {
    toJSON: {
        getters: true,
    },
    id: false,
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    username: {
        type: Schema.Types.String,
        required: true,
        ref: "User",
    },
    reactions: [reactionSchema],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => {
            return moment(createdAtVal).format('YYYY-MM-DD hh:mm a')
        }
    },
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;