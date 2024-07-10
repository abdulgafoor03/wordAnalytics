import { useState } from "react";
import Warning from "./Warning";
import {INSTAGRAM_MAX_CHARACTERS,FACEBOOK_MAX_CHARACTERS} from '../constants/constants';

export default function TextArea({ setStats }) {
  const [textValue, setTextValue] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    let text = e.target.value;
    if (text.includes("<script>")) {
      setWarning("You can't use <script> in your text.");
      text = text.replace("<script>", "");
    } else {
      setWarning("");
    }
    setTextValue(text);
    setStats({
        numberOfWords: text.split(" ")[0] === "" ? 0 : text.split(" ").length,
      numberOfCharacters: text.length,
      instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
      facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    });
  };
  return (
    <section className="textarea">
      <textarea
        className="textarea"
        spellCheck="false"
        placeholder="Enter your text"
        onChange={handleChange}
        value={textValue}
      />
      <Warning warningText={warning} />
    </section>
  );
}
