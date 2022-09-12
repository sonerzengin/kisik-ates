import React from 'react'
import intropng from '../assets/Intro.png'

function Intro() {
  return (
    <div className='intro'>
      <div className="intro__title">Dijital <span>Gastronomi</span> Platformu</div>
      <div className="intro__subtitle">Ünlü şeflerden tarifler, Türkiye’nin eşsiz lezzet noktaları, kariyerinize yön verecek blog yazıları ve daha fazlası için hemen göz atın!</div>
      <img src={intropng} className="intro__img" alt='Dijital Gastronomi Platformu' />
    </div>
  )
}

export default Intro
