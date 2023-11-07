import React from "react";
import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <>
      <div
        id="explore"
        className="container mx-auto flex px-6 sm:px-[100px] pt-[64px] h-auto"
      >
        <div className="w-full">
          <p>
            NABASTALA <span className="text-[#8C8C8C]">EXPLORE</span>
          </p>
          <div className="w-full border-b-2 mt-[10px]"></div>
          <Image
            className="mt-[32px] hidden md:block"
            src={
              "https://res.cloudinary.com/dfardrk1o/image/upload/v1699356398/Nabastala/Image/nature5_ge8rwz_tqb8o7.webp"
            }
            alt={"naturepictone"}
            width={1500}
            height={400}
            priority={true}
            sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
          />
          <Image
            className="mt-[32px] md:hidden"
            src={
              "https://res.cloudinary.com/dfardrk1o/image/upload/v1699356595/Nabastala/Image/image_5_dqtubl.webp"
            }
            alt={"naturepictone"}
            width={1500}
            height={400}
            priority={true}
            sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
          />
          <p className="mt-[32px] text-justify uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
            Nabastala National Park is a nature reserve which is considered an
            invaluable natural treasure in Indonesia. Historically, this
            national park began to be protected to preserve its unique
            biodiversity since 1987. Since then, the journey to preserve
            Nabastala National Park has become a major concern for scientists,
            environmental conservationists and the local government. The park is
            a sanctuary for many rare plant species that can only be found in
            this region, as well as being home to a variety of living creatures
            that support life in the unspoiled wilderness. Since the beginning
            of this conservation journey, ongoing efforts to maintain the
            integrity of the Nabastala National Park ecosystem have been a
            priority to ensure that this priceless natural heritage can be
            enjoyed by future generations.
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center px-6 sm:px-[100px] mt-[32px] h-auto">
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-3 xl:gap-2 lg:space-y-0">
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344664/Nabastala/Image/nature6_wscrja.webp"
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
                  <p className="uppercase">Historical Traces of Nabastala National Park</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344664/Nabastala/Image/nature7_ui7fop.webp"
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
                  <p className="uppercase">The Mystery of the Nabastala<br /> Forest</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344663/Nabastala/Image/nature13_jxtbok.webp"
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
                  <p className="uppercase">the Struggle to Protect Rare<br /> Plants </p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344662/Nabastala/Image/nature11_zdd2qu.webp"
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
                  <p className="uppercase">Human Traces in Nabastala National<br /> Park</p>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center px-6 sm:px-[100px] mt-[32px] sm:mt-[10px] h-auto">
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-3 xl:gap-2 lg:space-y-0">
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344663/Nabastala/Image/nature12_sztcer.webp"
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
                  <p className="uppercase">Traditions Knowledge in Preserving Nabastala</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344662/Nabastala/Image/nature9_lrpmvh.webp"
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
                  <p className="uppercase">A Study of Climate History in Nabastala National Park</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344666/Nabastala/Image/nature8_n7jbvd.webp"
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
                  <p className="uppercase">Recent Findings and Research in Nabastala National Park</p>
                </figcaption>
              </figure>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <figure className="relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dfardrk1o/image/upload/v1699344665/Nabastala/Image/nature10_ks3wx3.webp"
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
                  <p className="uppercase">People Who Shaped the History of Nabastala Protection</p>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
