import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import React from "react";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link href="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/diagnosticar">Diagnosticar</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/sobre-nos">Sobre Nós</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/sobre-projeto">Projeto</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/veiculos">Veiculos</Link>{" "}
        </li>
        <Link href="/entrar-conta">
          {" "}
          <IoPerson />
        </Link>
      </ul>
    </nav>
  );
}
