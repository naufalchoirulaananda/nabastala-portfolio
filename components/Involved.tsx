import React from "react";
import Image from "next/image";
import Link from "next/link";

const Involved = () => {
  return (
    <>
      <div
        id="involved"
        className="container mx-auto flex px-6 sm:px-[100px] pt-[64px] h-auto"
      >
        <div className="w-full">
          <p>
            NABASTALA <span className="text-[#8C8C8C]">INVOLVED</span>
          </p>
          <div className="w-full border-b-2 mt-[10px]"></div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center px-6 sm:px-[100px] mt-[32px] h-auto">
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-3 xl:gap-2 lg:space-y-0">
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699346410/Nabastala/Image/inv02_wx5tfu.webp"
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
                  <p className="uppercase">Hiking for Conservation</p>
                  <p className="uppercase">20/10/2023</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699346408/Nabastala/Image/inv05_lbyytg.webp"
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
                  <p className="uppercase">Biodiversity Festival</p>
                  <p className="uppercase">26/12/2023</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699346407/Nabastala/Image/inv03_mlsn2z.webp"
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
                  <p className="uppercase">Nature Photography Course</p>
                  <p className="uppercase">20/01/2024</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699346407/Nabastala/Image/inv04_ozxry2.webp"
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
                  <p className="uppercase">Environmental Cleanup</p>
                  <p className="uppercase">03/05/2024</p>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
        <p className="mt-[32px] text-justify uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
          Welcome to Nabastala Volunteer National Park! Join us as a volunteer
          and take part in preserving the rare biodiversity of this national
          park. Together, we can make a meaningful difference in preserving
          priceless nature. Let&apos;s join as a volunteer at Nabastala National
          Park and contribute to this natural beauty.{" "}
          <span className="text-black font-bold">Join us here!</span>
        </p>
        <Image
          className="mt-[32px] hidden md:block"
          src={
            "https://res.cloudinary.com/dfardrk1o/image/upload/v1699346409/Nabastala/Image/inv01_bc2fkm.webp"
          }
          alt={"naturepictone"}
          width={1500}
          height={400}
          priority={true}
          quality={100}
          sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
        />
        <Image
          className="mt-[32px] md:hidden"
          src={
            "https://res.cloudinary.com/dfardrk1o/image/upload/v1699357064/Nabastala/Image/image_6_f7vkax.webp"
          }
          alt={"naturepictone"}
          width={1500}
          height={400}
          priority={true}
          quality={100}
          sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
        />
        <p className="mt-[32px] text-justify uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
          The generosity of individuals, both through their contributions and
          their dedication, plays a pivotal role in the preservation and
          enhancement of Nabastala National Park. Donations can be directed to
          support the park in various ways:
        </p>

        <div className="container mt-[32px] space-y-8 lg:grid lg:grid-cols-2 sm:gap-3 xl:gap-2 lg:space-y-0">
          <Link href={"/"} className="flex flex-row items-center justify-between px-[40px] py-[18px] bg-neutral-950 text-[#8C8C8C] w-full">
            <p className="uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
              Direct Donations to Nabastala National Park
            </p>
            <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#8c8c8c" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </Link>
          <Link href={"/"} className="flex flex-row items-center justify-between px-[40px] py-[18px] bg-neutral-950 text-[#8C8C8C] w-full">
            <p className="uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
              Nabastala Park Friends Group
            </p>
            <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#8c8c8c" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </Link>
          <Link href={"/"} className="flex flex-row items-center justify-between px-[40px] py-[18px] bg-neutral-950 text-[#8C8C8C] w-full">
            <p className="uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
              Purchase from the Nabastala National Park Bookstore
            </p>
            <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#8c8c8c" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </Link>
          <Link href={"/"} className="flex flex-row items-center justify-between px-[40px] py-[18px] bg-neutral-950 text-[#8C8C8C] w-full">
            <p className="uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
              National Park Foundation
            </p>
            <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#8c8c8c" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </Link>
        </div>

        <p className="mt-[32px] text-justify uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
          Every contribution, regardless of its size or form, makes a
          significant difference in safeguarding the natural and cultural
          treasures of Nabastala National Park. Your support is invaluable, and
          we extend our heartfelt gratitude. Together, we can continue to
          protect and preserve this exceptional natural sanctuary. Thank you!
        </p>
      </div>
    </>
  );
};

export default Involved;
