import Stats from "./components/Stats";
import TextArea from "./components/TextArea";
import { useState } from "react";

export default function Container() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });
  return (
    <main className="container">
      <TextArea setStats={ setStats } />
      <Stats stats={stats} />
    </main>
  );
}
