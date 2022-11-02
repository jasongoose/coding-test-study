function solution(candidates, target) {
    const ans = [];
    
    function sth_dfs(currPos = 0, accSum = 0, cmb = []) {
        if (accSum === target) {
            ans.push(cmb);
            return;
        }
        
        for (let i = currPos, { length } = candidates; i < length; i++) {
            if (target < accSum) continue;
            sth_dfs(i, accSum + candidates[i], [...cmb, candidates[i]]);
        }
    }
    
    sth_dfs();
    return ans;
};