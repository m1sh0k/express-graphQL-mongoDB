const { User } = require('../db/models');
const { Message } = require('../db/models');
const { Room } = require('../db/models');

const resolvers = {
    Query: {
        getUsers: async () => await User.find({}),//.exec()
        getMessages: async (_,args) => await Message.find({user:args.user}),
        getRoom: async (_,args) => {
            console.log("getRoom name: ",args.name);
            console.log("getRoom room: ",await Room.find({name:args.name}));
            return await Room.find({name:args.name})
        },
    },
    // Mutation: {
    //     createUser: (parent, { id, name, email, age }, context, info) => {
    //         const newUser = { id, name, email, age };
    //         users.push(newUser);
    //         return newUser;
    //     },
    //     updateUser: (parent, { id, name, email, age }, context, info) => {
    //         let newUser = users.find(user => user.id === id);
    //         newUser.name = name;
    //         newUser.email = email;
    //         newUser.age = age;
    //         return newUser;
    //     },
    //     deleteUser: (parent, { id }, context, info) => {
    //         const userIndex = users.findIndex(user => user.id === id);
    //         if (userIndex === -1) throw new Error("User not found.");
    //         const deletedUsers = users.splice(userIndex, 1);
    //         return deletedUsers[0];
    //     }
    // }
};
module.exports = resolvers;