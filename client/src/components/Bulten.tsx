import React from 'react';

function Bulten() {
  return (
    <div className="bulten">
      <div className="container">
        <div className="bultencontent">
          <div className="bulten__left">
            <div className="bulten__left--title">
              Yaratıcı tariflerinizi paylaşabileceğinizi biliyor muydunuz?
            </div>
            <div className="bulten__left--text">
              Kısık Ateş’te kendi tarif arşivinizi oluşturabilir, uzman şeflerin onayını alarak ana
              sayfada yerinizi alabilirsiniz!
            </div>
          </div>
          <div className="bulten__right">
            <a href="#">Hemen Kayıt Ol</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bulten;
