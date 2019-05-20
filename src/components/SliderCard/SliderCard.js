import React from 'react';
import { withRouter } from 'react-router-dom';

import './SliderCard.css';

import birdbox from '../../assets/birdbox.jpg';
import addList from '../Carousel/assets/add-list.svg';
import * as ROUTES from '../../constants/routes';

const onWatch = (uid, history) => {
  history.push(`${ROUTES.VIDEO}/${uid}`);
};

const SliderCard = ({ video, history }) => {
  return (
    <div className="SliderCard">
      <div className="infos">
        <h1 className="addRecent">ADICIONADO RECENTEMENTE</h1>
        <h1 className="titleFilm">{video.title}}</h1>
        <h1 className="descriptionFilm">{video.description}</h1>
        <div className="buttonsFilm">
          <button
            className="button buttonPrimary"
            onClick={() => onWatch(video.uid, history)}
          >
            ASSISTIR
          </button>
          <article className="addList">
            <img src={addList} />
            Minha lista
          </article>
        </div>
      </div>
      <article className="containerImg">
        <img src={birdbox} />
      </article>
    </div>
  );
};

export default withRouter(SliderCard);
