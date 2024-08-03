import Card from "@/app/components/card/card";

import { data } from "@/lib/cardData";

const Service = () => {
  return (
    <>
      <div className=" bg-gray-200 ">
        <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap gap-10 py-24 md:max-w-7xl mx-auto ">
          {data?.map((item, index) => {
            return (
              <span key={index} className="">
                <Card
              url={item.url}
              alt={item.alt}
              heading={item.heading}
              body={item.body}
            />
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
