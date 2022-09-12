const { gql } = require("apollo-server");

const typeDefs = gql`

    type Query {
        yemekler: [Yemekler]
        secimler: [Secimler]
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
        description: String
        photo:String!
    }
`

module.exports = typeDefs;