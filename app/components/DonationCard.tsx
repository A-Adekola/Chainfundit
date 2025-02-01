import { useState } from "react";
import Button from "./Buttons";

const currencies = {
  NGN: { symbol: "₦", amount: 130000, goal: 10000000, recentDonation: 25000 },
  USD: { symbol: "$", amount: 165, goal: 12700, recentDonation: 32 },
  GBP: { symbol: "£", amount: 130, goal: 10000, recentDonation: 25 },
};

export default function DonationCard() {
  const [currency, setCurrency] = useState<"NGN" | "USD" | "GBP">("NGN");

  return (
    <div>
      {/* Currency Switch Buttons */}
      <div className="flex justify-center space-x-3 mb-4 gap-4">
        {Object.keys(currencies).map((cur) => (
          // <Button
          //   key={cur}
          //   text={cur}
          //   textColor={`text-white`}
          //   bgColor={`bg-gray-700`}
          //   hoverBgColor={`hover:bg-gray-900`}
          //   borderColor={`border-gray-700`}
          //   shadowColor={`shadow-[6px_6px_0px_0px_grey]`}
          //   onClick={() => setCurrency(cur as "NGN" | "USD" | "GBP")}
          // />

          <button
            key={cur}
            className=" bg-green-200 text-green-900 px-2 py-1 rounded-full hover:bg-green-400 font-bold"
            onClick={() => setCurrency(cur as "NGN" | "USD" | "GBP")}
          >
            {cur}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-green-600 h-2 rounded-full"
          style={{ width: "10%" }}
        ></div>
      </div>

      {/* Donation Stats */}
      <div className="grid grid-cols-3 text-center mb-4">
        <p className="text-gray-700 font-bold">
          {currencies[currency].symbol}
          {currencies[currency].amount.toLocaleString()} <br />
          <span className="text-sm text-gray-500">raised</span>
        </p>
        <p className="text-gray-700 font-bold">
          2 <br />
          <span className="text-sm text-gray-500">donations</span>
        </p>
        <p className="text-gray-700 font-bold">
          {currencies[currency].symbol}
          {currencies[currency].goal.toLocaleString()} <br />
          <span className="text-sm text-gray-500">goal</span>
        </p>
      </div>

      {/* Donate & Share Buttons */}
      <div className="flex space-x-4  mb-4">
        <Button
          text="Donate"
          bgColor="bg-yellow-500"
          hoverBgColor="hover:bg-white"
          shadowColor="shadow-[6px_6px_0px_0px_#454545]"
        />
        <Button
          text="Share"
          bgColor="bg-yellow-300"
          hoverBgColor="hover:bg-white"
          shadowColor="shadow-[6px_6px_0px_0px_#454545]"
        />
      </div>

      {/* Recent Donations */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-bold">Anonymous</p>
        <p className="text-sm text-gray-500">September 6, 2023</p>
        <p className="text-green-600 font-bold text-lg">
          {currencies[currency].symbol}
          {currencies[currency].recentDonation.toLocaleString()}
        </p>
      </div>

      {/* View All & Currency-Specific Donate Buttons */}
      <div className="flex space-x-3 justify-center mt-4">
        <Button
          text="View All"
          textColor="text-green-900"
          bgColor="bg-white"
          hoverBgColor="hover:bg-green-100"
        />
        <Button
          text="Donate GBP"
          textColor="text-white"
          bgColor="bg-green-900"
          hoverBgColor="hover:bg-green-800"
        />
        <Button
          text="Donate USD"
          textColor="text-white"
          bgColor="bg-green-900"
          hoverBgColor="hover:bg-green-800"
        />
      </div>
    </div>
  );
}
