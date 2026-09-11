import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerUser } = useContext(AuthContext);

  function handleRegister() {
    if (name != "" && email != "" && password != "") {
      registerUser(name, email, password);
    }
  }

  return (
    <div className="bg-gray-950 w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-900 p-15 w-180 rounded-3xl flex justify-center flex-col items-center gap-10">
        <h1 className="text-white font-bold italic text-6xl">
          <span className="text-blue-700">SKYY</span>Club
        </h1>
        <input
          type="text"
          className="bg-white w-full p-7 rounded-xl"
          placeholder="Nome de funcionário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="bg-white w-full p-7 rounded-xl"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="bg-white w-full p-7 rounded-xl"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-700 p-7 w-full rounded-xl text-white font-bold text-xl"
          onClick={() => handleRegister()}
        >
          Login
        </button>
        <span className="text-white">
          Já tem uma conta?
          <Link to={"/auth/login"} className="font-bold">
            {" "}
            Faça login
          </Link>
        </span>
      </div>
    </div>
  );
}
