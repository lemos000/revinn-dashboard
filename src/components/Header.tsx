import Image from "next/image";


export default function Header({ children }: { children?: React.ReactNode }) {
    return (
      <header className="bg-white-600 text-white p-4 flex justify-between items-center">
      <Image
         src="/image/logo-revinn.png"
          alt="Logo"
          width={130}
          height={0}
          className="mt-[-28px]"
        />
       <h2> {children}</h2>
      </header>
    );
  }