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
                className="cursor-pointer flex items-center"
              >
                <div className="w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
  <Image src="/logo.png" alt="Logo" width={88} height={88} />
</div>
              </div>

              <div className="flex items-center">
                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open ? "menu-black.svg" : "cancel-black.svg"}`}
                    alt="menu-toggle"
                  />
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
                    <Button onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}>
                      Resume
                    </Button>
                  )}
                  <Button onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}>
                    Contacto
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Inicio
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Proyectos</Button>
                  )}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                      Resume
                    </Button>
                  )}
                  <Button onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}>
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
          className="cursor-pointer flex items-center"
        >
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>
        </div>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleAboutScroll}>¿Quiénes somos?</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Proyectos</Button>
            )}
            {showResume && (
              <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}>
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
              <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}>
              Contacto
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
