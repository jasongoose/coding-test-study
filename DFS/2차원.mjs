// DFS 4방향으로 움직이면서 타켓을 찾는걸 해보겠습니다. 

/**
 * 1. 맵을 만들줄알아야한다.
 *  - 2차원 배열 
 *  - 2차원 배열의 공간에 값을 채워넣어야함. (갈수있는 공간, 갈수없는 공간(벽), 출발지점, 도착지점)
 * 2. DFS (재귀)
 *  - 탈출 조건을 만듬.
 *  - 반복하여 호출하는 코드를 작성
 *   > 한방향으로 움직이던걸 (4방향으로 움직이는 코드를 작성)
 * 
 */

// 문제 : N개의 0,1로 이뤄진 배열이 주워진다. 1이 벽이고 0이 갈 수 있는 공간이다.
// (0,0)에서 dfs를 이용하여 (N-1,N-1)로 도착할 수 있으면 1을 리턴하고, 아닐땐 0을 리턴하라

const input = {
    n: 5,
    m: [
      [0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0]
    ]
};

function solution(n, map) {
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];
    const visited = Array.from(Array(n), () => Array(n).fill(false));

    let ans = false;

    function dfs(posX = 0, posY = 0) {
        if (ans) {
            return;
        } else if (posX < 0 || posY < 0 || n <= posX || n <= posY) {
            return;
        } else if (map[posX][posY] === 1) {
            return;
        } else if (visited[posX][posY]) {
            return;
        } else if (posX === n - 1 && posY === n - 1) {
            ans = true;
            return;
        }

        for (let i = 0; i < 4; i++) {
            visited[posX][posY] = true;
            dfs(posX + dx[i], posY + dy[i]);
            visited[posX][posY] = false;
        }
    }

    dfs();
    return +ans;
}