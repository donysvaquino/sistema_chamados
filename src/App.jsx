import { Link } from "react-router-dom";

export default function App() {
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
        />
        <input
          type="text"
          className="bg-white w-full p-7 rounded-xl"
          placeholder="********"
        />

        <button className="bg-blue-700 p-7 w-full rounded-xl text-white font-bold text-xl">
          Login
        </button>
      </div>
    </div>
  );
}
