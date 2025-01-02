import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import data from "./data/data";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const splitText = (text) => {
    const lines = text.split("\n");
    return (
      <div className="mb-10">
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col  items-center justify-center overflow-hidden px-4 bg-gray-100">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black">LMS Documentation</h1>
      </div>
      <div className="flex md:flex-row flex-col justify-start  gap-5 bg-white p-6 rounded-lg shadow-2xl w-full h-[90vh] overflow-hidden">
        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar}>
            {!isSidebarOpen && (
              <FaBars className="h-6 w-6 text-black flex z-[999]" />
            )}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-100 z-50 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:bg-transparent md:w-1/3 md:p-4`}
        >
          <div className="flex flex-col h-full md:relative">
            <div className="flex justify-end md:hidden p-4">
              <button onClick={toggleSidebar}>
                <FaTimes className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="overflow-y-auto flex flex-col justify-start items-baseline ">
              {data.map((section, index) => (
                <div key={index} className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer md:flex md:justify-center text-blue-600"
                    onClick={() => {
                      setSelectedSection(section);
                      toggleSidebar();
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="hidden md:block border-l border-gray-300"></div>
        <div className="w-full md:w-2/3 p-4 overflow-y-scroll">
          {selectedSection ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 sm:flex sm:justify-center">
                {selectedSection.title}
              </h2>
              {selectedSection.description && (
                <p className="mb-5">{splitText(selectedSection.description)}</p>
              )}
              {selectedSection.subTitle &&
                selectedSection.subTitle.map((pro, i) => (
                  <div key={i}>
                    <h2 className="text-2xl flex m-3 justify-center font-bold relative before:absolute before:content-[''] before:-top-1 before:h-[1px] before:w-full before:bg-black">
                      {pro.title1}
                    </h2>
                    {pro.image1 && (
                      <img src={pro.image1} alt={pro.title} className="mt-4" />
                    )}
                    {pro.description && <p>{splitText(pro.description)}</p>}
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-4xl font-bold">WELCOME TO LMS GUIDE</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
