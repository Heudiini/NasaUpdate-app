import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [explanation, setExplanation] = useState("");
  const [day, setDay] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=f3TvdRxWaet7RX6apchVkBPKnQeobXQoh8uNsRLV")
      //
      .then((response) => response.json())
      .then((data) => {
        setExplanation(data.explanation);
        setDay(data.date);
        setUrl(data.url);
        setTitle(data.title);
        setReady(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isReady) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>{title}</h1>
      <h4>{day}</h4>
      <div className="picDiv">
        <img alt="Nasa apod" width="100%" src={url} />
      </div>

      <p className="p">{explanation}</p>
      <footer>2022 coded by Heudiini</footer>
    </div>
  );
}

export default App;
