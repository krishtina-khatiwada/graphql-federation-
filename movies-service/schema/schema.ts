import { gql } from "apollo-server";
const typeDefs= gql`
type movie @key(fields:"id"){
    id:ID!
    name:String!
    duration:number
    genre:String
    views:number
}
type Query{
    movies:[movie]
}
`;
export default typeDefs;