import appstore from '../assets/appstrore.svg';
import android from '../assets/android.svg';
import huawei from '../assets/huawei.svg';
import Logo from './Logo';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footertop">
          <div className="footertop__parts">
            <div className="footertop__parts--title">KISIK ATEŞ</div>
            <ul>
              <li>Biz Kimiz?</li>
              <li>Bize Ulaşın</li>
              <li>Gizlilik Sözleşmesi</li>
              <li>K.V.K.K</li>
            </ul>
          </div>
          <div className="footertop__parts">
            <div className="footertop__parts--title">KATEGORİLER</div>
            <ul>
              <li>Lezzet Avcıları</li>
              <li>Tarifler</li>
              <li>Şef Usulü</li>
              <li>Blog</li>
              <li>Duydunuz mu?</li>
            </ul>
          </div>
          <div className="footertop__parts">
            <div className="footertop__parts--title">TARİFLER</div>
            <ul>
              <li>Tatlı</li>
              <li>Pasta</li>
              <li>Çorba</li>
              <li>Makarna</li>
              <li>Salata</li>
            </ul>
          </div>
          <div className="footertop__parts">
            <div className="footertop__parts--title">ŞEF USULÜ</div>
            <ul>
              <li>Soslar</li>
              <li>Türk Mutfağı</li>
              <li>Temel Pişirme Teknikleri</li>
              <li>Tabak Süsleme Sanatı</li>
              <li>Kemik ve Sebze Suları</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="footermiddle">
          <div className="mobilplatform__links">
            <img src={appstore} alt="aaa" />
            <img src={android} alt="aaa" />
            <img src={huawei} alt="aaa" />
          </div>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__bottom--logo">
            <Logo />
          </div>
          <div className="footer__bottom--text">
            Kısık Ateş ile gastronomi kültürünüzü eğitimle harmanlayarak şef usulü bilgilerden ve
            blog yazılarından faydalanabilir, lezzet avcıları ile Anadolu’nun eşsiz lezzet
            noktalarını keşfedebilirsiniz. Aynı zamanda Kısık Ateş’te kendi tarif arşivinizi
            oluşturabilir, uzman şeflerin onayını alarak ana sayfada yerinizi alabilirsiniz!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
