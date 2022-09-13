import React from 'react'
import { gql , useQuery } from '@apollo/client'

interface Yemekler  {
  id: number
  title: string
  cookingTime: string
  peopleFor: string
  cooker: string
  cookerAvatar: string
  cookerJob: string
  date: string
  image: string

}
interface YemeklerData {
    yemekler : Yemekler[];
}
const GET_COLLECTIONS = gql`
  query getCollections($yemeklerId: ID) {
  yemekler(id: $yemeklerId) {
    id
    title
    cookingTime
    peopleFor
    cooker
    cookerAvatar
    cookerJob
    date
    image
  }
}
`;


function Collections() {
    const { loading,error,data } = useQuery<YemeklerData>(GET_COLLECTIONS,{pollInterval:500});

    if (loading) return null;
    if(error) return null
    
  
  
  return (
    <div>
        {
            data?.yemekler.map((yemek) => (
              <div key={yemek.id}>
                <h1>{yemek.title}</h1>
                <img src={yemek.image} alt="oooo" />
                <img src={yemek.cookerAvatar} alt="" />
              </div>
            ))
        }
      
    </div>
  )
}

export default Collections
