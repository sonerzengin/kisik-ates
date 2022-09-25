import React from 'react'
import intropng from '../assets/Intro.png'
import intropng_mobil from '../assets/intro_mobil.png'
function Intro() {
  return (
    <div className='intro'>
      <div className="intro__title">Dijital <span>Gastronomi</span> Platformu</div>
      <div className="intro__subtitle">Ünlü şeflerden tarifler, Türkiye’nin eşsiz lezzet noktaları, kariyerinize yön verecek blog yazıları ve daha fazlası için hemen göz atın!</div>
      <img src={intropng} className="intro__img d-none d-md-block " alt='Dijital Gastronomi Platformu' />
      <img src={intropng_mobil} className="intro__img d-md-none" alt='Dijital Gastronomi Platformu' />
    </div>
  )
}

export default Intro
