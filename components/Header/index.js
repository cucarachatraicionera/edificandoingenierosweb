import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // 🔥 Agregado aquí
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <div
                onClick={() => router.push("/")}
                className="cursor-pointer flex items-center"
              >
                <Image src="/logo.png" alt="Logo" width={120} height={60} />
              </div>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="theme-toggle"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="menu-toggle"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleAboutScroll}>Sobre nosotros</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Proyectos</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:edificandoingenierossas@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}
                  >
                    Contacto
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Inicio
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}
                  >
                    Contacto
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer flex items-center"
        >
          <Image src="/logo.png" alt="Logo" width={120} height={60} />
        </div>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleAboutScroll}>Quienes somos?</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Proyectos</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}>
              Contacto
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme-toggle"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Inicio</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Proyectos</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:edificandoingenierossas@gmail.com")}>
              Contacto
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme-toggle"
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
