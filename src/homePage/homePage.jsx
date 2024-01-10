import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <div className="headerContainer">
          <span>ResearchCraft</span>
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Log in
          </button>
        </div>
      </header>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div>
          ResearchCraft es una plataforma innovadora que conecta a estudiantes
          investigadores novatos con escritores expertos, ofreciendo un espacio
          donde la excelencia académica y la colaboración se encuentran.
          Facilitamos la publicación de investigaciones al proporcionar apoyo
          crítico en revisión, calificación y mejora de documentos técnicos.
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Mi Compañía</p>
      </footer>
    </div>
  );
};

export default HomePage;
