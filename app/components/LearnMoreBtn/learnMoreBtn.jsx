import { FaArrowRightLong } from "react-icons/fa6";

const LearnMoreBtn = ({ btnText }) => {
  return (
    <>
      <a class="text-secondary inline-flex gap-2 items-center">
        {btnText || `Learn More`}
        <FaArrowRightLong />
      </a>
    </>
  );
};

export default LearnMoreBtn;
