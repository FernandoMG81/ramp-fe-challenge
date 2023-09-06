import { useEffect, useState } from "react";

const ctfURL =
  "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge";
const selectors =
  'code[data-class^="23"] > div[data-tag$="93"] > span[data-id*="21"] i';
export const Challenge = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [wordReveal, setWordReveal] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const api = async () => {
      const domText = await fetch(ctfURL).then((data) => data.text());
      const domHtml = new DOMParser().parseFromString(domText, "text/html");
      const validNodes = domHtml.querySelectorAll(selectors);
      let word = "";
      for (let val of validNodes) {
        word += val.getAttribute("value");
      }

      const wordReveal = await fetch(word).then((data) => data.text());

      console.log(wordReveal);
      setWordReveal(wordReveal);
      setIsLoading(false);
    };

    api();
  }, []);

  return {
    isLoading,
    wordReveal
  };
};
