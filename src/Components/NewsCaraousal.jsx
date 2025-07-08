import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsCaraousal.css"; // Custom styling

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);

  const GNEWS_API_KEY = "88f54fc81dbbe7ad1462c6a4de9800d7"; // 👈 Replace with your actual key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=climate+weather&lang=en&sortby=publishedAt&token=${GNEWS_API_KEY}`
        );
        const data = await response.json();
        if (data.articles) {
          const filtered = data.articles.filter(
            (article) => article.image && article.description
          );
          setNewsData(filtered);
        }
      } catch (error) {
        console.error("❌ Failed to fetch GNews data:", error);
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
      <h1>Today's News!</h1>
      <Slider {...settings}>
        {newsData.map((news, index) => (
          <div key={index} className="news-item">
            <h3 className="news-title">{news.title}</h3>
            <img src={news.image} alt={news.title} />
            <p className="news-description">
              {news.description.length > 300
                ? `${news.description.slice(0, 300)}...`
                : news.description}
            </p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              🔗 Read more
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
