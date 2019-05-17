import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

import './Carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';

import SliderCard from '../SliderCard/SliderCard';

import addList from './assets/add-list.svg';
import birdbox from '../../assets/birdbox.jpg';

class Carousels extends Component {
  render() {
    // const { videos } = this.props;
    // let videoList = null;

    // if (videos != null) {
    //   videoList = videos.map(video => {
    //     return <SliderCard video={video} />;
    //   });
    // }

    return (
      <Carousel
        emulateTouch
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        width="100%"
        className="carousel"
      >
        {/* {videos && videoList} */}
        <div className="SliderCard">
          <div className="infos">
            <h1 className="addRecent">ADICIONADO RECENTEMENTE</h1>
            <h1 className="titleFilm">BirdBox</h1>
            <h1 className="descriptionFilm">Chihiro é uma garota de 10 anos que fuma um beck muito louco e vive altas aventuras com um dragão voador bigodudo.</h1>
            <div className="buttonsFilm">
              <button className="button buttonPrimary">ASSISTIR</button>
              <article className="addList"><img src={addList} />Minha lista</article>
            </div>
          </div>
          <article className="containerImg"><img src={birdbox} /></article>
        </div>
        <div className="SliderCard">
          <div className="infos">
            <h1 className="addRecent">ADICIONADO RECENTEMENTE</h1>
            <h1 className="titleFilm">BirdBox</h1>
            <h1 className="descriptionFilm">Chihiro é uma garota de 10 anos que fuma um beck muito louco e vive altas aventuras com um dragão voador bigodudo.</h1>
            <div className="buttonsFilm">
              <button className="button buttonPrimary">ASSISTIR</button>
              <article className="addList"><img src={addList} />Minha lista</article>
            </div>
          </div>
          <article className="containerImg"><img src={birdbox} /></article>
        </div>
        <div className="SliderCard">
          <div className="infos">
            <h1 className="addRecent">ADICIONADO RECENTEMENTE</h1>
            <h1 className="titleFilm">BirdBox</h1>
            <h1 className="descriptionFilm">Chihiro é uma garota de 10 anos que fuma um beck muito louco e vive altas aventuras com um dragão voador bigodudo.</h1>
            <div className="buttonsFilm">
              <button className="button buttonPrimary">ASSISTIR</button>
              <article className="addList"><img src={addList} />Minha lista</article>
            </div>
          </div>
          <article className="containerImg"><img src={birdbox} /></article>
        </div>

      </Carousel >
    );
  }
}

export default Carousels;
