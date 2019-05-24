import React from 'react';
import './HomeFilms.css';

import CardFilm from '../CardFilm/CardFilm';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';
import EmptyLabel from '../EmptyLabel/EmptyLabel';

const HomeFilms = ({ videos, loading }) => {
  let children = null;

  if (loading) {
    children = <EmptyLabel>Carregando...</EmptyLabel>;
  } else if (videos !== null) {
    children = <CardList videos={videos} loading={loading} />;
  } else {
    children = <EmptyLabel>Não há videos nesta lista</EmptyLabel>;
  }
  return (
    <div className="HomeFilms">
      <div className="titleHomeFilms">
        <Header>Os mais assistidos</Header>
        <button className="button buttonSeeMore">Ver todos</button>
      </div>
      <article className="line" />
      <div className="listFilms">{children}</div>
    </div>
  );
};

export default HomeFilms;
