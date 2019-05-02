const { ApolloServer, gql } = require('apollo-server');

import '@babel/polyfill';
import { SocialApi } from './datasource';

// Type Definitions go here
const typeDefs = gql`
    type Query {
        getPosts: PostCollection
    }

    type Mutation {
        createUser(email: String!, username: String!, full_name: String): User!
    }

    type PostCollection {
        posts: [Post!]!
    }

    type Post {
        id: Int!
        title: String!
        slug: String!
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
        getPosts: (root, args, { dataSources }) => dataSources.socialApi.getPosts(),
    },
    Mutation: {
        createUser: async (parent, args, {dataSources}) => {
            return await dataSources.socialApi.createUser(args);
        }
    }
};

// Create the ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => ({
        socialApi: new SocialApi()
    })
});

// Launch the server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
