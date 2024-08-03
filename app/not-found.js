import BgArtTemplate from "@/Templates/bgArtTemplate/BgArtTemplate";
import { Blog } from "@/Templates/blog/Blog";
import { BackBtn, HomeBtn } from "@/Templates/buttons/Buttons";
import { GoHome } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <BgArtTemplate>
      <Blog>
        <div className="flex items-center justify-center w-full text-gray-900 py-8 px-4 border rounded-lg border-primary">
          <div className="flex flex-col items-center w-full gap-8">
            <h1 className="text-9xl md:text-16xl w-full select-none text-center font-black text-primary">
              404
            </h1>
            <p className="text-3xl font-semibold text-center">
              You have discovered a secret place!
            </p>
            <p className="text-2xl md:px-12 text-center">
              You may have mistyped the address, or Unfortunately, the page has
              been moved to another URL. Please go to back.
            </p>
            <div className="flex flex-row justify-between gap-8">
              <BackBtn>
                <IoArrowBackOutline />
                Previous Page
              </BackBtn>
              <HomeBtn>
                <GoHome />
                Home Page
              </HomeBtn>
            </div>
          </div>
        </div>
      </Blog>
    </BgArtTemplate>
  );
}
