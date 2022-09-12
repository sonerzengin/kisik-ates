import React from 'react';
import { useEffect,useState } from 'react';

function Navbar() {
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

   
  return (
    <div className={offset>75 ? "navbar sticky" : "navbar"}>
      <div className="container">
      
        <div><i className="fa-solid fa-utensils"></i>Lezzet Avcıları</div>|
        <div><i className="fa-regular fa-pen-to-square"></i>Tarifler</div>|
        <div><i className="fa-solid fa-kitchen-set"></i>Şef Usulü</div>|
        <div><i className="fa-regular fa-pen-to-square"></i>Blog</div>|
        <div><i className="fa-solid fa-bullhorn"></i>Duydunuz Mu?</div>
      </div>
    </div>
  );
}

export default Navbar;
