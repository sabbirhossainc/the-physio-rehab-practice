import Image from "next/image";

export const Blog = ({ children,id }) => {
  return (
    <>
      <div className="flex flex-col gap-8 w-full lg:w-5/6 mx-auto scroll-mt-40" id={id}>{children}</div>
    </>
  );
};

export const BlogHeader = ({ children, blogTitle, blogSubTitle, addClass }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 flex flex-col items-center justify-center text-center sm:pr-8 sm:py-8">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font text-gray-900 text-lg capitalize">
              {blogTitle}
            </h2>
            <div className="w-16 h-1 bg-primary rounded mt-2 mb-2"></div>
            <p className="text-base">{blogSubTitle}</p>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-primary sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify sm:text-left">
          <p
            className={
              addClass != undefined && addClass != ""
                ? `${addClass}`
                : `text-lg first-letter:capitalize`
            }
          >
            {children}
          </p>
        </div>
      </div>
    </>
  );
};

export const BlogBody = ({ children, addClass }) => {
  return (
    <>
      <div
        className={
          addClass != undefined && addClass != ""
            ? `${addClass}`
            : `text-left flex flex-col gap-8`
        }
      >
        <p className="text-lg text-justify first-letter:capitalize">{children}</p>
      </div>
    </>
  );
};

export const BlogFooter = ({ children, focus, addClass }) => {
  return (
    <>
      <div
        className={
          addClass != undefined && addClass != ""
            ? `${addClass}`
            : `text-justify`
        }
      >
        <p className="text-lg first-letter:capitalize">
          {children}
          <span className="font-semibold">{` ${focus}`}</span>.
        </p>
      </div>
    </>
  );
};

export const ImageContainer = ({ divClass,addClass, src, width, height, alt }) => {
  return (
    <>
      <div className={divClass != undefined && divClass != ""? `${divClass}` : "rounded-lg h-80 overflow-hidden ring-1 ring-primary shadow-lg"}>
        <Image
          alt={alt != undefined && alt != "" ? `${alt}` : `no-content`}
          src={
            src != undefined && src != ""
              ? `${src}`
              : `https://www.dummyimage.com/1200x600`
          }
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk4G4vAgABqwEGEzLyIQAAAABJRU5ErkJggg=="
          quality={100}
          width={width != undefined && width != "" ? `${width}` : 400}
          height={height != undefined && height != "" ? `${height}` : 100}
          className={
            addClass != undefined && addClass != ""
              ? `${addClass} h-full w-full`
              : `object-cover object-center h-full w-full`
          }
        />
      </div>
    </>
  );
};
