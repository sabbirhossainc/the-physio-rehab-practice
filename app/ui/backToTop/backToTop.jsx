"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
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

export default BackToTop;
