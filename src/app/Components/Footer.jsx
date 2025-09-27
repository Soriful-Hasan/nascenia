import React from "react";

import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaDribbble,
  FaPinterestP,
} from "react-icons/fa6";
import { FaPhoneAlt, FaMapMarkerAlt, FaHandshake } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Grow Your Online Business and Improve Customer Retention
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" /> +880 1537-570379
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" /> House D/36, Block
              E, Lalmatia, Dhaka-1207
            </li>
            <li className="flex items-center gap-3 cursor-pointer text-orange-500 font-medium">
              <FaHandshake /> Get Estimate
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-gray-700 text-xl ">
            <FaFacebookF className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaDribbble className="cursor-pointer" />
            <FaPinterestP className="cursor-pointer" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Cutting Edge</li>
            <li>Quality Assurance (QA)</li>
            <li>Cyber Security</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Uddogi: NBR approved VAT software</li>
            <li>Biyeta: A matrimonial SaaS</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Services</li>
            <li>Contact Us</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600  pt-6">
        <p>© 2025 DeshIT-BD.ltd</p>
        <div className="flex gap-4">
          <a href="#" className="text-orange-500">
            Sitemap
          </a>{" "}
          |
          <a href="#" className="text-orange-500">
            Privacy Policy
          </a>
        </div>
        <a href="#" className="text-black inline">
          Download Brochure: <span className="text-orange-500">English</span>
        </a>
        <p>info@deshit-bd.com</p>
      </div>
    </footer>
  );
}
