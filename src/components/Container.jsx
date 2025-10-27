import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import { useState } from "react";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants.js";

function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
