import { FiMail, FiPhoneCall } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import BgArtTemplate from "@/Templates/bgArtTemplate/BgArtTemplate";
import { Blog } from "../components/Templates/blog/Blog";

export async function generateMetadata() {
  const title = "contact" ;
  const description = "contact us" ;
  return {
    title: title.toUpperCase(),
    description: description,
  };
}

const contact = () => {
  return (
    <BgArtTemplate>
      <Blog>
      <div className="flex flex-col w-full gap-8">
        <span className=" block text-3xl md:text-5xl font-bold text-primary text-center">
          Contact Us
        </span>
        <div className="mb-12 max-w-[570px] lg:mb-0">
          <h2 className="mb-6 text-xl md:text-3xl font-bold  first-letter:capitalize text-black dark:text-white text-center md:text-left">
            get in touch with us
          </h2>
          <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore e dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
          <div className="mb-8 flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
              <GoHome height={100} width={100} className="text-4xl" />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                Our Location
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                99 S.t Jomblo Park Pekanbaru 28292. Indonesia
              </p>
            </div>
          </div>

          <div className="mb-8 flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
              <FiPhoneCall height={100} width={100} className="text-3xl" />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                Phone Number
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                (+62)81 414 257 9980
              </p>
            </div>
          </div>

          <div className="mb-8 flex w-full max-w-[370px]">
            <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
              <FiMail height={100} width={100} className="text-3xl" />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                Email Address
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                info@{process.env.SITE_DOMAIN_NAME}
              </p>
            </div>
          </div>
        </div>
      </div>
      </Blog>
    </BgArtTemplate>
  );
};

export default contact;
