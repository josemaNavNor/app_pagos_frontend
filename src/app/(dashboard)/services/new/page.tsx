import Link from "next/link";

export default function ServicesNewPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Bienvenido a la pagina para agregar un servicio</h1>

      <Link href="/" className="text-blue-500 hover:underline">
        Volver a la pagina principal
      </Link>
    </div>
  );
}