import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="bg-color text-black h-10vh flex justify-around items-center rounded-tl-lg rounded-tr-lg shadow-lg">
      <div className="social-media">
        <div className="flex items-center gap-2">
          <FaInstagram />
          <p>Instagram</p>
        </div>
        <div className="flex items-center gap-2">
          <FaWhatsapp />
          <p>Whatsapp</p>
        </div>
        <div className="flex items-center gap-2">
          <FaYoutube />
          <p>Youtube</p>
        </div>
      </div>
      <div className="footer-content-container">
        <div className="flex items-center justify-around">
          <Link href="/">Home</Link>
          <Link href="/integrantes">Integrantes</Link>
          <Link href="/entrar-conta">
            <IoPerson />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 text-2xl">
            <p className="porto-text" id="porto-porto">
              Porto
            </p>
            <p className="porto-text" id="porto-seguro-text">
              Seguro
            </p>
          </div>
          <p>© Copyright 2023 - Porto Seguro</p>
        </div>
      </div>
      <div className="endereco w-40 text-sm">
        <p>
          Avenida dos Autonomistas, nº 1496, Vila Yara, Osasco/SP - CEP
          06.020-902
        </p>
      </div>
    </footer>
  );
}
