import Image from "next/image";


export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="p-4 flex items-center justify-between">
      {/* Logo à esquerda */}
      <Image
        src="/image/logo-revinn.png"
        alt="Logo"
        width={150}
        height={0}
        className="mt-[-28px]"
      />

      {/* Dropdown + botões à direita */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Dropdown (passado via children) */}
        {children}

        {/* Botão automação */}
        <button
          onClick={() => console.log("Iniciar automação")}
          className="w-17 h-17 bg-white rounded-2xl shadow-md flex items-center justify-center text-teal-600 hover:scale-105 transition cursor-pointer"
        >
        </button>

        {/* Botão logout */}
        <button
          onClick={() => console.log("Logout")}
          className="w-17 h-17 bg-white rounded-2xl shadow-md flex items-center justify-center text-teal-600 hover:scale-105 transition cursor-pointer mr-5"
        >
        </button>
      </div>
    </header>
  );
}
