import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./students.css";
import profile from "../assets/profile.svg";
import uploadIcon from "../assets/upload.svg";
const StudentComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("");
  const [files, setFiles] = useState([]);
  const [skill, setSkill] = useState("");
  const [preference, setPreference] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const [preferencesList, setPreferencesList] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }))
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleAddSkill = () => {
    setSkillsList([...skillsList, skill]);
    setSkill("");
  };

  const handleAddPreference = () => {
    setPreferencesList([...preferencesList, preference]);
    setPreference("");
  };

  return (
    <div className="flex flex-col lg:flex-row p-8">
      <div className="lg:flex-1 leftSide bg-white p-8 rounded-md border mb-4 lg:mb-0 lg:mr-4">
        <div className="max-w-md mx-auto p-8 rounded-md">
          <div className="mb-4">
            <div className="flex items-center justify-center">
              <img
                className="homeImage"
                src={profile}
                alt="Description of the image"
              />
              <p className="ml-2">Nombre</p>
            </div>

            <label
              htmlFor="correo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo:
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              className="w-full border p-2 rounded-md bg-opacity-30 bg-red-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="universidad"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Universidad:
            </label>
            <input
              type="text"
              id="universidad"
              name="universidad"
              className="w-full border p-2 rounded-md bg-opacity-30 bg-red-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="carrera"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Carrera:
            </label>
            <input
              type="text"
              id="carrera"
              name="carrera"
              className="w-full border p-2 rounded-md bg-opacity-30 bg-red-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="campo_estudio"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Campo de Estudio:
            </label>
            <input
              type="text"
              id="campo_estudio"
              name="campo_estudio"
              className="w-full border p-2 rounded-md bg-opacity-30 bg-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Guardar
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/3 rightSide bg-white p-8 rounded-md border">
        <div className="header"></div>
        <label
          htmlFor="file_input"
          className="block w-1/2 h-20 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 flex items-center justify-center mb-4"
        >
          <img src={uploadIcon} alt="Upload Icon" className="w-6 h-6 mr-2" />
          Upload File
          <input className="hidden" id="file_input" type="file" />
        </label>

        <div className="mb-4">
          <label
            htmlFor="skills"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Skills:
          </label>
          <div className="flex">
            <input
              type="text"
              id="skills"
              name="skills"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full border p-2 rounded-md bg-opacity-30 bg-red-500"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600"
            >
              Agregar
            </button>
          </div>
          <ul>
            {skillsList.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <label
            htmlFor="preferences"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Preferences:
          </label>
          <div className="flex">
            <input
              type="text"
              id="preferences"
              name="preferences"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className="w-full border p-2 rounded-md bg-opacity-30 bg-red-500"
            />
            <button
              type="button"
              onClick={handleAddPreference}
              className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600"
            >
              Agregar
            </button>
          </div>
          <ul>
            {preferencesList.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentComponent;
