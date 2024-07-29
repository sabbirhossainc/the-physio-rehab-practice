import { marquee as marqueeData } from "@/lib/marquee";
import Image from "next/image";
import Link from "next/link";

const marquee = () => {
  return (
    <>
      <div className="bg-icon-bg">
        <div className="max-w-xs md:max-w-7xl flex flex-col items-center justify-between mx-auto gap-6 py-6">
          {/* <h2 className="text-4xl">Our Sponsors</h2> */}
          <div className="marquee mask w-full flex overflow-hidden select-none h-56 gap-4">
            <div className="marquee__content flex shrink-0 items-center justify-around min-w-full gap-4">
              {marqueeData?.map((items, index) => (
                <div className="" key={index}>
                  <Link href={items.link}>
                    <Image
                      className="h-32 w-auto rounded-md shadow-md hover:h-36 hover:duration-75"
                      src={items.url}
                      alt=""
                      width={400}
                      height={100}
                    />
                  </Link>
                </div>
              ))}
            </div>
            {/* <!-- Mirrors the content above --> */}
            <div
              className="marquee__content flex shrink-0 items-center justify-around min-w-full gap-4"
              aria-hidden="true"
            >
              {marqueeData?.map((items, index) => (
                <div className="" key={index}>
                  <Link href={items.link}>
                    <Image
                      className="h-32 w-auto rounded-md shadow-md hover:h-36 hover:duration-75"
                      src={items.url}
                      alt=""
                      width={400}
                      height={100}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default marquee;
