class AI{
    constructor(symbol){
        this.symbol = symbol;
    }

    isGameOver(board) {

        for (let i = 0; i < 3; i++) {
          if (board[3*i] === board[3*i+1] && board[3*i+1] === board[3*i+2] && board[3*i] !== null) {
            return true;
          }
          if (board[i] === board[3+i] && board[3+i] === board[6+i] && board[i] !== null) {
            return true;
          }
        }
        if (board[0] === board[4] && board[4] === board[8] && board[0] !== null) {
          return true;
        }
        if (board[2] === board[4] && board[4] === board[6] && board[2] !== null) {
          return true;
        }
      

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (board[3*i+j] === null) {
              return false;
            }
          }
        }
      
        return true;
      }
      
    evaluate(board) {

        for (let i = 0; i < 3; i++) {
          if (board[3*i] === board[3*i+1] && board[3*i+1] === board[3*i+2]) {
            if (board[3*i] === 'O') {
              return 10;
            } else if (board[3*i] === 'X') {
              return -10;
            }
          }
          if (board[i] === board[3+i] && board[3+i] === board[6+i]) {
            if (board[i] === 'O') {
              return 10;
            } else if (board[i] === 'X') {
              return -10;
            }
          }
        }
        if (board[0] === board[4] && board[4] === board[8]) {
          if (board[0] === 'O') {
            return 10;
          } else if (board[0] === 'X') {
            return -10;
          }
        }
        if (board[2] === board[4] && board[4] === board[6]) {
          if (board[2] === 'O') {
            return 10;
          } else if (board[2] === 'X') {
            return -10;
          }
        }
        return 0; 
      }

    minimax(board, depth, isMaximizing) {
    if (this.isGameOver(board)) {
      return this.evaluate(board);
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[3*i+j] === null) {
            board[3*i+j] = 'O';
            let score = this.minimax(board, depth + 1, false);
            board[3*i+j] = null;
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[3*i+j] === null) {
            board[3*i+j] = 'X';
            let score = this.minimax(board, depth + 1, true);
            board[3*i+j] = null;
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }
  
   findBestMove(board) {
    let bestMove = { row: -1, col: -1 };
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[3*i+j] === null) {
          board[3*i+j] = 'O';
          let score = this.minimax(board, 0, false);
          board[3*i+j] = null;
          if (score > bestScore) {
            bestScore = score;
            bestMove.row = i;
            bestMove.col = j;
          }
        }
      }
    }
    return 3*(bestMove.row) + bestMove.col;
  }

}

export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
        this.AI = new AI()

    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
        if(this.turn == "O")
        {
            const bestMove = this.AI.findBestMove(this.board);
            console.log(bestMove);

            this.board[bestMove] = "O";
            if (!this.findWinningCombination()) {
                this.nextTurn();
            }
        }

    }

    makeMove(i) {


        if (!this.isInProgress()) {
            return;
        }

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;

        if (!this.findWinningCombination()) {
            this.nextTurn();
        }
    }

    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }

        return null;
    }

    isInProgress() {
        return !this.findWinningCombination() && this.board.includes(null); 
    }
}