import React from "react";
import Image from "next/image";

const FooterAlt = () => {
  return (
    <footer className="bg-white text-black font-sans py-10 px-6 laptop:px-20">
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10">
        {/* Columna 1: Logo + Síguenos */}
        <div className="flex flex-col items-start">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <h3 className="mt-6 text-sm font-bold text-logoGreen">SÍGUENOS EN</h3>
          <div className="flex gap-4 mt-2 text-black">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Columna 2: Enlaces útiles */}
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-logoGreen mb-2">ENLACES ÚTILES</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">INICIO</a></li>
            <li><a href="#">QUIÉNES SOMOS</a></li>
            <li><a href="#">TALENTO</a></li>
            <li><a href="#">SOSTENIBILIDAD</a></li>
            <li><a href="#">MEDIOS</a></li>
            <li><a href="#">CONTACTO</a></li>
            <li><a href="#">POLÍTICA DE TRATAMIENTO DE DATOS</a></li>
            <li><a href="#">LÍNEA ÉTICA</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-logoGreen mb-2">CONTACTO</h3>
          <p className="text-sm">PBX: +57 (601) 376 0030</p>
          <p className="text-sm">Carrera 9 # 9-60</p>
          <p className="text-sm">Chinchiná, Caldas – Colombia</p>
          <div className="mt-4 space-y-2">
            <button className="bg-logoGreen text-white px-4 py-2 text-sm rounded-md">PROVEEDORES</button><br />
            <button className="bg-logoGreen text-white px-4 py-2 text-sm rounded-md">TRABAJA CON NOSOTROS</button>
          </div>
        </div>
      </div>

      <p className="text-xs text-center mt-10">© EDIFICANDO INGENIEROS S.A.S 2025. TODOS LOS DERECHOS RESERVADOS.</p>
    </footer>
  );
};

export default FooterAlt;
