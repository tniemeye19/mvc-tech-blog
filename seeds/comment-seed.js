const { Comment } = require('../models');

const commentsInfo = [
    {
        comment_text: "Spiderman, you need to grow up.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Mr. Stark, I mean Iron Man, but you gave me this awesome suit!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Starlord, what happened to Gamora?",
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: "Captain America, you don't look a day over 100!",
        user_id: 4,
        post_id: 3
    }
];

const seedTheComments = () => Comment.bulkCreate(commentsInfo);
module.exports = seedTheComments;