const { gql } = require("apollo-server");

const typeDefs = gql`

    type Query {
        yemekler(id: ID!): [Yemekler]
        secimler(id: ID!): [Secimler]
    }

    #PizzaTarifleri,EnginarTarifleri
    type Secimler {
        id: ID
        title: String!
        description: String!
        photo:String!
    }

    #SomonFumeliPizza,PizzaWaffle
    type Yemekler {
        id: ID
        title: String
        cookingTime: String
        peopleFor: String
        cooker: String
        cookerAvatar: String
        cookerJob: String
        date: String
        image: String

    }
`

module.exports = typeDefs;