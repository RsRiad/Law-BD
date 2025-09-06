import React, { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard";
import Button from "../Button/Button";
import LoadingContainer from "./LoadingContainer";

const LawyersContainer = ({ lawyers }) => {
  const [displayLawyers, setDisplayLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayLawyers(lawyers);
    } else {
      setDisplayLawyers(lawyers.slice(0, 6));
    }
  }, [lawyers, showAll]);

  return (
    <div>
      <div className="text-center mx-auto max-w-2xl mt-20 mb-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Our Top Lawyers
        </h1>
        <p className="text-sm text-gray-600">
          Get access to experienced and verified legal professionals across
          various specialties. Whether you need help with property, family,
          corporate, or criminal law — find trusted lawyers and book your
          consultation easily.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 container mx-auto">
        {displayLawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>

      <span className="flex justify-center mb-4">
        <Button
          onClick={() => {
            setShowAll((prev) => !prev);
            if (showAll) window.scrollTo(0, 700);
          }}
          label={
            <span className="relative">
              {showAll ? "View Less Lawyers" : "View All Lawyers"}
            </span>
          }
        />
      </span>
      <LoadingContainer></LoadingContainer>
    </div>
  );
};

export default LawyersContainer;
