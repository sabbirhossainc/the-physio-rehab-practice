import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const LinkBtn = ({ linkText, href, onClick }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <div className="h-full flex items-center border-primary border justify-evenly gap-4 p-3 rounded-lg hover:bg-primary/10 cursor-pointer hover:border-none">
            <div className="flex-grow flex items-center justify-start">
              <h2 className="text-primary title-font font-bold">{linkText}</h2>
            </div>
            <div className="w-auto h-auto justify-center items-center flex rounded-full">
              <FaArrowRightLong
                className="text-2xl text-primary"
                width={300}
                height={100}
              />
            </div>
          </div>
        </Link>
      ) : (
        <div onClick={onClick}>
          <div className="h-full flex items-center border-primary border justify-evenly gap-4 p-3 rounded-lg hover:bg-primary/10 cursor-pointer hover:border-none">
            <div className="flex-grow flex items-center justify-start">
              <h2 className="text-primary title-font font-bold">{linkText}</h2>
            </div>
            <div className="w-auto h-auto justify-center items-center flex rounded-full">
              <FaArrowRightLong
                className="text-2xl text-primary"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const LinkGroup = ({ children }) => {
  return (
    <>
      <div className="flex flex-wrap -m-2 mb-10">{children}</div>
    </>
  );
};

export const Links = ({ children }) => {
  return <div className="p-2 lg:w-1/3 md:w-1/2 w-full">{children}</div>;
};
