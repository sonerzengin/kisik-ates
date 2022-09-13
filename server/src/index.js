const { ApolloServer } = require('apollo-server');
const { gql } = require("apollo-server");

const typeDefs = gql`

    type Query {
        yemekler(id: ID): [Yemekler]
        secimler(id: ID): [Secimler]
    }

    #PizzaTarifleri,EnginarTarifleri
    type Secimler {
        ID: Int
        title: String!
        description: String!
        photo:String!
    }

    #SomonFumeliPizza,PizzaWaffle
    type Yemekler {
        ID: Int
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

const yemekler = [
    {
        id: 1001,
        title: "Sarımsaklı Ekmek",
        cookingTime: "40 Dakika",
        peopleFor: "2-4 Kişilik",
        cooker: "Vildan Tünay",
        cookerAvatar: "https://cdn.kisikates.com.tr/image-cache/cache/user_avatar_small/https---cdn.kisikates.com.tr/user-avatar/afde302d5939a693f40baa088f31a98a0144f825.jpeg",
        cookerJob: "Pasta Şefi & Yemek Fotoğrafçısı & Dijital İçerik Üretici",
        date: "10.08.2022" ,
        image: "https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_medium/https---cdn.kisikates.com.tr/recipe-media/0a864f7b71e71ce05923b9b98c070c6a2da0578e.jpeg"
    },
    {
        id: 1002,
        title: "Panzanella",
        cookingTime: "25 Dakika",
        peopleFor: "2 Kişilik",
        cooker: "Alper Tuğrul Ünlütürk",
        cookerAvatar: "https://cdn.kisikates.com.tr/image-cache/cache/user_avatar_small/https---cdn.kisikates.com.tr/user-avatar/a9bc520f6a92a26ab05e5426a4abeff18891a9c9.png",
        cookerJob: "Zennup 1844 - Mutfak Koordinatörü",
        date: "31.07.2022",
        image: "https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_medium/https---cdn.kisikates.com.tr/recipe-media/a1cc4ee1e4ce8fc5f123fadadb4f5e633325e1a4.jpeg"
    }
]

const resolvers = {
    Query : {
        yemekler() {
            return yemekler
        } ,
        secimler() {
            return secimler
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen().then(() =>{
    console.log(`Server is running on port 4000,Query at : https://studio.apollographql.com/dev`);
})