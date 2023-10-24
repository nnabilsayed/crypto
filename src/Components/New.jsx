import axios from "axios";
import { useState, useEffect } from "react";
import millify from "millify";
import Footer from "./Footer";
const News = () => {
  const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key":
              "8e23082461mshf1993898488ab39p1e7eb4jsn66e97630533f",
            "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
          },
        });

        setNews(response.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="bg-slate-200">
      <div className="grid grid-cols-4 gap-1 p-10">
        {news.map((article) => (
          <div
            className="flex flex-col bg-white rounded-lg p-6 shadow-md transition duration-200 hover:scale-20 hover:bg-blue-400"
            key={article.id}
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-between max-w-md border-spacing-0 border-1">
                <h2>{article.source_name}</h2>
                <img
                  className="w-full h-40 object-cover mb-4"
                  src={article.thumbnail}
                  alt=""
                />
              </div>
              <div className="grid grid-rows-2 gap-3">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p>{article.summary}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
