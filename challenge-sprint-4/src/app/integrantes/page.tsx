"use client";

import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import julia from "@/img/julia.png";
import barbosa from "@/img/barbosa.png";
import cadena from "@/img/cadena.png";

export default function Integrantes() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f2f9ff] w-screen h-screen">
      <div className="flex flex-col justify-between rounded-lg bg-[#40a9e4] w-[95vw] h-[93vh] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]">
        {" "}
        <div className="main-header-container flex justify-around h-[15%]">
          <div className="text-container flex text-3xl items-center">
            <p id="p-integrantes">Conect</p>
            <p id="p-equipe">Car</p>
          </div>
          <div className="div-a-container flex items-center text-black text-3xl">
            <Link href={"/"} className="a-link flex items-center gap-2">
              <IoMdArrowRoundBack className="arrow-left size-12" />
              <p className="p-back">Voltar</p>
            </Link>
          </div>
        </div>
        <section className="cards flex h-[85%] w-full items-center justify-center gap-3">
          <div className="card-container text-black font-bold flex flex-col items-center justify-around h-[95%] w-[30%] rounded-lg bg-[#40a9e4] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] hover:bg-[#2691cf transition-all duration-200 ease-in-out hover:w-[35%] hover:h-[98%]">
            <h1>Leonardo Cadena de Souza</h1>
            <Image
              src={cadena}
              alt="leo-cadena"
              width={300}
              height={300}
              className="rounded-lg shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]"
            />
            <div className="rm-turma flex flex-col items-center">
              <p className="text-rm-turma" id="rm">
                RM: 557528
              </p>
              <p className="text-rm-turma" id="turma">
                1TDSPF
              </p>
            </div>
            <button
              type="submit"
              className="submit text-black w-[200px] h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-[5px_5px_1px_black] text-[1.1rem] font-light hover:transition-all hover:duration-300 hover:w-[220px] hover:h-[60px] hover:bg-[#358fc4]"
              id="submitLeoCadena"
            >
              GITHUB
            </button>
          </div>
          <div className="card-container text-black font-bold flex flex-col items-center justify-around h-[95%] w-[30%] rounded-lg bg-[#40a9e4] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] hover:bg-[#2691cf transition-all duration-200 ease-in-out hover:w-[35%] hover:h-[98%]">
            <h1>Leonardo Barbosa Santos</h1>
            <Image
              src={barbosa}
              alt="leo-barbosa"
              width={300}
              height={300}
              className="rounded-lg shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]"
            />
            <div className="rm-turma flex flex-col items-center">
              <p className="text-rm-turma" id="rm">
                RM: 558230
              </p>
              <p className="text-rm-turma" id="turma">
                1TDSPO
              </p>
            </div>
            <div className="button-leo-container">
              <Link
                href="https://github.com/leonardobarbosas"
                target="blank_"
              >
                <button
                  type="submit"
                  className="submit text-black w-[200px] h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-[5px_5px_1px_black] text-[1.1rem] font-light hover:transition-all hover:duration-300 hover:w-[220px] hover:h-[60px] hover:bg-[#358fc4]"
                  id="submitLeoBarbosa"
                >
                  GITHUB
                </button>
              </Link>
              <Link
                href="https://github.com/leonardobarbosas/challenge-front-4"
                target="blank_"
              >
                <button
                  type="submit"
                  className="submit text-black w-[200px] h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-[5px_5px_1px_black] text-[1.1rem] font-light hover:transition-all hover:duration-300 hover:w-[220px] hover:h-[60px] hover:bg-[#358fc4]"
                  id="repository"
                >
                  REPOSITÓRIO
                </button>
              </Link>
            </div>
          </div>
          <div className="card-container text-black font-bold flex flex-col items-center justify-around h-[95%] w-[30%] rounded-lg bg-[#40a9e4] shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] hover:bg-[#2691cf transition-all duration-200 ease-in-out hover:w-[35%] hover:h-[98%]">
            <h1>Julia Vasconcelos</h1>
            <Image
              src={julia}
              alt="julia"
              width={300}
              height={300}
              className="rounded-lg shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]"
            />
            <div className="rm-turma flex flex-col items-center">
              <p className="text-rm-turma" id="rm">
                RM: 558785
              </p>
              <p className="text-rm-turma" id="turma">
                1TDSPF
              </p>
            </div>
            <button
              type="submit"
              className="submit text-black w-[200px] h-[50px] bg-[#40a9e4] rounded-[10px] border border-black cursor-pointer shadow-[5px_5px_1px_black] text-[1.1rem] font-light hover:transition-all hover:duration-300 hover:w-[220px] hover:h-[60px] hover:bg-[#358fc4]"
              id="submitJulia"
            >
              GITHUB
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
