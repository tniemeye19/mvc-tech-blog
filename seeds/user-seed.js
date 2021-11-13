const { User } = require("../models");

const usersInfo = [
    {
        username: "IronMan",
        email: "ironman@gmail.com",
        password: "iamironman"
    },
    {
        username: "Spiderman",
        email: "spiderman@gmail.com",
        password: "spiderman"
    },
    {
        username: "CaptainAmerica",
        email: "captainamerica@gmail.com",
        password: "captainamerica"
    },
    {
        username: "Starlord",
        email: "starlord@gmail.com",
        password: "starlord"
    }
];

const seedTheUsers = () => User.bulkCreate(usersInfo);
module.exports = seedTheUsers;