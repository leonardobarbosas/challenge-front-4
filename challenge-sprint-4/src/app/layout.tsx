import type { Metadata } from "next";
import "@/app/globals.css";
import ConditionalLayout from "@/app/root";

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
      <body style={{ background: "linear-gradient( #000000a1, #7fccf8d5)" }}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
