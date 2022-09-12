import React from 'react'
import { gql , useQuery } from '@apollo/client'

interface Yemekler  {
    id:number,
    title:string,
    description:string,
    photo:string

}
interface YemeklerData {
    yemekler : Yemekler[];
}
const GET_COLLECTIONS = gql`
query getCollections {
  yemekler {
    id
    title
    description
    photo
  }
}
`


function Collections() {
    const { data } = useQuery<YemeklerData>(GET_COLLECTIONS);

    
    

  return (
    <div>
        {
            data && data.yemekler.map((yemek) => (
                <div key={yemek.id}>{yemek.title}
                <div>{yemek.photo}</div></div>
                
            ))
        }
      
    </div>
  )
}

export default Collections
