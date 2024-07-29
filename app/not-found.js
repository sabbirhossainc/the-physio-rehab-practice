import { BackBtn, HomeBtn } from "./ui/buttons/buttons";
import { GoHome } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import BgArtTemplate from "./components/Templates/bgArtTemplate/BgArtTemplate";

export default function NotFound() {
  return (
    <BgArtTemplate>
      <div className="flex items-center justify-center w-full text-gray-900 my-12 px-4">
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
    </BgArtTemplate>
  );
}
