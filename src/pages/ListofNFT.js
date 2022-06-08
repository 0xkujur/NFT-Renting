import React from "react";

const ListOfNFT = () => {
  const navStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "30px",
  };
  return (
    <div className="container mx-center pb-24">
      <h1 className="text-lg font-bold my-8"> NFT </h1>
      <div className="grid grid-cols-5 my-8 gap-24">

        <div>
          <img src="/images/nft.png" alt="NFT pictures" />
          <div className="text-center">
            <span className=" bg-gray-200 py-0.5 rounded-full text-lg px-1 ">
              BoredApe
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>1 ETH</span>
            <button style={navStyle}>Add</button>
          </div>
        </div>

        <div>
          <img src="/images/nft.png" alt="NFT pictures" />
          <div className="text-center">
          <span className=" bg-gray-200 py-0.5 rounded-full text-lg px-1 ">BoredApe</span>
          </div>
          

          <div className="flex justify-between items-center mt-4">
            <span>1 ETH</span>
            <button style={navStyle}>Add</button>
          </div>
        </div>


        <div>
          <img src="/images/nft.png" alt="NFT pictures" />
          <div className="text-center">
          <span className=" bg-gray-200 py-0.5 rounded-full text-lg px-1 ">kuzur</span>
          </div>
          

          <div className="flex justify-between items-center mt-4">
            <span>1 ETH</span>
            <button style={navStyle}>Add</button>
          </div>
        </div>
        <div>
          <img src="/images/nft.png" alt="NFT pictures" />
          <div className="text-center">
          <span className=" bg-gray-200 py-0.5 rounded-full text-lg px-1 ">BoredApe</span>
          </div>
          

          <div className="flex justify-between items-center mt-4">
            <span>1 ETH</span>
            <button style={navStyle}>Add</button>
          </div>
        </div>

        <div>
          <img src="/images/nft.png" alt="NFT pictures" />
          <div className="text-center">
          <span className=" bg-gray-200 py-0.5 rounded-full text-lg px-1 ">BoredApe</span>
          </div>
          

          <div className="flex justify-between items-center mt-4">
            <span>1 ETH</span>
            <button style={navStyle}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfNFT;
