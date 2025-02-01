"use client";
import { useState } from "react";
import Image from "next/image";

import Button from "./Buttons";

import Gallery from "./Gallery";
import DonationCard from "./DonationCard";
import DescriptionStorySection from "./DescriptionStorySection";

export default function MainContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6 py-10 ">
      {/* Left Grid - Image */}
      <div className="md:col-span-3 order-1">
        <Image
          src="/Save-Mariam-from-Cancer.png"
          alt="Donation Banner"
          width={800} // Set an appropriate width
          height={500} // Set an appropriate height
          className="rounded-lg w-full"
        />
      </div>

      {/* Right Grid - Donation Card */}
      <div className="order-2 md:col-span-2 bg-white shadow-lg p-6 rounded-lg md:sticky md:top-20 self-start">
        <DonationCard />
      </div>

      {/* Description & Story Section */}
      <div className="md:col-span-3 order-3 text-[#104901]">
        <DescriptionStorySection />
        <p className="mt-8 ">
          Hello friends, We all need help from time to time.
        </p>
        <p className="mt-4 ">
          Mariam Olaitan Abike Olawale is a hardworking mother of three
          wonderful children. Though from an indigent background and despite the
          challenges life has thrown her way, Mariam is an industrious woman who
          has dedicated her life to raising her children well with hopes of a
          better lot in life for them.
        </p>
        <p className="mt-4 ">
          Unfortunately, life recently dealt Mariam a devastating blow when she
          was diagnosed with Stage 3 Invasive Carcinoma (Ductal/NST) of the
          breast. The news came as a rude shock and has understandably caused
          great fear for her fate. Prior to this awful diagnosis, she worked as
          a housekeeper for an elderly lady, however, this cruel disease has
          severely impacted her ability to work and care for her children,
          adding an enormous financial and mental burden to an already
          challenging journey.
        </p>

        {/* More Text (Hidden by Default) */}
        {isExpanded && (
          <div className="mt-2 space-y-4 text-[#104901]">
            <p>
              At present, her treatment options are still being developed but an
              immediate double mastectomy has been recommended with subsequent
              treatment planning to be determined following the outcome of an
              ImmunoHistoChemistry test..
            </p>
            <p>
              This fundraising campaign has been set up to help Mariam and her
              family to alleviate the overwhelming financial stress that has
              arisen as a result of these unfortunate circumstances. By joining
              hands and contributing to this fundraising campaign, we can help
              shift her focus from financial worries to fighting her illness
              with every ounce of strength she possesses. The funds raised will
              provide critical support in offsetting mounting medical expenses
              and general expenses pertaining to the children to ensure that
              they remained cared for whilst their mother fights this battle.
            </p>
            <p>
              We implore you to help us save the life of this amazing mother.
              Whoever you are, your contribution – no matter the size – will
              directly and significantly improve the lives of Mariam and her
              children. Let us come together to give her the courage and support
              she needs for the challenging journey ahead.
            </p>
            <p>
              We thank you for your generosity and support. Please share this
              message far and wide. May we all find kindness in our time of
              need.
            </p>
          </div>
        )}

        {/* Toggle Button */}
        <button
          className="mt-4 bg-[#104901] text-white px-4 py-2 rounded-md"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>

        {/* Image Gallery */}
        <Gallery />

        <div className="mt-8 border-t border-b border-gray-300 py-6 text-gray-800">
          {/* Organizer & Category */}
          <div className="flex flex-wrap justify-between items-center">
            <p className="p-4 text-2xl font-semibold md:text-2xl">
              Additional Information
            </p>
          </div>

          <hr className="border-gray-300 mb-4" />

          <div className="flex flex-wrap justify-between items-center">
            <p className="p-4 text-2xl font-semibold md:text-2xl">Updates</p>
          </div>

          <hr className="border-gray-300 mb-4" />

          <div className="p-4 flex flex-wrap justify-between items-center bg-[#f8f8f8] text-[#104901] ">
            <p className=" text-xs font-medium md:text-xs ">
              Chainfundit is a multi-currency fundraising platform for
              registered charities, as well as individuals with life and medical
              emergencies.
            </p>
            <p className="pt-5 text-xs font-medium md:text-xs ">
              The above fundraiser has been verified by our team. As an
              organization, we take proactive steps to ensure that campaigns
              promoted on our platform and all our social channels are genuine
              needs. Where possible, donations are transferred directly to the
              institutions rather than to the individuals in a bid to provide
              comfort that the funds raised will be used for the intended
              campaign objectives. We provide post-fundraising updates, share
              success stories of campaigns and make same available to the
              community of donors for transparency and accountability where
              possible.
            </p>
            <p className="pt-5 text-xs font-medium md:text-xs ">
              Campaign organisers and donors should note that the progress bar
              in each Fundraising Campaign will be updated from time to time
              (where applicable) to reflect the donations raised on the
              platform, donations raised on other fundraising platforms by the
              Campaign Organisers and/or any other combined effort towards the
              Fundraising Campaign.
            </p>
          </div>

          <hr className="border-gray-300 my-4" />
          <div className="p-4 flex flex-wrap space-x-6 items-center">
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

          <hr className="border-gray-300 my-4" />

          <div className="">
            <p className="p-4 text-2xl font-semibold md:text-2xl">
              Words of Support
            </p>
            <p className="pt-4 text-xs font-medium md:text-xs text-[#104901]">
              Only donations with comments are displayed here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
