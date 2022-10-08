//css
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/words";

//components
import { StartScreen } from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord,setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters,setLetters] = useState([]);

const pickedWordAndCategory = () => {
  //Pega a categoria aleatoria
  const categories = Object.keys(words)
  const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
   console.log(category);
 
   // pega palavra aleatoria 

   const word = words[category][[Math.floor(Math.random() * words[category].length)]];
  console.log(word);

  return{word,category};
};

  //Iniciação do Jogo
  const startGame = () =>{
    //pegar as palavras e categorias 
   const {word,category} = pickedWordAndCategory();
// array de letras 

let wordLetters = word.split("");
wordLetters =  wordLetters.map((l) => l.toLowerCase());
console.log(wordLetters);
   console.log(word,category);
   //setar os status 
   setPickedWord(word);
   setPickedCategory(category)
   setLetters(letters)
    setGameStage(stages[1].name);
  }
  //Processamneto de Letra no input
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
  }
  //Reiniciar o Jogo 
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">

      {gameStage === "start" && <StartScreen  startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}  
    </div>
  );
}

export default App;
