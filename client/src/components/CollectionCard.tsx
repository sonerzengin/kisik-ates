import React from 'react'

type Iprobs = { 
  data :any
}
  
const CollectionCard:React.FC<Iprobs> = ( { data } ) => {

  
  
  return (
    <div className='container collectioncard'>
            {
              data.secimler.map((secim:any) => (
                <div key={secim.id} className='collectioncard__card'>
                  <img src={secim.photo} alt='collections' max-width={312} height='auto' />
                  <div className='collectioncard__card--title'>{secim.title}</div>
                  <div className='collectioncard__card--description'>{secim.description}</div>
                </div>
              ))
            }
    </div>
  )
}

export default CollectionCard
