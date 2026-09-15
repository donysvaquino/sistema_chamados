import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth } = useContext(AuthContext);

  async function handleSubmit() {
    if (email != "" && password != "") {
      await signIn(email, password);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 lg:grid lg:grid-cols-2">
      <section className="relative hidden overflow-hidden border-r border-white/10 bg-blue-700 px-12 py-14 lg:flex lg:flex-col lg:justify-between xl:px-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[48px] border-white/10" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full border-[64px] border-white/10" />

        <div className="relative z-10 flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-black text-blue-700 shadow-lg shadow-blue-950/20">
            S
          </span>
          <span className="text-2xl font-black tracking-tight">
            SKYY<span className="font-medium">Club</span>
          </span>
        </div>

        <div className="relative z-10 max-w-xl text-white">
          <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
            Central de atendimento
          </span>
          <h1 className="text-5xl font-black leading-tight tracking-tight xl:text-6xl">
            Chamados organizados. Equipe mais eficiente.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
            Acompanhe solicitações, prioridades e atendimentos em um único
            lugar.
          </p>
        </div>

        <p className="relative z-10 text-sm font-medium text-blue-100">
          Sistema de gerenciamento de chamados
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-xl font-black text-white">
              S
            </span>
            <span className="text-2xl font-black tracking-tight text-slate-950">
              SKYY<span className="font-medium text-blue-700">Club</span>
            </span>
          </div>

          <div className="mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Bem-vindo de volta
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Entre na sua conta
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-500">
              Use seus dados de acesso para continuar.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8">
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  E-mail
                </span>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Senha
                </span>
                <input
                  type="password"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <button
                className="mt-2 w-full rounded-xl bg-blue-700 px-5 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
                onClick={() => handleSubmit()}
              >
                {loadingAuth ? "Entrando..." : "Entrar"}
              </button>
            </div>

            <p className="mt-7 text-center text-sm text-slate-500">
              Ainda não tem uma conta?{" "}
              <Link
                to={"/auth/register"}
                className="font-extrabold text-blue-700 transition hover:text-blue-900"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
