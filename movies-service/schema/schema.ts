import { gql } from "apollo-server";
const typeDefs= gql`
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
export default typeDefs;