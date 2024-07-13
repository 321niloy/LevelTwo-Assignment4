/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      image: "https://i.ibb.co/0cSWZDZ/One.jpg",
      author: "LUNDEV",
      title: "Sports Hub",
      topic: "Playing Spots",
      description: "Lorem ipsum dolor ...",
    },
    {
      id: 2,
      image: "https://i.ibb.co/BPj8F67/Two.jpg",
      author: "Sports Hub",
      title: "LUNDEV",
      topic: "Playing Spots",
      description: "Lorem ipsum dolor ...",
    },
    {
      id: 3,
      image: "https://i.ibb.co/nnmjqYq/Three.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "Playing Spots",
      description: "Lorem ipsum dolor ...",
    },
    {
      id: 4,
      image: "https://i.ibb.co/CB5qzKr/Four.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "Playing Spots",
      description: "Lorem ipsum dolor ...",
    },
  ];

  const showSlider = (type: any) => {
    if (type === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlider("next");
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel z-10">
      <div className="list">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="arrows">
        <button
          id="prev"
          onClick={() => {
            showSlider("prev");
            console.log("currentIndex:", currentIndex);
          }}
        >
          &lt;
        </button>
        <button
          id="next"
          onClick={() => {
            showSlider("next");
            console.log("currentIndex:", currentIndex);
          }}
        >
          &gt;
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
