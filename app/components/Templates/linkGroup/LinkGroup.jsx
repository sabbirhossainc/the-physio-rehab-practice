import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const LinkBtn = ({ linkText, href }) => {
  return (
    <>
      <Link href={href}>
        <div class="h-full flex items-center border-primary border justify-evenly gap-4 px-4 py-2 rounded-lg hover:bg-primary/10 cursor-pointer hover:border-none">
          <div className="flex-grow">
            <h2 class="text-primary title-font font-bold">{linkText}</h2>
          </div>
          <div className="w-auto h-auto p-3 justify-center items-center flex rounded-full">
            <FaArrowRightLong
              className="text-2xl text-primary"
              width={300}
              height={100}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export const LinkGroup = ({ children }) => {
  return (
    <>
      <div class="flex flex-wrap -m-2 mb-10">{children}</div>
    </>
  );
};

export const Links = ({ children }) => {
  return <div className="p-2 lg:w-1/3 md:w-1/2 w-full">{children}</div>;
};
