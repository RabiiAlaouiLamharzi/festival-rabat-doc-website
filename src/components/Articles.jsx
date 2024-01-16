import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import ArticleDetail from "../pages/ArticleDetail";
import { ARTICLES_TEXT } from "../constants/index.js";
import image from "../assets/articles_image.png";
import closeImage from '../assets/close.png';

const Articles = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [fetchedArticles, setFetchedArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://api.dash-aloui.net/api/article/shared-article");
        if (response.status === 200) {
          const data = await response.json();
          setFetchedArticles(data);
        } else {
          console.error("Error fetching articles. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
      
    };

    fetchArticles();
  }, []);

  const openArticleModal = (article) => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  const closeArticleModal = async () => {
    setSelectedArticle(null);
    setModalIsOpen(false);

    try {
      const response = await fetch("https://api.dash-aloui.net/api/article/shared-article");
      if (response.status === 200) {
        const data = await response.json();
        setFetchedArticles(data);
      } else {
        console.error("Error fetching articles. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }    
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section-news">
      <div className="container">
        <div className="header-section">
          <h3 className="small-title">
            <span></span>
            {ARTICLES_TEXT.RECENT_NEWS_TITLE}
          </h3>
          <h2 className="title">{ARTICLES_TEXT.NEWS_ARTICLES_TITLE}</h2>
        </div>
        <Slider {...settings}>
        {fetchedArticles.map((article) => (
          <div className="single-news" key={article.id}>
            <a href="#" onClick={() => openArticleModal(article)}>
              <img
                src={image}
                style={{ height: "40%", objectFit: "cover" }}
                alt={`Article ${article.id}`}
              />
            </a>
            <div className="content">
              <span className="date">{article.updated_at.slice(0, 10)}</span>
              <h3 className="title">
                <a href="#" onClick={() => openArticleModal(article)}>
                  {article.title}
                </a>
              </h3>
              <p className="text">
                {article.body.length > 120
                  ? article.body.substring(0, 120) + "..."
                  : article.body}
              </p>
              <br />
              <span className="comments">
                {article.likes} {ARTICLES_TEXT.LIKE_TEXT}
              </span>{" "}
            </div>
          </div>
        ))}
        </Slider>

        {/* Article Detail Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeArticleModal}
          contentLabel="Article Detail"
          className="custom-modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 1)",
              zIndex: 1000,
            },
            content: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "none",
              background: "none",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: 0,
              outline: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <button
            onClick={closeArticleModal}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
              background: "none",
              border: "none",
              zIndex: 2000, // Set a high z-index value
            }}
          >
            <img
              src={closeImage}
              alt="Close"
              style={{
                width: "40px", // Adjust the width and height based on your image size
                height: "40px",
              }}
            />
          </button>
          {selectedArticle && <ArticleDetail article={selectedArticle} />}
        </Modal>
      </div>
    </section>
  );
};

// Define custom arrow components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <span>→</span>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <span>←</span>
  </div>
);

export default Articles;