import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainView: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    // Si es exitosa, redirige a ManagementView
    navigate("/management");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0040a8]">
      {/* Logo centrado */}
      <img
        src={require("../../common/assets/logo_bdb.png")}
        alt="Logo"
        className="h-11 w-auto mb-5"
      />
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-xl font-bold text-center">Bienvenido 🧑‍💻</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainView;
