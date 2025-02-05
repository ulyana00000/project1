import React from 'react';
import '../styles/mainsection.css';


function MainSection({ description, hero }) {
  return (
    <section className="main-section">
      <div className="heroes">
        <img src={hero.src} alt={hero.alt} className="hero-image" />
      </div>
      <div className="text">
        {/* Контейнер для тексту з позиціонованим фоном */}
        <div className="text-container">
          <img src="/images/image1.png" alt="Background Shape" className="background-shape" />
          <p 
            className="main-description"
            dangerouslySetInnerHTML={{
              __html: description.replace(/NECROMAGIC/g, "<strong>NECROMAGIC</strong>")
            }}
          />
        </div>
      </div>
    </section>
  );
}


export default MainSection;
