import React from 'react';

import './ProfileCard.css';

import ProfileImage from './ProfileImage/ProfileImage';

const ProfileCard = ({ imgUrl, name, role }) => {
  return (
    <div className="ProfileCard">
      <ProfileImage imgUrl={imgUrl} />
      <p className="name">{name}</p>
      <p className="role">Alunx de Sistemas e Mídias Digitais</p>
    </div>
  );
};

export default ProfileCard;
