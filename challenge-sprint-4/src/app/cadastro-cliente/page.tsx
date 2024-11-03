import { FaCamera } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function CadastroCliente() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center w-[95%] h-[93%] bg-[#40a9e4] rounded-[20px] shadow-lg p-10">
        <h1 className="text-4xl text-center mb-10 text-black">
          Cadastro Cliente
        </h1>
        <div className="flex w-full items-end justify-end mb-10">
          <Link href="/selecionar-cadastro">
            <div className="flex items-center gap-2 text-black cursor-pointer">
              <IoMdArrowRoundBack className="text-3xl" />
              <p className="text-xl">Voltar</p>
            </div>
          </Link>
        </div>
        <section className="flex flex-col gap-6 w-1/2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-lg mb-2">Data de nascimento:</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-3 py-2 border rounded bg-white text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg mb-2">Telefone:</label>
              <input
                type="number"
                id="telefone"
                name="telefone"
                className="w-full px-3 py-2 border rounded bg-white text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg mb-2">CPF:</label>
              <input
                type="number"
                id="cpf"
                name="cpf"
                className="w-full px-3 py-2 border rounded bg-white text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg mb-2">RG:</label>
              <input
                type="number"
                id="rg"
                name="rg"
                className="w-full px-3 py-2 border rounded bg-white text-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg mb-2">CNH:</label>
              <input
                type="number"
                id="cnh"
                name="cnh"
                className="w-full px-3 py-2 border rounded bg-white text-black"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-lg">Imagem de Perfil:</label>
              <FaCamera className="text-3xl cursor-pointer" />
            </div>
          </div>
          <Link href="cadastro-veiculo">
            <button className="text-black w-full h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-md text-lg font-medium hover:transition-all hover:duration-300 hover:scale-105 hover:bg-[#358fc4]">
              Continuar
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
