"use client";

import { usePathname } from "next/navigation";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import Rodape from "../components/Rodape/Rodape";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderFooter = [
    "/integrantes",
    "/selecionar-cadastro",
    "/cadastro-cliente",
    "/criar-conta",
    "/cadastro-mecanico",
    "/cadastro-veiculo",
    "/entrar-conta",
  ].includes(pathname);

  return (
    <>
      {!hideHeaderFooter && <Cabecalho />}
      {children}
      {!hideHeaderFooter && <Rodape />}
    </>
  );
}
