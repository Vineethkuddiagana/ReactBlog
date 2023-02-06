import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";
function getEmoji(emojis) {
  return (
    <Emoji
      key={emojis.id}
      pic={emojis.emoji}
      name={emojis.name}
      description={emojis.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
