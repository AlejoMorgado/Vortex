import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./homePage.css";
import imageSrc from "../assets/homeImage.svg";
import Login from "../logIn/logIn";

const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="home-page">
      <header>
        <div className="headerContainer">
          <span>ResearchCraft</span>
          <div>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800"
              type="button"
            >
              Log in{" "}
              <svg
                className={`w-2.5 h-2.5 ms-3 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${
                isDropdownOpen ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    to="/login/student"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Student
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login/professional"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Professional
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div>
          <h1 className="slogan">
            Donde las ideas se convierten en papers de calidad
          </h1>
        </div>
        <hr className="custom-hr"></hr>
        <div className="contentContainer">
          <p className="contentText">
            ResearchCraft es una plataforma innovadora que conecta a estudiantes
            investigadores novatos con escritores expertos, ofreciendo un
            espacio donde la excelencia académica y la colaboración se
            encuentran. Facilitamos la publicación de investigaciones al
            proporcionar apoyo crítico en revisión, calificación y mejora de
            documentos técnicos.
          </p>

          <img
            className="homeImage"
            src={imageSrc}
            alt="Description of the image"
          />
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Mi Compañía</p>
      </footer>
    </div>
  );
};

export default HomePage;
