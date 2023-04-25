import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function CreateCard(emojiPart) {
  return (
    <Card
      key={emojiPart.id}
      emoji={emojiPart.emoji}
      name={emojiPart.name}
      meaning={emojiPart.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(CreateCard)}

        {/* 
     <dl className="dictionary">
          <Card 
          key = {emojipedia[0].key}
          emoji =  {emojipedia[0].emoji}
          name ={emojipedia[0].name} 
          meaning= {emojipedia[0].meaning}
           />
          <Card 
           key = {emojipedia.key}
           emoji =  {emojipedia.emoji}
           name ={emojipedia.name} 
           meaning= {emojipedia.meaning}   />
          <Card 
           key = {emojipedia.key}
           emoji =  {emojipedia.emoji}
           name ={emojipedia.name} 
           meaning= {emojipedia.meaning}   */}
      </dl>
    </div>
  );
}

export default App;
