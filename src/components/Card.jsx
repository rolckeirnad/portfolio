/* eslint-disable react/prop-types */
import {
  formatDistance, parseISO, startOfToday,
} from 'date-fns';
import React, { useState } from 'react';
import placeholder from '../assets/images/rolckeirnad.png';

const loadImage = async (image) => new Promise((resolve, reject) => {
  const loadImg = new Image();
  loadImg.src = image;
  loadImg.onload = () => resolve(image);
  loadImg.onerror = (err) => reject(new Error(err));
});

function Card({ info }) {
  const [loaded, setLoaded] = useState(false);
  const [url, setUrl] = useState();
  const {
    id, name, description, pushed_at, topics,
  } = info;

  loadImage(`https://raw.githubusercontent.com/rolckeirnad/${name}/main/preview.png`)
    .then((image) => {
      setUrl(image);
    })
    .catch((err) => {
      console.error(`${name} repo do not has preview image`, err);
      setUrl(placeholder);
    })
    .finally(() => {
      setLoaded(true);
    });

  return (
    <div className="card h-100 text-center text-bg-light" key={id} id={id}>
      <div className="card-header d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <div className={loaded ? 'overflow-hidden h-100 w-100' : 'spinner-border'}>
          <a href={`https://rolckeirnad.github.io/${name}`} target="_blank" rel="noreferrer noopener">
            <img
              src={url}
              className={loaded ? 'card-img-top card-repo-image' : 'visually-hidden'}
              alt="kitty"
            />
          </a>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex flex-wrap justify-content-center gap-1">
          {topics.map((topic, i) => <span key={`span-${id}-${i}`} className="badge rounded-pill px-2 text-bg-info align-self-center">{ topic }</span>) }
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Created
          {' '}
          {`${formatDistance(parseISO(pushed_at), startOfToday())}`}
          {' '}
          ago
        </small>
      </div>
    </div>
  );
}

export default Card;
