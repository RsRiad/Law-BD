import React from "react";

import LoadingCard from "./LoadingCard";
const LoadingContainer = () => {
  return (
    <div>
      <div className="container mx-auto mt-4 mb-12">
        <div className="text-center mx-auto max-w-2xl mt-20 mb-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            We Provide Best Medical Services
          </h1>
          <p className="text-sm text-gray-600 ">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 place-items-center">
          <LoadingCard
            image={"https://i.ibb.co/TxVzsfKP/image.png"}
            end={199}
          ></LoadingCard>
          <LoadingCard
            image={"https://i.ibb.co/KxsZ4WRk/image.png"}
            end={467}
          ></LoadingCard>
          <LoadingCard
            image={"https://i.ibb.co/bgD3kpfm/image.png"}
            end={1900}
          ></LoadingCard>
          <LoadingCard
            image={"https://i.ibb.co/84BsFNLF/image.png"}
            end={300}
          ></LoadingCard>
        </div>
      </div>
    </div>
  );
};

export default LoadingContainer;
