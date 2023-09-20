import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaEdit, FaUser, FaCog, FaBars } from "react-icons/fa";
import PortofolioForm from "@/components/layouts/PortofolioForm/page";
import PortofolioTable from "@/components/layouts/PortofolioTable/page";
import Setting from "@/components/layouts/setting/page";
import EditProfile from "@/components/layouts/EditProfile/page";

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Use state to manage which component to render
  const [displayForm, setDisplayForm] = useState(false);
  const [displaySetting, setDisplaySetting] = useState(false); // State for rendering Setting
  const [displayEditProfile, setDisplayEditProfile] = useState(false); // State for rendering EditProfile

  return (
    //create full code of hamburger here
    <div className="flex flex-col lg:flex-row ">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-r from-fuchsia-500 to-pink-500 shadow-lg h-screen  hidden lg:block space-y-6 ">
        <div className="p-4 ">
          <h1 className="text-2xl font-semibold text-gray-800">DASHBOARD</h1>
        </div>
        <ul className="mt-4 space-y-6">
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(false);
                setDisplaySetting(false);
                setDisplayEditProfile(false);
              }}
            >
              <FaHome className="inline-block mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(true);
                setDisplaySetting(false);
                setDisplayEditProfile(false);
              }}
            >
              <FaEdit className="inline-block mr-2" /> Post
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(false);
                setDisplaySetting(false);
                setDisplayEditProfile(true);
              }}
            >
              <FaUser className="inline-block mr-2" /> Edit Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => {
                setDisplayForm(false);
                setDisplaySetting(true);
                setDisplayEditProfile(false);
              }}
            >
              <FaCog className="inline-block mr-2" /> Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full  lg:h-full">
        <div className=" bg-gradient-to-r from-fuchsia-500 to-pink-500">
          {/* Hamburger Icon */}
          <button
            className="lg:hidden block"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <FaBars className="text-2xl text-gray-800  " />
          </button>

          {/* Mobile Navbar Dropdown */}
          {isMobileMenuOpen && (
            <div className="  bg-gradient-to-r from-fuchsia-500 to-pink-500  shadow-lg min-h-max lg:hidden">
              <div className="p-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                  DASHBOARD
                </h1>
              </div>
              <ul className="mt-4">
                <li className="mb-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setDisplayForm(false);
                      setDisplaySetting(false);
                      setDisplayEditProfile(false);
                    }}
                  >
                    <FaHome className="inline-block mr-2" /> HOME
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setDisplayForm(true);
                      setDisplaySetting(false);
                      setDisplayEditProfile(false);
                    }}
                  >
                    <FaEdit className="inline-block mr-2" /> POST
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setDisplayForm(false);
                      setDisplaySetting(false);
                      setDisplayEditProfile(true);
                    }}
                  >
                    <FaUser className="inline-block mr-2" /> USER
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setDisplayForm(false);
                      setDisplaySetting(true);
                      setDisplayEditProfile(false);
                    }}
                  >
                    <FaCog className="inline-block mr-2" /> SETTINGS
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 mt-10  overflow-auto">
          {displayForm ? (
            <PortofolioForm />
          ) : displaySetting ? (
            <Setting />
          ) : displayEditProfile ? (
            <EditProfile />
          ) : (
            <PortofolioTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
