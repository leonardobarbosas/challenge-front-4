"use client";
import { TipoVeiculo } from "@/types";
import { useEffect, useState } from "react";

export default function Veiculos() {
  const [veiculos, setVeiculos] = useState<TipoVeiculo[]>([]);

  const chamadaDaApi = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/ConnectCarSprint4/rest/veiculo"
      );
      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }
      const dados: TipoVeiculo[] = await response.json();
      setVeiculos(dados);
    } catch (error) {
      console.error("Falha ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    chamadaDaApi();
  }, []);

  return (
    <div className="h-90vh flex flex-col w-full items-center justify-center gap-8">
      <h1 className="text-5xl">Veículos Cadastrados</h1>
      <div className="flex w-[90%] flex-wrap gap-2 items-center justify-center">
        {veiculos.map((veiculo) => (
          <div
            key={veiculo.idVeiculo}
            className="bg-[#2762ca] rounded-lg shadow-none w-[300px] h-40 flex flex-col items-center justify-around"
          >
            <h2>Id: {veiculo.idVeiculo}</h2>
            <p>Chassi: {veiculo.chassi}</p>
            <p>Placa: {veiculo.placa}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
