import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center px-6 sm:px-[100px] mt-[64px] h-auto">
        <p className="text-4xl sm:text-[64px] font-medium tracking-wider">
          NABASTALA NATIONAL PARK
        </p>
        <p className="mt-[32px] text-justify sm:text-center uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
          Nabastala National Park is a hidden natural paradise, located within
          dense forests and beautiful mountains. This national park is known for
          protecting and maintaining a variety of rare plant species that are
          difficult to find elsewhere. Every corner of this national park exudes
          natural wonder, from mountain peaks to lush green valleys.
        </p>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center px-6 sm:px-[100px] mt-[50px] h-auto">
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-3 xl:gap-2 lg:space-y-0">
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699356365/Nabastala/Image/nature1_zgm1lu_gj94zn.webp"
                  }
                  alt={"naturepictone"}
                  width={400}
                  height={400}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
              (max-width: 768px) 80vw,
              (max-width: 1024px) 60vw,
              50vw
              "
                />
                <figcaption className="absolute px-[24px] text-[12px] text-[#8C8C8C] bottom-6">
                  <p>MONSTERA</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699356349/Nabastala/Image/nautre2_t96igq_en5sw7.webp"
                  }
                  alt={"naturepictone"}
                  width={400}
                  height={400}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
              (max-width: 768px) 80vw,
              (max-width: 1024px) 60vw,
              50vw
              "
                />
                <figcaption className="absolute px-[24px] text-[12px] text-[#8C8C8C] bottom-6">
                  <p>PALM</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699356384/Nabastala/Image/nature3_dxmvcs_j3ljwu.webp"
                  }
                  alt={"naturepictone"}
                  width={400}
                  height={400}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
              (max-width: 768px) 80vw,
              (max-width: 1024px) 60vw,
              50vw
              "
                />
                <figcaption className="absolute px-[24px] text-[12px] text-[#8C8C8C] bottom-6">
                  <p>FERN</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699356398/Nabastala/Image/nature4_ikxxci_o2m7yb.webp"
                  }
                  alt={"naturepictone"}
                  width={400}
                  height={400}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
              (max-width: 768px) 80vw,
              (max-width: 1024px) 60vw,
              50vw
              "
                />
                <figcaption className="absolute px-[24px] text-[12px] text-[#8C8C8C] bottom-6">
                  <p>PHILODENDRON</p>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
