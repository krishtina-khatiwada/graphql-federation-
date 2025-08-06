import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/schema";
import fetch from "node-fetch";
import { buildSubgraphSchema } from "@apollo/subgraph";
const apiurl= 'http://localhost:4040';
const resolvers={
    Query:{
        prices(){
            return fetch (`${apiurl}/prices`).then(res=> res.json())
        }
    }
}
const server = new ApolloServer({
    schema:buildSubgraphSchema([{typeDefs, resolvers}])
})
const port=4001;
server.listen(port)