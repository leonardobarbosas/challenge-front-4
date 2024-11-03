import Link from "next/link";

export default function CriarConta() {
  return (
    <main className="flex h-screen w-full justify-center">
      <div className="flex w-full">
        <div className="flex flex-col items-center justify-center w-1/2 gap-20 bg-[#40a9e4] text-black">
          <h1 className="text-6xl text-center w-1/2">
            Cadastre-se e conheça a nossa plataforma
          </h1>
          <div className="flex items-center gap-2 text-black">
            <p>Já tem uma conta?</p>
            <Link href="/entrar-conta">Entrar</Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <form className="flex flex-col items-center justify-around w-4/5 h-[800px] bg-[#40a9e4] rounded-[15px] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]">
            <h2 className="text-2xl mb-4">Crie sua conta</h2>
            <div className="flex flex-col w-3/4">
              <div className="mb-4">
                <label className="block mb-2">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded bg-white h-16"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded bg-white h-16"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Senha:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded bg-white h-16"
                />
              </div>
            </div>
            <Link href="/selecionar-cadastro">
              <button className="text-black w-[200px] h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-[5px_5px_1px_black] text-[1.1rem] font-light hover:transition-all hover:duration-300 hover:w-[220px] hover:h-[60px] hover:bg-[#358fc4]">
                Enviar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
