function solution(N, stages) {
    // stg i의 실패율 = (stages에서 i의 개수) / (stages에서 i 이상의 개수)
    const m = new Map();
    
    for (let i=1; i<=N; i++) {
        const stayNum = stages.filter((s) => s === i).length;
        const clearNum = stages.filter((s) => s >= i).length;
        m.set(i, stayNum/clearNum);
    }
    
    return Array.from(m).sort((m, n) => n[1] - m[1]).map(([i, v]) => i);
}
