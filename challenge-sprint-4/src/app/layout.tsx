import type { Metadata } from "next";
import "@/app/globals.css";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import Rodape from "../components/Rodape/Rodape";

export const metadata: Metadata = {
  title: "ConnectCar",
  description: "ConnectCar COM NEXT.JS - CHALLENGE SPRINT 4",
};

export const viewport = {
  inicialScale: 1,
  width: "device-width",
  height: 1080,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
