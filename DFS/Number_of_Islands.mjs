function solution(grid) {
    const w = grid[0].length;
    const h = grid.length;
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];
    const visited = Array.from(Array(h), ()=> Array(w).fill(false));
    let ans = 0;

    function dfs(posX, posY) {
        if (posX < 0 || posY < 0 || h <= posX || w <= posY) {
            return;
        } else if (grid[posX][posY] === '0') {
            return;
        } else if (visited[posX][posY]) {
            return;
        }

        visited[posX][posY] = true;

        for (let i = 0; i < 4; i++) {
            dfs(posX + dx[i], posY + dy[i]);   
        }
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                ans++;
                dfs(i, j);
            }
        }
    }

    return ans;
}