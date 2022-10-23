function solution(board, word) {
  const [rowCnt, colCnt] = [board.length, board[0].length];
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  let ans = false;

  const visited = Array.from(Array(rowCnt), () => Array(colCnt).fill(false));

  function dfs(posX, posY, strLeft) {
    if (ans) {
      return;
    } else if (strLeft === "") {
      ans = true;
      return;
    } else if (posX < 0 || posY < 0 || rowCnt <= posX || colCnt <= posY) {
      return;
    } else if (visited[posX][posY]) {
      return;
    } else if (!strLeft.startsWith(board[posX][posY])) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      visited[posX][posY] = true;
      dfs(
        posX + dx[i],
        posY + dy[i],
        strLeft.length === 1 ? "" : strLeft.slice(1)
      );
      visited[posX][posY] = false;
    }
  }

  for (let r = 0; r < rowCnt; r++) {
    for (let c = 0; c < colCnt; c++) {
      dfs(r, c, word);
    }
  }

  return ans;
}
