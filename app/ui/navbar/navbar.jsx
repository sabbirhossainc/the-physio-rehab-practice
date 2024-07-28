"use client";

import Logo from "@/public/logo-1.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavComp() {
  // Get Current Path
  const path = usePathname().replace("/", "");

  // handel show hide state for dropdown
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // dropdown item
  const data = [
    {
      id: "1",
      href: "/musculoskeletal",
      path: "musculoskeletal",
      name: "musculoskeletal",
    },
    {
      id: "2",
      href: "/sports-massage",
      path: "sports-massage",
      name: "SPORTS MASSAGE",
    },
    {
      id: "3",
      href: "/acupuncture-birmingham",
      path: "acupuncture-birmingham",
      name: "ACUPUNCTURE BIRMINGHAM",
    },
    {
      id: "4",
      href: "/physiotherapist",
      path: "physiotherapist",
      name: "PHYSIOTHERAPY",
    },
  ];

  // handel className for navbar
  const handelClass = (type = null) => {
    let staticClass =
      "block py-2 px-3 rounded text-gray-900 hover:text-blue-700 font-semibold uppercase md:p-0";
    if (type === path) {
      staticClass -= "text-gray-900";
      staticClass +=
        " block py-2 px-3 rounded text-blue-700 hover:text-blue-700 font-semibold uppercase md:p-0";
    } else {
      staticClass += "";
    }
    return staticClass;
  };

  // handel className for navbar dropdown
  const handelClassDropdown = (type = null) => {
    let staticClassDropdown = "block px-4 py-2 hover:bg-gray-100 text-gray-900 uppercase font-medium";
    if (type === path) {
      staticClassDropdown -= "text-gray-900";
      staticClassDropdown += " block px-4 py-2 hover:bg-gray-100 text-blue-700 uppercase font-medium";
    } else {
      staticClassDropdown += "";
    }
    return staticClassDropdown;
  };

  // Get outside mouse position except dropdown
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
      <nav className="bg-gray-200 dark:bg-gray-900 fixed z-20 w-full top-0">
        <div className="max-w-xs md:max-w-7xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex justify-between items-center gap-44">
            <Link href="/">
              <Image
                src={Logo}
                className="rounded-md w-auto h-32 py-2"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </Link>
            <div className="md:hidden ml-auto">
              <button className="p-2" onClick={() => setShowMenu(!showMenu)}>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              showMenu
                ? "items-center justify-between w-full md:flex md:w-auto"
                : "hidden items-center justify-between w-full md:flex md:w-auto"
            }
            id="navbar-dropdown"
          >
            <ul className="flex flex-col md:py-8 mt-2 font-medium border border-blue-500 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* <li>
                <Link href="/location" className={handelClass("location")}>
                  LOCATION
                </Link>
              </li> */}

              {/* dropdown Button */}

              <li id="dropdownContainer">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-start w-full p-4 text-gray-900 font-semibold rounded-md md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={() => setShow(!show)}
                >
                  WHAT WE TREAT
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
                    {data?.map((item, index) => (
                      <span key={index}>
                        <li>
                          <Link
                            href={item.href}
                            className={handelClassDropdown(`${item.path}`)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      </span>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/appointments"
                  className={handelClass("appointments")}
                >
                  appointments
                </Link>
              </li>
              <li>
                <Link href="/services" className={handelClass("services")}>
                 SERVICES
                </Link>
              </li>
              <li>
                <Link href="/contact" className={handelClass("contact")}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
