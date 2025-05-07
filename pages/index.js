import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Carousel from "../components/Carousel";
import Image from "next/image";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <div className="border-2 border-logoGreen rounded-xl p-4 inline-block shadow-md bg-white/80 mb-6">
            <h1 className="text-2xl font-bold text-black">Proyectos</h1>
          </div>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="h-2 bg-logoGreen my-10 w-full rounded-full"></div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <div className="border-2 border-logoGreen rounded-xl p-4 inline-block shadow-md bg-white/80 mb-6 tablet:mx-10">
            <h1 className="text-3xl font-bold text-black">Servicios</h1>
          </div>

          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="h-2 bg-logoGreen my-10 w-full rounded-full"></div>

        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <div className="border-2 border-logoGreen rounded-xl p-4 inline-block shadow-md bg-white/80 mb-6 tablet:mx-10">
            <h1 className="text-2xl font-bold text-black">¿Quiénes somos?</h1>
          </div>

          <div className="flex flex-col laptop:flex-row items-start laptop:items-center laptop:justify-between gap-6 tablet:m-10">
            <p className="text-xl laptop:text-3xl text-justify w-full laptop:w-3/5">
              Edificando Ingenieros S.A.S. es una empresa dedicada a la construcción y diseño de obras civiles, con amplia experiencia en el sector público y privado. Desde nuestros inicios, nos hemos enfocado en transformar ideas en proyectos reales, ejecutando obras como viviendas campestres, pavimentos urbanos, acueductos, alcantarillados, edificaciones institucionales y más. Contamos con un equipo técnico altamente calificado, maquinaria propia y aliados estratégicos que nos permiten garantizar calidad, cumplimiento y sostenibilidad en cada proyecto. Nuestra pasión por construir va más allá de las estructuras.
            </p>
            <div className="w-full laptop:w-2/5">
              <Image
                src="/quienessomos.jpeg"
                alt="Quienes Somos"
                width={800}
                height={800}
                layout="responsive"
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="h-2 bg-logoGreen my-10 w-full rounded-full"></div>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <div className="border-2 border-logoGreen rounded-xl p-4 inline-block shadow-md bg-white/80 mb-6 tablet:mx-10">
            <h1 className="text-2xl font-bold text-black">Contacto</h1>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
