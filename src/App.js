// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./homePage/homePage";
import Login from "./logIn/logIn";
import StudentComponent from "./studentComponent/student";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/StudentComponent/*" element={<StudentComponent />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
