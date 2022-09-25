import React from 'react';
import verified from '../assets/verified.png';
import clock from '../assets/clock-icon.png';
import tray from '../assets/tray-icon.png';

type Iprobs = {
  yemekler: any;
};

const RecipesCard: React.FC<Iprobs> = ({ yemekler }) => {
  console.log(yemekler);

  return (
    <div className="container recipes">
      {yemekler.yemekler.map((yemek: any) => (
        <div key={yemek.id} className="recipes__recipes">
          <div className="recipes__head">
            <img src={yemek.cookerAvatar} className="recipes__head--img" alt="" />
            <div className="recipes__head--info">
              <div className="recipes__head--info--name">
                {yemek.cooker}
                <img alt="" src={verified} />
              </div>
              <div className="recipes__head--info--job">{yemek.cookerJob}</div>
            </div>
          </div>
          <img src={yemek.image} alt="tarif gorsel" className="recipes__img" />
          <div className="recipes__main">
            <div className="recipes__main--title">
              <b>{yemek.title}</b>
            </div>
            <div className="recipes__main--info">
              <div className="recipes__main--info--cookingTime">
                <img src={clock} alt="" />
                <div>{yemek.cookingTime}</div>
              </div>
              <div className="recipes__main--info--forPeople">
                <img src={tray} alt="" />
                <div>{yemek.peopleFor}</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="recipes__footer">
            <div className="recipes__footer--comment">
              <div>
                <i className="fa-regular fa-heart"></i>
                <span>38</span>
              </div>
              <div>
                <i className="fa-regular fa-comment-dots"></i>
                <span>5</span>
              </div>
            </div>
            <div className="recipes__footer--views">3B Görüntülenme</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesCard;
