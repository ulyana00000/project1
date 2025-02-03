import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../styles/slider.css";
const slides = [
    {
      background: "/images/sl.png", // Фон
      image: "/images/wizard1.png",
      title: "THE SHADOW OF NECROS",
      description:
        "It is said that the founder of the laboratory, the legendary sorcerer Grand Magus Necros, never truly left. His body may have crumbled to dust centuries ago, but his soul lingers within these walls. On moonless nights, students have reported seeing a cloaked figure standing at the edge of their vision—never moving, never speaking, just watching. Those who dare follow the shadow find themselves lost in the endless corridors, only to wake hours later in their chambers, with whispers of forgotten spells echoing in their minds."
    },
    {
      background: "/images/wizard2-bg.png",
      image: "/images/wizard2.png",
      title: "THE CURSE OF ZANTHOS",
      description:
        "Zanthos, the keeper of forbidden knowledge, was cursed to wander the spectral plains for eternity. His presence is marked by the flicker of ancient runes that light up the walls, guiding or warning those who seek the unattainable. Students claim to hear his spectral voice reciting incantations in a forgotten tongue, as if urging them to uncover the truths he left behind."
    },
    {
      background: "/images/wizard3-bg.png",
      image: "/images/wizard3.png",
      title: "THE WARDEN OF ETERNAL FLAME",
      description:
        "The Warden, a fiery apparition bound to protect the laboratory's sacred relics, appears when the boundaries between realms grow thin. His glowing ember eyes pierce through the darkness, and his flaming sword carves a path for those deemed worthy—or banishes those who are not."
    },
    {
      background: "/images/wizard4-bg.png",
      image: "/images/wizard4.png",
      title: "THE MIST WEAVER",
      description:
        "The Mist Weaver emerges during the twilight hours, weaving illusions and altering perceptions. Students who encounter her find themselves trapped in vivid dreams, unable to distinguish reality from fantasy. Her presence is both a test and a lesson, teaching the importance of clarity and focus in the pursuit of magic."
    }
  ];
  
  const Slider = () => {
    return (
      <div className="slider-container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide-content"
                style={{
                  backgroundImage: `url(${slide.background})` // Додаємо фон
                  
                }}
              >
                <img src={slide.image} alt={slide.title} className="slide-image" />
                <div className="text-content">
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Slider;