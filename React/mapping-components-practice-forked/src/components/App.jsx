import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(detail) {
  return (
    <Entry
      key={detail.id}
      emoji={detail.emoji}
      name={detail.name}
      meaning={detail.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)};</dl>
    </div>
  );
}

export default App;
