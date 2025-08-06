"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema/schema"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const subgraph_1 = require("@apollo/subgraph");
const apiurl = 'http://localhost:3030';
const resolvers = {
    Query: {
        movies() {
            return (0, node_fetch_1.default)(`${apiurl}/movies`).then(res => res.json());
        }
    }
};
const server = new apollo_server_1.ApolloServer({
    schema: (0, subgraph_1.buildSubgraphSchema)([{ typeDefs: schema_1.default, resolvers }])
});
const port = 4000;
server.listen(port);
