import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto flex items-center px-6 sm:px-[100px] h-[110px] border-t-[2px] mt-[100px]">
        <div>
          <Link
            href={"/"}
            className="hidden sm:block tracking-widest font-normal text-sm"
          >
            NABASTALA
          </Link>
        </div>
        <div className="grow">
          <div className="font-normal text-[#8C8C8C] text-sm flex items-center justify-start gap-4 sm:gap-[30px] sm:ml-[100px]">
            <Link className="hover:text-neutral-950" href={"/"}>
              INSTAGRAM
            </Link>
            <Link className="hover:text-neutral-950" href={"/"}>
              EMAIL
            </Link>
            <Link className="hover:text-neutral-950" href={"/"}>
              ORGANIZATION
            </Link>
          </div>
        </div>
        <div>
          <Link href={"/"}>
            <p className="hidden sm:block text-sm text-[#8C8C8C] hover:text-neutral-950">
              2023
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
