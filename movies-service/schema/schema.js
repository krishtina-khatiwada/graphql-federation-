"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
type movie @key(fields:"id"){
    id:ID!
    name:String!
    duration:Float
    genre:String
    views:Float
}
type Query{
    movies:[movie]
}
`;
exports.default = typeDefs;
