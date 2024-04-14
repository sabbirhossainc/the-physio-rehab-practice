import Card from "@/app/components/card/card";

import { data } from "@/lib/cardData";

const service = () => {
  return (  
    <div className="py-24 bg-gray-200">

    <div className="container flex flex-wrap justify-center items-center gap-16 min-w-7xl mx-auto">
      {data?.map((item, index) => (
        <div key={index} className="flex-shrink-0 sm:flex-col md:flex-row px-5">
          <Card
            url={item.url}
            alt={item.alt}
            heading={item.heading}
            body={item.body}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default service;
