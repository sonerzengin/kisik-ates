const { ApolloServer } = require('apollo-server');
const { gql } = require("apollo-server");

const typeDefs = gql`

    type Query {
        yemekler: [Yemekler],
        secimler: [Secimler]
    }

    #PizzaTarifleri,EnginarTarifleri
    type Secimler {
        id: Int
        title: String
        description: String
        photo: String
    }

    #SomonFumeliPizza,PizzaWaffle
    type Yemekler {
        id: Int
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

const secimler = [
    {
        id: 2001,
        title: "PİZZA TARİFLERİ",
        description: "İtalyan mutfağının gözde lezzetleri arasında yer alan pizza tarifleri ile sevdiklerinizi şımartmak istemez misiniz? Tadına doyum olmayan pizzaların her çeşidi burada! 🍕 Evde pizza tarifi ile bir şefin elinden çıkmışçasına özel bir pizzaya ulaşmak artık çok kolay. Doğru pizza hamuru tarifini öğrendikten sonra pizzanın iç kısmını istediğiniz malzemeyle donatabilirsiniz. En leziz ve kolay pizza tariflerimizi inceleyin, deneyin ve farkı siz de görün! 😋🤌 Peki, sizin favori pizzanız hangisi? 😊",
        photo: "https://cdn.kisikates.com.tr/image-cache/cache/collection_image_small/https---cdn.kisikates.com.tr/collection-image/5464bdcde60472cebf9d7749986ccdf3cca98e54.jpg"
    },
    {
        id: 2002 ,
        title: "ENGİNAR YEMEKLERİ",
        description: "Faydası saymakla bitmeyen enginarla ne yapabilirim? diyenlere özel harika önerilerle karşınızdayız. Enginar sevenlere özel nefis tarifler Kısık Ateş’te! Farklı tatlar arayanlara özel, sıra dışı enginar tariflerini sizler için pişirdik. Bu yüzden yemek yapmaya başlamadan önce lezzet garantili değişik enginar tariflerimize göz atmayı unutmayın! 😉👨‍🍳👩‍🍳",
        photo: "https://cdn.kisikates.com.tr/image-cache/cache/collection_image_small/https---cdn.kisikates.com.tr/collection-image/bc69cea1166ffee69ed92d64dcd7b8654d68bbc0.jpg"
    },
    {
        id: 2003,
        title: "DONDURMA TARİFLERİ",
        description: "Çeşit çeşit pratik dondurma yapmak hiç bu kadar kolay olmamıştı! Kolay ve leziz dondurma tarifleri: Evde pratik dondurma tarifi nasıl yapılır? Dondurma yapmanın püf noktaları nelerdir? Sadece birkaç malzeme ile hazırlanabilen, tamamen katkısız onlarca dondurma tarifi sizleri bekliyor…",
        photo: "https://cdn.kisikates.com.tr/image-cache/cache/collection_image_small/https---cdn.kisikates.com.tr/collection-image/6a4f696692c25905b78769df1690a7eb2ea12deb.jpg"
    },
    {
        id: 2004,
        title: "HAMUR İŞİ TARİFLERİ",
        description: "Yüksek lezzete sahip hamur işi lezzetleri keşfetmeye hazır mısınız? Geleneksel ve modern hamur işi tarifleri nelerdir? Farklı, leziz ve kolay onlarca hamur işi tarifi sizlerle… Aradığınız her çeşit hamur işi tariflerinin yer aldığı lezzetli koleksiyonumuza bir tıkla ulaşabilirsiniz.",
        photo: "https://cdn.kisikates.com.tr/image-cache/cache/collection_image_small/https---cdn.kisikates.com.tr/collection-image/ae8c2deb63d63bd6a1683fe74d3cd900a311c437.jpg"
    },
    {
        id: 2005,
        title: "YAZ SALATALARI",
        description: "Türk ve dünya mutfağına ait değişik salata tarifleri ile yeni bir lezzet yolculuğuna hazır mısınız? Yaz aylarına özgü ferahlatıcı salata çeşitleri nelerdir? Güzel salata yapmanın incelikleri nelerdir? Birbirinden keyifli, pratik, leziz salata tarifleri için hemen kategorimizi inceleyin, keşfe başlayın.",
        photo: "https://cdn.kisikates.com.tr/image-cache/cache/collection_image_small/https---cdn.kisikates.com.tr/collection-image/bf867d43877470e27d8e2e9202162a18ac1fc65c.jpg"
    },
    {
        id: 2006,
        title: "KISIK ATEŞ’TE YENİLİK! 🌟 SİZLERDEN GELEN EN ÇARPICI",
        description: "Kısık Ateş editöründen onaylı kullanıcı içeriklerine ana sayfamızda yer vermeye devam ediyoruz! Siz de ‘bu işte bi şeflik var’ diyorsanız yapmanız gereken ayrıntılı reçetelerinizi en güzel fotoğrafıyla kendi profilinizde oluşturmak ve uzman şeflerin beğenisine sunmak! 😍",
        photo: "https://cdn.kisikates.com.tr/image-cache/cache/collection_image_small/https---cdn.kisikates.com.tr/collection-image/bfff302579aef1843180e0b47d9f98017c380f2f.jpg"
    }
    
]

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
        },
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