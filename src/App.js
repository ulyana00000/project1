import React from "react";
import Header from "./components/header";
import "./styles/reset.css";
import "./styles/global.css";
import data from "./data/content1.json";
import MainSection from "./components/mainsection";
import Slider from "./components/slider"; // Імпорт слайдера

function App() {
  const { main } = data; // Оголошення змінної main з даних

  return (
    <div className="App">
      {/* Хедер */}
      <Header
        logo={data.header.logo}
        subtitle={data.header.subtitle}
        menu={data.header.menu}
      />

      {/* Головний контент */}
      <MainSection
        title={main.title}
        description={main.description}
        hero={main.heroes[0]} // Передаємо перший (і єдиний) елемент з heroes
      />

      {/* Слайдер */}
      <Slider />
    </div>
  );
}

export default App;
