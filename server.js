const { ApolloServer, gql } = require('apollo-server');

const exampleResponse = [
    {
        id: 2,
        username: "test_user9000",
        age: 18,
    },
    {
        id: 3,
        username: "test_user9000",
        age: null,
    },
];

// Type Definitions go here
const typeDefs = gql`
    type Query {
        getUsers: [User!]
    }

    type User {
        id: Int!
        username: String!
        age: Int
    }
`;


// Resolvers go here
const resolvers = {
    Query: {
        getUsers: () => exampleResponse
    },
};


// Create the ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers });

// Launch the server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
