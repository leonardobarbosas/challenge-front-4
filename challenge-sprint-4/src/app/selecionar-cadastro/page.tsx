import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function SelecionarCadastro() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center w-[95%] h-[93%] bg-[#40a9e4] rounded-[20px] shadow-lg ">
        <div className="flex w-full justify-end p-4">
          <Link href="/">
            <div className="flex items-center gap-2 text-black cursor-pointer">
              <IoMdArrowRoundBack className="text-3xl" />
              <p className="text-xl">Voltar</p>
            </div>
          </Link>
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center mb-10 text-black">
            Selecione uma opção para registrar
          </h1>
          <div className="flex gap-10">
            <Link href="/cadastro-mecanico">
              <button className="text-black w-[200px] h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-[5px_5px_1px_black] text-[1.1rem] font-light hover:transition-all hover:duration-300 hover:w-[220px] hover:h-[60px] hover:bg-[#358fc4]">
                Mecânico
              </button>
            </Link>
            <Link href="/cadastro-cliente">
              <button className="text-black w-[200px] h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-[5px_5px_1px_black] text-[1.1rem] font-light hover:transition-all hover:duration-300 hover:w-[220px] hover:h-[60px] hover:bg-[#358fc4]">
                Cliente
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
