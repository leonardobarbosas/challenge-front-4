import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="cabecalho items-center justify-around">
      <div className="flex text-4xl">
        <p className="t-tx-color">Connect</p>
        <p>Car</p>
      </div>
      <Menu />
    </header>
  );
}
