import React from 'react';
import orangelogo from '../assets/orange-logo_img.jpg';
import appstore from '../assets/appstrore.svg';
import android from '../assets/android.svg';
import huawei from '../assets/huawei.svg';
import mobil from '../assets/mobil.png';

function Mobil() {
  return (
    <div className="mobil">
      <div className="mobilplatform">
        <div className="container">
          <div className="mobilplatform__logo">
            <img src={orangelogo} alt="" />
          </div>
          <div className="mobilplatform__title">Kısık Ateş Mobil Platformlarda</div>
          <div className="mobilplatform__text">
            Yüzlerce tarife ve şef usulü pratik bilgilere, ünlü şeflere, eşsiz lezzet avcılarına
            mobil cihazlar üzerinden ulaşabilirsin.
          </div>
          <div className="mobilplatform__links">
            <img src={appstore} alt="aaa" />
            <img src={android} alt="aaa" />
            <img src={huawei} alt="aaa" />
          </div>
        </div>
      </div>
      <div className="mobilgorsel">
        <img src={mobil} alt="" />
      </div>
    </div>
  );
}

export default Mobil;
