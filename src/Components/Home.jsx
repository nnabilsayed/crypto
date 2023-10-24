import { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  const [crypto, setCrypto] = useState([]);
  const url = "https://coinranking1.p.rapidapi.com/coins";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, {
          headers: {
            "X-RapidAPI-Key":
              "8e23082461mshf1993898488ab39p1e7eb4jsn66e97630533f",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        });
        setCrypto(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-200">
      <div className="grid grid-cols-4 gap-1 p-10 ">
        {crypto.data &&
          crypto.data.coins &&
          crypto.data.coins.map((items) => (
            <div
              className=" flex flex-col bg-white rounded-lg p-6 shadow-md transition duration-200 hover:scale-20 hover:bg-blue-400"
              key={items.uuid}
            >
              <Link to={`/crypto/${items.uuid}`}>
                <div className="flex items-center justify-between max-w-md border-spacing-0 border-1">
                  <div className="flex space-x-2">
                    <h2>{items.rank}-</h2>
                    <h2>{items.name}</h2>
                  </div>
                  <img className="w-10" src={items.iconUrl} alt="" />
                </div>
                <div className="grid grid-rows-2 gap-3 pt-8">
                  <h2>Price: ${millify(items.price)}</h2>
                  <h2>Rank: {items.rank}</h2>
                  <h2>Daily Change: {millify(items.change)}%</h2>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
