import React, { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ImLink } from "react-icons/im";
import Footer from "./Footer";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [cryptoDetails, setCryptoDetails] = useState(null);

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      try {
        const response = await axios.get(
          `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "8e23082461mshf1993898488ab39p1e7eb4jsn66e97630533f",
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            },
          }
        );
        setCryptoDetails(response.data);
      } catch (error) {
        console.error("Error fetching crypto details:", error);
      }
    };

    fetchCryptoDetails();
  }, [coinId]);

  if (!cryptoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="flex items-center justify-center  bg-slate-200  "
        style={{ minHeight: "100vh" }}
      >
        <div className="bg-white w-96 p-6 rounded-lg shadow-md mb-    ">
          <div className="flex items-center justify-between max-w-md border-spacing- border-2 p-2  ">
            <div className="flex space-x-2 ">
              <h2>{cryptoDetails.data.coin.rank}-</h2>
              <h2>{cryptoDetails.data.coin.name}</h2>
            </div>
            <img
              className="w-10"
              src={cryptoDetails.data.coin.iconUrl}
              alt=""
            />
          </div>
          <div className="grid grid-rows-2 gap-3 pt-4">
            <h2>Price: ${millify(cryptoDetails.data.coin.price)}</h2>
            <h2>Rank: {cryptoDetails.data.coin.rank}</h2>
            <h2>
              All Time High: $
              {millify(cryptoDetails.data.coin.allTimeHigh.price)}
            </h2>
            <h2>Daily Change: {cryptoDetails.data.coin.change}%</h2>
            <h2>MarketCap: ${millify(cryptoDetails.data.coin.marketCap)}</h2>
            <h3>Stability: {cryptoDetails.data.coin.tags[0]}</h3>
            <h2 className="">
              Description: {cryptoDetails.data.coin.description}
            </h2>
            <div className="flex justify-center items-center">
              <a href={cryptoDetails.data.coin.links[0].url}>
                <h2>Official Website </h2>
              </a>
              <ImLink></ImLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDetails;
