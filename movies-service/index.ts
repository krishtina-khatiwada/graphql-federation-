import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/schema";
import fetch from "node-fetch";
import { buildSubgraphSchema } from "@apollo/subgraph";
const apiurl= 'http://localhost:3030';
const resolvers={
    Query:{
        movies(){
            return fetch (`${apiurl}/movies`).then(res=> res.json())
        }
    }
}
const server =new ApolloServer({
    schema:buildSubgraphSchema([{typeDefs, resolvers}])
})
const port=4000;
server.listen(port)