import React from 'react';
import verified from '../assets/verified.png';
type Iprobs = {
  yemekler: any;
};

const ChiefsCard: React.FC<Iprobs> = ({ yemekler }) => {
  return (
    <div className='container chiefs'>
      {yemekler.yemekler.map((yemek: any) => (
        <div key={yemek.id} className="chiefs__card">
          <img className="chiefs__card--img" src={yemek.cookerAvatar} alt="Sef Gorsel" />
          <div className='chiefs__card--info'>
            <div className="chiefs__card--info--name">{yemek.cooker}<img alt='' src={verified} /></div>
            <div className="chiefs__card--info--job">{yemek.cookerJob}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChiefsCard;
