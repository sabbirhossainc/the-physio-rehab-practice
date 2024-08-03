"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";


export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    const toggleVisibilityHeight = 550;
    const scroller =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scroller > toggleVisibilityHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="hidden md:block fixed z-50 bottom-28 md:bottom-16 right-10 rounded-full bg-secondary w-12 md:w-16 h-12 md:h-16 justify-center items-center shadow-sm-light shadow-black text-white antialiased hover:bg-primary"
          onClick={scrollUp}
        >
          <IoIosArrowUp className="text-3xl h-12 md:h-16 w-12 md:w-16 p-3 md:p-4 animate-none" />
        </button>
      )}
    </>
  );
};


export const BackBtn = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={router.back}
        className="flex justiy-center items-center gap-2 px-3 py-2 text-base rounded-md text-black border border-secondary hover:bg-secondary hover:text-white"
      >
        {children}
      </button>
    </>
  );
};

export const HomeBtn = ({ children }) => {
  return (
    <>
      <Link
        href={"/"}
        className="flex justiy-center items-center gap-2 px-3 py-2 text-base rounded-md text-black border border-primary hover:bg-primary hover:text-white"
      >
        {children}
      </Link>
    </>
  );
};


export const LearnMoreBtn = ({ btnText,href }) => {
  return (
    <>
      <Link href={href} className="text-secondary inline-flex gap-2 items-center">
        {btnText || `Learn More`}
        <FaArrowRightLong />
      </Link>
    </>
  );
};

export const DropDownBtn = ({ btnText,href }) => {
  return (
    <>
      <Link href={href} className="absolute bottom-0 text-secondary inline-flex items-center">
        {btnText}
        <div className="rotate-180">
        <IoIosArrowUp className="text-3xl h-12 md:h-16 w-12 md:w-16 p-3 md:p-4 animate-bounce" />
        </div>
      </Link>
    </>
  );
};

export const GlobalBtn = ({btnText,onclick}) =>{
  return (
    <>
    <button className="flex justiy-center items-center gap-2 px-3 py-2 text-base rounded-md text-black border border-primary hover:bg-primary hover:text-white" onClick={ onclick }>{btnText}</button>
    </>
  )
}