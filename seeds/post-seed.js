const { Post } = require('../models');

const postsInfo = [
    {
        title: "Iron Man Post",
        post_content: "I am the best Avenger.",
        user_id: 1
    },
    {
        title: "Spiderman Post",
        post_content: "I am the best Avenger.",
        user_id: 2
    },
    {
        title: "Captain American Post",
        post_content: "I am the best Avenger.",
        user_id: 3,
    },
    {
        title: "Starlord Post",
        post_content: "I am the best Avenger.",
        user_id: 4
    }
];

const seedThePosts = () => Post.bulkCreate(postsInfo);
module.exports = seedThePosts;