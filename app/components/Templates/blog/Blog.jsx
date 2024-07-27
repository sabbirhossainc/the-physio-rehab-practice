import Image from "next/image";

export const Blog = ({ children }) => {
  return (
    <>
      <div class="flex flex-col gap-8 lg:w-5/6 mx-auto">{children}</div>
    </>
  );
};

export const BlogHeader = ({ children, blogTitle, blogSubTitle, addClass }) => {
  return (
    <>
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-1/3 flex flex-col items-center justify-center text-center sm:pr-8 sm:py-8">
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font text-gray-900 text-lg capitalize">
              {blogTitle}
            </h2>
            <div class="w-16 h-1 bg-primary rounded mt-2 mb-2"></div>
            <p class="text-base">{blogSubTitle}</p>
          </div>
        </div>
        <div class="flex justify-center items-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-primary sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify sm:text-left">
          <p
            class={
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
        class={
          addClass != undefined && addClass != ""
            ? `${addClass}`
            : `text-left flex flex-col gap-8`
        }
      >
        <p class="text-lg text-justify first-letter:capitalize">{children}</p>
      </div>
    </>
  );
};

export const BlogFooter = ({ children, focus, addClass }) => {
  return (
    <>
      <div
        class={
          addClass != undefined && addClass != ""
            ? `${addClass}`
            : `text-justify`
        }
      >
        <p class="text-lg first-letter:capitalize">
          {children}
          <span className="font-semibold">{` ${focus}`}</span>.
        </p>
      </div>
    </>
  );
};

export const ImageContainer = ({ addClass, src, width, height, alt }) => {
  return (
    <>
      <div class="rounded-lg h-80 overflow-hidden">
        <Image
          alt={alt != undefined && alt != "" ? `${alt}` : `content`}
          class={
            addClass != undefined && addClass != ""
              ? `${addClass} h-full w-full`
              : `object-cover object-center h-full w-full`
          }
          width={width != undefined && width != "" ? `${width}` : 400}
          height={height != undefined && height != "" ? `${height}` : 100}
          src={
            src != undefined && src != ""
              ? `${src}`
              : `https://www.dummyimage.com/1200x600`
          }
        />
      </div>
    </>
  );
};
