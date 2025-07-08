import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsCaraousal.css"; // Custom styling

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=("climate" AND "weather")&language=en&sortBy=publishedAt&pageSize=5&apiKey=aa1ba9b441414a9c9605076752b63697`
        );
        const data = await response.json();
        if (data.articles) {
          const filtered = data.articles.filter(
            (article) => article.urlToImage && article.description
          );
          setNewsData(filtered);
        }
      } catch (error) {
        console.error("Failed to fetch climate/weather news:", error);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="news-carousel">
      <h1> Today's News!</h1>
      <Slider {...settings}>
        {newsData.map((news, index) => (
          <div key={index} className="news-item">
            <h3 className="news-title">{news.title}</h3>
            <img src={news.urlToImage} alt={news.title} />
            <p className="news-description">
              {news.description.length > 300
                ? `${news.description.slice(0, 300)}...`
                : news.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
