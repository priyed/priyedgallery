
import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";
import useThemeSwitcher from "./components/useThemeSwitcher";
import "./darkmode.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const ThemeSwitcher = useThemeSwitcher();

  window.onscroll = function() {
    scrollFunction()
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("btn").style.display = "block";
    } else {
      document.getElementById("btn").style.display = "none";
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container">  
    <header>
    <h2>Priyed Gallery</h2>
     {ThemeSwitcher} 
    </header>
     
      <ImageSearch searchText={(text) => setTerm(text)}/>
      
      {!isLoading && images.length === 0 && <h1 className="no-result">No images found</h1>}

      {isLoading ? (
        <h1 className="loading-text">Loading...</h1>
      ) : (
        <div className="images-container">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
      <button onClick={topFunction} id="btn" className="btn">Top</button>
    </div>
  );
}

export default App;
