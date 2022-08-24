function solution(N, stages) {
    // stg i의 실패율 = (stages에서 i의 개수) / (stages에서 i 이상의 개수)
    const m = new Map();
    
    for (let i=1; i<=N; i++) {
        const stayN = stages.filter((s) => s === i).length;
        const clearN = stages.filter((s) => s >= i).length;
        m.set(i, stayN/clearN);
    }
    
    return Array.from(m).sort((m, n) => n[1] - m[1]).map((v) => v[0]);
}