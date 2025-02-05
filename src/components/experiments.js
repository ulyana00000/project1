import React from 'react';
import '../styles/experiments.css';

function Experiments({ experiments }) {
  return (
    <section className="experiments">
      <div className="experiments-container">
        {experiments.map((experiment, index) => (
          <div className="experiment" key={index}>
            <div className="experiment-content">
              <h3 className="experiment-title">{experiment.title}</h3>
              <p className="experiment-description">{experiment.description}</p>
            </div>
            <div className="experiment-image-container">
              <img 
                src={experiment.image} 
                alt={experiment.title} 
                className="experiment-image" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiments;
