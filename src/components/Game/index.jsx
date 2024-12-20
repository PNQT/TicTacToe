import Board from "~/components/Board";
import { useState } from "react";
function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    return ( 
        <>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </>
     );
}

export default Game;