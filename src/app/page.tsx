import Link from "next/link";

export default function HomePage(){
  return (
    <div>
      <h1 className="text-4xl font-bold">Bienvenido a la pagina principal de app pagos</h1>

      <Link href="/services">Servicios</Link>
    </div>
  )
}