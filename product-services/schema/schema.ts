import { gql } from "apollo-server";
const typeDefs= gql`
type price {
    id:ID!
    referenceEntityId:number
    entityPrice: entityPrice
    serviceCharges:serviceCharges
    type entityPrice{
        amount:number
        currency:string
    }
    type serviceCharges{
        stream:entityPrice
        support:entityPrice
    }
type Query{
        prices:[price]
    }
}
`;
export default typeDefs;
