const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query : () =>({
        yemekler : () => [...new Array(6)],
        secimler : () => [...new Array(6)]
    }),
    Yemekler: () => ({
        id: () => 1001,
        title: () => "Mantarli Pizza",
        description: () => "Mantarli Pizza tarifi",
        photo: () => "https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_medium/https---cdn.kisikates.com.tr/recipe-media/d0cf3c127c63bbffc3e679c9be3998a5fc2b6cd8.jpeg"
    })
    

}

const server = new ApolloServer({
    typeDefs,
    mocks
})


server.listen().then(() =>{
    console.log(`Server is running on port 4000,Query at : https://studio.apollographql.com/dev`);
})