import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

const gateway= new ApolloGateway({
    supergraphSdl:new IntrospectAndCompose({
        subgraphs:[{
        name:"movies", url:"http://localhost:4000"
    },
    {
        name:"prices", url:"http://localhost:4000"
    }]
})
});
const server= new ApolloServer({
    gateway,
})
await startStandaloneServer(server, {listen:{port:5000}})
