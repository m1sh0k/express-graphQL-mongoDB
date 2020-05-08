const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./middleware/graphQL/resolvers');
const fs = require('fs');
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/middleware/graphQL/schema.graphql'), 'utf8')}`;

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);