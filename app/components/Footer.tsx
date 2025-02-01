import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
// import paystackLogo from "../assets/paystack.png"; // Update with correct path
// import stripeLogo from "../assets/stripe.png"; // Update with correct path
// import visaLogo from "../assets/visa.png"; // Update with correct path
// import mastercardLogo from "../assets/mastercard.png"; // Update with correct path
// import amexLogo from "../assets/amex.png"; // Update with correct path
// import applepayLogo from "../assets/applepay.png"; // Update with correct path

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Section (2/5 on larger screens) */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-semibold text-#222">
            The New, Fun and Rewarding Way to Crowdfund.
          </h2>
          <p className="mt-5 text-gray-700 text-base">+44 20 3838 0360</p>
          <p className="text-gray-700 text-base">CAMPAIGNS@CHAINFUNDIT.COM</p>
          {/* Social Media Icons */}
          <div className="flex gap-3 mt-5">
            <FaFacebookF className="text-white bg-blue-600 p-2 rounded-lg w-10 h-10 cursor-pointer" />
            <FaTwitter className="text-white bg-blue-400 p-2 rounded-lg w-10 h-10 cursor-pointer" />
            <FaInstagram className="text-white bg-blue-500 p-2 rounded-lg w-10 h-10 cursor-pointer" />
            <FaYoutube className="text-white bg-red-600 p-2 rounded-lg w-10 h-10 cursor-pointer" />
            <FaLinkedin className="text-white bg-blue-700 p-2 rounded-lg w-10 h-10 cursor-pointer" />
            <FaTiktok className="text-white bg-black p-2 rounded-lg w-10 h-10 cursor-pointer" />
          </div>
        </div>

        {/* Middle Sections (1/5 each) */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-gray-900 text-xl text-#353535">
            ChainFund for
          </h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-lg  text-#454545">
            <li>Medical Emergencies</li>
            <li>Business</li>
            <li>Memorials</li>
            <li>Events & Weddings</li>
            <li>Education</li>
            <li>Sports</li>
            <li>Charity</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold text-gray-900 text-xl">Discover</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-lg text-#454545">
            <li>About Us</li>
            <li>How ChainFundIt Works</li>
            <li>Join the Chain Reaction</li>
            <li>Careers</li>
            <li>Success Stories</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold text-gray-900 text-xl">Resources</h3>
          <ul className="mt-2 space-y-1 text-gray-700 text-lg text-#454545">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Ambassador Agreement</li>
            <li>Fundraising Tips</li>
            <li>Fundraising Ideas</li>
            <li>Contact Us</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10  border-t pt-5">
        <p className="text-green-900">
          © 2025 Mariam Olawale — a ChainFundIt microsite.
        </p>

        {/* Payment Icons */}
        <div className="flex items-center space-x-3">
          <img src="./secured.png" alt="Paystack" className="h-7" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
