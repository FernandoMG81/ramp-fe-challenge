import { useEffect, useState } from "react";
import { Challenge } from "./components/challenge";

export default function App() {
  const { wordReveal, isLoading } = Challenge();
  const [word, setWord] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isLoading && wordReveal[index]) {
      setTimeout(() => {
        setWord((w) => w.concat(wordReveal[index]));
        setIndex((index) => index + 1);
      }, 500);
    }
  }, [wordReveal, word, isLoading]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="App">
      <ul>
        {word.map((val, ind) => (
          <li key={ind}>{val}</li>
        ))}
      </ul>
    </div>
  );
}
