import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { name, showBlog, showResume } = data;

  return (
    <>
      {/* Menú móvil */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0 bg-white text-black">
              <div
                onClick={() => router.push("/")}
                className="relative w-1/2 max-w-[200px] h-[100px] cursor-pointer"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>

              <div className="flex items-center">
                <Popover.Button className="focus:outline-none">
                  {!open ? (
                    <svg
                      className="h-6 w-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel className="absolute right-0 z-10 w-11/12 p-4 bg-white text-black shadow-md rounded-md">
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleAboutScroll}>Sobre nosotros</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Proyectos</Button>
                  )}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>Resume</Button>
                  )}
                  <Button onClick={() => window.open("https://www.edificandoingenieros.com/contacto", "_blank")}>
                    Contacto
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")}>Inicio</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Proyectos</Button>
                  )}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>Resume</Button>
                  )}
                  <Button onClick={() => window.open("https://www.edificandoingenieros.com/contacto", "_blank")}>
                    Contacto
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Menú desktop */}
      <div className="mt-10 hidden tablet:flex flex-row items-center justify-between sticky top-0 z-10 bg-white text-black px-4">
        <div
          onClick={() => router.push("/")}
          className="relative w-[220px] h-[120px] cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleAboutScroll}>¿Quiénes somos?</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Proyectos</Button>
            )}
            {showResume && (
              <Button onClick={() => router.push("/resume")}>Resume</Button>
            )}
            <Button onClick={() => window.open("https://www.edificandoingenieros.com/contacto", "_blank")}>
              Contacto
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Inicio</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Proyectos</Button>
            )}
            {showResume && (
              <Button onClick={() => router.push("/resume")}>Resume</Button>
            )}
            <Button onClick={() => window.open("https://www.edificandoingenieros.com/contacto", "_blank")}>
              Contacto
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
