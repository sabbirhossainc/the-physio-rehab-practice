"use client";

import { Blog } from "@/app/components/Templates/blog/Blog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import { GoHome } from "react-icons/go";

const Breadcrumb = () => {
  const location = usePathname().split("/");
  let lastLink = location.splice(-1, 1).toString();
  const pattern = /\W/g;

  const crumbs = location
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      return (
        <div className="flex items-center" key={index}>
          <Link
            href={`/${crumb}`}
            className="text-base font-medium text-body-color dark:text-dark-6 dark:hover:text-primary hover:text-primary capitalize"
          >
            {crumb.replace(pattern, " ")}
          </Link>
          <span className="px-3 text-body-color dark:text-dark-6">
            <FaAngleRight />
          </span>
        </div>
      );
    });
  return (
    <>
      <Blog>
        <div className="flex px-4 py-2 w-full border rounded-lg border-primary shadow-md">
          <div className="flex items-center">
            <div className="flex items-center">
              <Link
                href={"/"}
                className="flex items-center text-base font-medium capitalize hover:text-primary dark:hover:text-primary text-dark dark:text-white"
              >
                <span className="pr-2">
                  <GoHome />
                </span>
                home
              </Link>
              <span className="px-3 text-body-color dark:text-dark-6">
                <FaAngleRight />
              </span>
            </div>
            {crumbs}
            <div className="text-base font-medium text-primary capitalize">
              {lastLink.replace(pattern, " ")}
            </div>
          </div>
        </div>
      </Blog>
    </>
  );
};

export default Breadcrumb;
