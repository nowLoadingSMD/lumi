import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

import ActionsPlayer from '../../components/ActionsPlayer/ActionsPlayer';
import Tags from '../../components/Tags/Tags';
import ParentalRating from '../../components/ParentalRating/ParentalRating';

import './VideoInfos.css';

class VideoInfos extends Component {
  render() {
    return (
      <div className="container VideoInfos">
        <div>
          <h1 className="Type">Filme</h1>
          <h1 className="Heading TitleFilm">Bird Box</h1>
          <div className="descriptionVideo">
            <h1 className="Descriptions Discipline">Narrativas Multimídea</h1>
            <div className="Infos">
              <h1 className="Descriptions">2018</h1>
              <h1 className="Descriptions">2h4min</h1>
              <h1 className="Descriptions">Thriller</h1>
            </div>
          </div>
          <h1 className="Descriptions">
            Quando uma força misteriosa dizima a população, apenas uma coisa é
            certa: se você olhar, você morre.
          </h1>

          <button
            className="Play"
            onClick={() => this.props.history.push(ROUTES.PLAYER)}
          >
            <i className="fas fa-play" />
            ASSISTIR
          </button>
          <ActionsPlayer />
        </div>
        <div>
          <ParentalRating />
          <Tags />
        </div>
      </div>
    );
  }
}

export default VideoInfos;
