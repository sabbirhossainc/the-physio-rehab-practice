"use client";

import Logo from "@/public/logo-1.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavComp() {
  // Get Current Path
  const path = usePathname().replace("/", "");

  // handel show hide state for dropdown
  const [show, setShow] = useState(false);

  function handleDropdown() {
    setShow(!show);
  }

  const handelClass = (type = null) => {
    let staticClass =
      "block py-2 px-3 rounded text-gray-900 hover:text-blue-700 md:p-0";
    if (type === path) {
      staticClass -= "text-gray-900";
      staticClass += " text-blue-700";
    } else {
      staticClass += "";
    }
    return staticClass;
  };

  const handelClassDropdown = (type = null) => {
    let staticClassDropdown = "block px-4 py-2 hover:bg-gray-100 text-gray-900";
    if (type === path) {
      staticClassDropdown -= "text-gray-900";
      staticClassDropdown += " block px-4 py-2 hover:bg-gray-100 text-blue-700";
    } else {
      staticClassDropdown += "";
    }
    return staticClassDropdown;
  };

  const outsideDetection = () => {
    const dropdownContainer = document.getElementById("dropdownContainer");
    const dropdownNavbar = document.getElementById("dropdownNavbar");

    window.addEventListener("click", (e) => {
      if (!dropdownContainer.contains(e.target)) {
        dropdownNavbar.classList.add("hidden");
      }
    });
  };

  useEffect(() => {
    outsideDetection();
    handelClass();
    handelClassDropdown();
  });

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={Logo} className="mr-3 w-44 h-20" alt="Logo" priority />
          </Link>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/home" className={handelClass("home")}>
                  Home
                </Link>
              </li>
              {/* dropdown link */}

              <li id="dropdownContainer">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-center w-full p-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={handleDropdown}
                >
                  Dropdown
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  className={
                    show
                      ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-md border-t-2 border-blue-700 shadow-md shadow-gray-700 w-44 mt-1 dark:bg-gray-700 dark:divide-gray-600"
                      : "hidden"
                  }
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/home"
                        className={handelClassDropdown("home")}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/set" className={handelClassDropdown("set")}>
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/earn"
                        className={handelClassDropdown("earn")}
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signout"
                        className={handelClassDropdown("signout")}
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/about" className={handelClass("about")}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/serv" className={handelClass("serv")}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className={handelClass("contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}