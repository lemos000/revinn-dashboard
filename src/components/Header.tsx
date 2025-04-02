export default function Header({ children }: { children?: React.ReactNode }) {
    return (
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
       <h2> {children}</h2>
      </header>
    );
  }