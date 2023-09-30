import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import PortfolioData from "./portofolioData";
import CardProject from "../CardProject/page";

export default function Carousel() {
  const portfolioItems = PortfolioData();
  const itemsPerPage = 3; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = portfolioItems.slice(startIndex, endIndex);

  return (
    <div>
        <h1 className=" text-center text-4xl animate-bounce font-bold ">MY LASTED PROJECT</h1>
      <div className="flex lg:flex-row lg:mx-4 flex-col justify-center duration-700 ease-in-out">
        {visibleItems.map((item, index) => (
          <CardProject
            key={index}
            imageSrc={item.imageSrc}
            company={item.company}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="text-2xl mr-4"
          onClick={handleClickPrev}
          disabled={currentPage === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          className="text-2xl"
          onClick={handleClickNext}
          disabled={currentPage === totalPages - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
