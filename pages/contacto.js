import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Contacto() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      nombre: form.nombre.value,
      telefono: form.telefono.value,
      email: form.email.value,
      tema: form.tema.value,
      mensaje: form.mensaje.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("✅ Mensaje enviado correctamente");
      form.reset();
    } else {
      alert("❌ Hubo un error al enviar el mensaje");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contáctanos - Edificando Ingenieros</title>
      </Head>
      <div className="min-h-screen bg-white py-10 px-6 tablet:px-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Contáctanos</h1>
        <p className="text-gray-700 mb-10">
          Contáctenos sobre cualquier proyecto de construcción, diseño o servicios adicionales. Nuestro equipo en Chinchiná, Caldas, está listo para atenderte.
        </p>
        <div className="grid laptop:grid-cols-3 gap-10">
          <form
            onSubmit={handleSubmit}
            className="laptop:col-span-2 grid grid-cols-1 tablet:grid-cols-2 gap-4"
          >
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Nombre *</label>
              <input
                name="nombre"
                type="text"
                className="border rounded-md px-4 py-2"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Número de teléfono *</label>
              <input
                name="telefono"
                type="tel"
                className="border rounded-md px-4 py-2"
                placeholder="+57"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Email *</label>
              <input
                name="email"
                type="email"
                className="border rounded-md px-4 py-2"
                placeholder="tucorreo@example.com"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-semibold">Tema</label>
              <input
                name="tema"
                type="text"
                className="border rounded-md px-4 py-2"
                placeholder="Asunto del mensaje"
              />
            </div>
            <div className="flex flex-col tablet:col-span-2">
              <label className="text-gray-600 font-semibold">Háblanos sobre tu proyecto *</label>
              <textarea
                name="mensaje"
                className="border rounded-md px-4 py-2 h-32"
                placeholder="Cuéntanos más..."
                required
              ></textarea>
            </div>
            <div className="tablet:col-span-2">
              <button
                type="submit"
                className="bg-logoGreen text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </form>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Info</h2>
            <p className="flex items-center mb-2">
              📍 Carrera 9 # 9-60, Chinchiná, Caldas – Colombia
            </p>
            <p className="flex items-center break-words">
              📧{" "}
              <a
                href="mailto:edificandoingenierossas@gmail.com"
                className="text-blue-700 underline"
              >
                edificandoingenierossas@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/">
            <span className="text-sm text-blue-600 underline cursor-pointer">
              Volver al inicio
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
