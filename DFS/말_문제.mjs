/**
 * 
 * @param {Number[]} horses 
 * @param {Number} target 
 * @return 
 */
function logic(horses, target) {
    const res = [];
    horses.forEach((h)=> {
        dfs(h, 0, target, 0, res);
    });
    console.log(res);
}

function dfs(horse, pos, target, cnt, arr) {
    if (target < pos) {
        arr.push({ horse, v: -1 });
        return;
    } else if (target === pos) {
        arr.push({ horse, v: cnt });
        return;
    }

    dfs(horse, pos + horse, target, cnt + 1, arr);
}

logic([1, 2, 3], 10);