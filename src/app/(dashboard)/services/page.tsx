import Link from "next/link";

export default function ServicesNewPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Bienvenido a la pagina principal de servicios</h1>

      <Link href="/" className="text-blue-500 hover:underline">
        Volver a la pagina principal
      </Link>

      <Link
        href="/services/new"
        className="text-blue-500 hover:underline ml-4"
      >
        Agregar nuevo servicio
      </Link>
    </div>
  );
}