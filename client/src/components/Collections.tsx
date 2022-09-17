import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CollectionCard from './CollectionCard';
import RecipesCard from './RecipesCard';

import { Button } from '@chakra-ui/react';
import ChiefsCard from './ChiefsCard';

interface Secimler {
  id: number;
  title: string;
  description :string;
  photo: string
}
type Yemekler = {
  ID: Number
  title: String
  cookingTime: String
  peopleFor: String
  cooker: String
  cookerAvatar: String
  cookerJob: String
  date: String
  image: String

}

interface SecimlerData {
  secimler: Secimler[];
  
}
interface YemeklerData {
  yemekler: Yemekler[],
}

const GET_COLLECTIONS = gql`
  query getCollections {
    secimler {
      id
      title
      description
      photo
    }
    yemekler {
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
  const { loading, error, data } = useQuery<SecimlerData>(GET_COLLECTIONS, { pollInterval: 500 });

  if (loading) return null;
  if (error) return null;

 

  return <div className='collections'>
          <div className='collections__topTitle'>KOLEKSİYONLAR</div>
          <div className='collections__title'>Kısık Ateş’ten Özel Seçimler</div>
          <CollectionCard data={data}  />
          <Button>Tüm Koleksiyonları Görüntüle</Button>
        </div>;
}

export default Collections;

// RECIPES EXPORT

export function Recipes() {
  const { loading, error, data } = useQuery<YemeklerData>(GET_COLLECTIONS, { pollInterval: 500 });

  if (loading) return null;
  if (error) return null;

 

  return <div className='collections'>
          <div className='collections__topTitle'>Tarifler</div>
          <div className='collections__title'>Yemek Tarifleri</div>
          <RecipesCard yemekler={data}  />
        </div>;
}

//CHIEFS EXPORT

export function Chiefs() {
  const { loading, error, data } = useQuery<YemeklerData>(GET_COLLECTIONS, { pollInterval: 500 });

  if (loading) return null;
  if (error) return null;

 

  return <div className='collections'>
          <div className='collections__topTitle'>UZMANLAR</div>
          <div className='collections__title'>Şefler ile İletişime Geç</div>
          <ChiefsCard yemekler={data}  />
        </div>;
}


