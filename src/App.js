import { useEffect, useState } from 'react';
import './App.css';
import { jsonLocalStorage } from './utils';
import { getCatImageWithText } from './api';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { MainCard } from './components/MainCard';
import { Favorites } from './components/Favorites';

function App() {
  const [counter, setCounter] = useState(() => {
    return jsonLocalStorage.getItem("counter");
  })
  const [catImageURL, setCatImageURL] = useState("")
  const [favoriteCats, setFavoriteCats] = useState(() => {
    return jsonLocalStorage.getItem("favoriteCats") || []
  })

  useEffect(() => async function setInitialImage() {
    const initialImage = await getCatImageWithText("Hello!");
    setCatImageURL(initialImage);
  }, [])

  const title = counter ? `${counter}번째 고양이 가라사대` : "고양이 가라사대";
  const isFavorite = favoriteCats.includes(catImageURL);

  async function updateMainCat(inputText) {
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    })

    const newImageURL = await getCatImageWithText(inputText);
    setCatImageURL(newImageURL);
  }

  function handleHeartClick() {
    const newFavoriteCats = [...favoriteCats, catImageURL];
    setFavoriteCats(newFavoriteCats);
    jsonLocalStorage.setItem("favoriteCats", newFavoriteCats);
  }

  return (
    <div className="App">
      <Title>{title}</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard imageURL={catImageURL} onHeartClick={handleHeartClick} isFavorite={isFavorite} />
      <Favorites favoriteCats={favoriteCats} />
    </div>
  );
}

export default App;
