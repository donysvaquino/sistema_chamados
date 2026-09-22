import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { LucideHome, LucideSettings, LucideUserRoundGroup } from "lucide-react";

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-80 h-screen bg-blue-600">
      <div className="w-full flex justify-center items-center flex-col gap-10 bg-blue-500 p-10">
        <div className="w-40 h-40 rounded-full bg-blue-400"></div>
        <h1 className="text-white font-semibold text-2xl">{user.nome}</h1>
      </div>
      <ul className="pt-10 flex flex-col gap-5">
        <li className="flex gap-2 w-full text-2xl items-center justify-center p-3 text-white bg-blue-500">
          <LucideHome />
          Chamados
        </li>
        <li className="flex gap-2 w-full text-2xl items-center justify-center p-3 text-white">
          <LucideUserRoundGroup />
          Chamados
        </li>
        <li className="flex gap-2 w-full text-2xl items-center justify-center p-3 text-white">
          <LucideSettings />
          Chamados
        </li>
      </ul>
    </div>
  );
}
