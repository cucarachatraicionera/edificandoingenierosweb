import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div className="flex flex-col items-center justify-center text-center">
          <a href="tel:+573117720385">
            <Button type="primary">Llámanos</Button>
          </a>
          <div className="mt-10">
            <Socials />
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 text-center">
        Made With ❤ by{" "}
        <Link href="http://www.pinneaplesoft">
          <a className="underline underline-offset-1">Pinneaple Software</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
