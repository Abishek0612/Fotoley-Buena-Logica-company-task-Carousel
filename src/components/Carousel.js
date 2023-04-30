import React, { useEffect, useState } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";  
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "../styles/carousel.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const images = [
  {
    heading: "Technology",
    Name: "I am Jack",
    src: image1,
    alt: "Image 1",
    text: "Technology refers to the tools, techniques, methods, and processes used to create, develop, and improve products, services, and systems.",
  },
  {
    heading: "React",
    src: image2,
    alt: "Image 2",
    text: "React is an open-source JavaScript library used for building user interfaces.it also uses a virtual DOM which allows it to efficiently update the UI.",
  },
  {
    heading: "Information technology",
    src: image3,
    alt: "Image 3",
    text: "Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store and secure.",
  },
  {
    heading:'Software development',
    src: image4,
    alt: "Image 4",
    text: "Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setIndex((index + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index, isPlaying]);

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrevious = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handlePlayAndPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <div className="carousel">
        <div className="content">
          <h1>{images[index].heading}</h1>
          <img
            src={images[index].src}
            alt={images[index].alt}
            height="400px"
            width="400px"
          />
          <p className="para"> {images[index].text}</p>
          <br></br>

          {isPlaying ? (
            <PauseCircleIcon
              className="playpause"
              onClick={handlePlayAndPause}
            />
          ) : (
            <PlayCircleIcon className="btns" onClick={handlePlayAndPause} />
          )}
        </div>

        <div className="buttons">
          <SkipPreviousIcon className="btns" onClick={handlePrevious} />
          <SkipNextIcon className="btns" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
