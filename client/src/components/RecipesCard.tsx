import React from 'react'

 type Iprobs = { 
     yemekler :any
   }
    


const RecipesCard:React.FC<Iprobs> = ( { yemekler } ) => {

    console.log(yemekler);
    

  return (
    <div>
        {
            yemekler.yemekler.map((yemek:any) => (
                <div>
                    <div>{yemek.title}</div>
                    <img src={yemek.cookerAvatar} alt=''></img>
                </div>
            ))
        }
    </div>
  )
}

export default RecipesCard
