import React from 'react';
import '../styles/mainsection.css';


function MainSection({ title, description, hero }) {
  return (
    <section className="main-section">
      <div className="heroes">
        <img src={hero.src} alt={hero.alt} className="hero-image" />
      </div>
      <div className="text">
        {/* Контейнер для тексту з позиціонованим фоном */}
        <div className="text-container">
          <img src="/images/image.png" alt="Background Shape" className="background-shape" />
          <h1 className="main-title">{title}</h1>
          <p className="main-description">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
