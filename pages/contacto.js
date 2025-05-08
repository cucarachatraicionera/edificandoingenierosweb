// pages/contacto.js
import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contáctanos - Edificando Ingenieros</title>
      </Head>
      <div className="min-h-screen bg-white py-10 px-6 tablet:px-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Contáctanos</h1>
        <p className="text-gray-700 mb-10">
          Contáctenos sobre cualquier cosa relacionada con nuestra empresa o servicios. Haremos todo lo posible para llamarte lo antes posible.
        </p>
        <div className="grid laptop:grid-cols-3 gap-10">
          <form className="laptop:col-span-2 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Nombre *</label>
              <input type="text" className="border rounded-md px-4 py-2" placeholder="Tu nombre" required />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Número de teléfono *</label>
              <input type="tel" className="border rounded-md px-4 py-2" placeholder="+57" required />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Email *</label>
              <input type="email" className="border rounded-md px-4 py-2" placeholder="tucorreo@example.com" required />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Tema</label>
              <input type="text" className="border rounded-md px-4 py-2" placeholder="Asunto del mensaje" />
            </div>
            <div className="flex flex-col tablet:col-span-2">
              <label className="text-gray-600 font-semibold">Háblanos sobre tu proyecto *</label>
              <textarea className="border rounded-md px-4 py-2 h-32" placeholder="Cuéntanos más..." required></textarea>
            </div>
            <div className="tablet:col-span-2">
              <button
                type="submit"
                className="bg-logoGreen text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Info</h2>
            <p className="flex items-center mb-2">
              📍 Calle 20D # 96C – 76 Fontibón, Bogotá – Colombia
            </p>
            <p className="flex items-center break-words">
              📧{" "}
              <a href="mailto:servicioalcliente@marcazsalud.com.co" className="text-blue-700 underline">
                servicioalcliente@marcazsalud.com.co
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/">
            <span className="text-sm text-blue-600 underline cursor-pointer">Volver al inicio</span>
          </Link>
        </div>
      </div>
    </>
  );
}
