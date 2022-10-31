import {
  formatDistance, parseISO, startOfToday,
} from 'date-fns';
import React from 'react';

function Card({ info }) {
  const {
    id, name, description, pushed_at, updated_at, topics,
  } = info;
  return (
    <div className="card h-100 text-center text-bg-light" key={id} id={id}>
      <div className="overflow-hidden">
        <a href={`https://rolckeirnad.github.io/${name}`} target="_blank" rel="noreferrer noopener">
          <img
            src="http://placekitten.com/200/300"
            className="card-img-top card-repo-image"
            alt="kitty"
          />
        </a>
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
