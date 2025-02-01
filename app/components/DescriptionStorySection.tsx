import { FaTag, FaCalendarAlt, FaClock } from "react-icons/fa";
import Button from "./Buttons";

const DescriptionStorySection = () => {
  return (
    <div className=" border-b border-gray-300 py-6 text-gray-800">
      {/* Organizer & Category */}
      <div className="flex flex-wrap justify-between items-center text-sm md:text-base font-medium mb-4">
        <p>
          <span className="text-gray-500">ORGANISED BY:</span>{" "}
          <span className="font-bold text-black">Mariam Olawale</span>
        </p>
        <p className="flex items-center gap-1 text-[#104901] font-semibold">
          <FaTag className="text-[#104901]" />
          Medical
        </p>
      </div>

      <hr className="border-gray-300 mb-4" />

      {/* Donation Button */}
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-gray-500 text-sm md:text-base">
          WANT TO WISH HER A SPEEDY RECOVERY?
        </p>
        <Button
          text="Make a Donation"
          textColor="text-[#104901]"
          bgColor="bg-white"
          hoverBgColor="hover:bg-green-200"
        />
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Created Date */}
      <div className="flex items-center gap-4 text-[#104901] text-sm md:text-base">
        <p className="flex items-center gap-1">
          <FaCalendarAlt />
          September 5, 2023
        </p>
        <p className="flex items-center gap-1">
          <FaClock />
          5:51 pm
        </p>
      </div>
    </div>
  );
};

export default DescriptionStorySection;
