// "use client";

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

const footer = () => {
  return (
    <div className="">
      <footer className="text-gray-400 bg-gray-900">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-96 flex flex-col md:mx-0 mx-auto items-center justify-center text-center md:text-left gap-2">
            <Link
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            >
              <Image
                src={
                  "https://res.cloudinary.com/dci00bjtd/image/upload/f_auto,q_auto/v1/images/logo_bbeuz2"
                }
                className="rounded-md w-28 h-28"
                alt="Logo"
                width={400}
                height={100}
                quality={100}
              />
            </Link>
            <span className="text-xl uppercase">The physio rehab practice</span>
            <p className="text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap items-center justify-center md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {/* Company section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ml-auto">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Brand Center
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
              </nav>
            </div>
            {/* Help center section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                HELP CENTER
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-gray-400 hover:text-white"
                  ></Link>
                </li>
              </nav>
            </div>
            {/* Legal section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                LEGAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 the-physio-rehab-practice — Developed By
              <Link
                href="https://github.com/sabbirhossainc"
                rel="noopener noreferrer"
                className="text-secondary ml-1"
                target="_blank"
              >
                sabbirhossainc
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="" className="text-gray-400">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href="" className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link href="" className="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link href="" className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
