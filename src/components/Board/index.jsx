import Square from "~/components/Square";
import styles from "./Board.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";


const cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
      // eslint-disable-next-line react/prop-types
      const nextSquares = squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
    function handleClickNewGame() {
      onPlay(Array(9).fill(null));
      console.log("New Game");
    }
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        console.log(winner)
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }
       
      
    return ( 
        <>
           <div className="status">{status}</div>
           <div className={cx("board")}>
                <div className={cx("boardRow")}>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className={cx("boardRow")}>
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className={cx("boardRow")}>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
           </div>
           {/* <div className="game-info">
                <ol>{moves}</ol>
           </div> */}
           <Button onClick={handleClickNewGame}> 
                New Game
           </Button>
        </>
     );
}

export default Board;