import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <div className="px-5">
      <div className="max-w-sm rounded-lg shadow-gray-400 shadow-sm-light dark:bg-gray-800 dark:border-gray-700">
        <Link href="">
          <Image className="rounded-t-lg" src={props.url} alt={props.alt} />
        </Link>
        <div className="p-5">
          <Link href="">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white text-center">
              {props.heading}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
            {props.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
