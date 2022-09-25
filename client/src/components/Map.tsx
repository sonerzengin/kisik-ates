import { Button } from '@chakra-ui/react'
import React from 'react'

function Map() {
  return (
    <div className="container">
        <div className='map__section'>
        <div className="map__section--info">
            <h1>Gittiğiniz Her Yerde Türkiye’nin Lezzetleri Cebinizde</h1>
            <p>Lezzet avcılarımız Türkiye’nin dört bir köşesini gezerek en lezzetli lokantalarını sizler için seçiyor ve Kısık Ateş mobil uygulaması ile kolay ulaşmanızı sağlıyor.</p>
            <a href='#'>Lezzet Avcılarını Keşfet</a>
        </div>
        <div className="map__section--img d-sm-none">
            <img src="https://www.kisikates.com.tr/5432fd652ec385f4b347c7f178a85671.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Map
