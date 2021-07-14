import React from 'react';

export default function Card(props) {
var projectImage = '../images/projects/' + props.image;
  return (
      
    <div>
      <section>
        <img
          className="card-img"
          src={projectImage}
          alt={props.title}
        />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.description}</p>
          <p className="card-subtitle">Technology used:</p>
          <p><i>{props.technology}</i></p>
          <a href={props.url} rel='noopener noreferrer' target="_blank" className="btn btn-primary">Deployed app</a>
          <a href={props.repo} rel='noopener noreferrer' target="_blank" className="btn btn-primary">Repository</a>
        </div>
      </section>
    </div>
  );
}
