import { myStack } from "./myStack.mjs";

const MAX = 100;

function solution(progresses, speeds) {
    /**
     * 기능별로 완성되기까지 걸릴 시간들을 배열로 정리
     * n번째 기능이 배포되려면 앞에 0~(n-1) 기능들이 모두 배포되어야 함
     * n번째 기능이 배포될 때, 배포되는 기능의 개수 = 1 + n번째 기능의 배포일보다 작은 작업시간을 가진 후위 작업들
     */
    const st = new myStack(MAX);
    const deploy = progresses.map((p, i) => Math.ceil((100-p)/speeds[i]));
    const ans = [];
    let cnt = 0;
    let std = 0;

    st.myPush(deploy[0]);
    cnt = 1;
    std = deploy[0];

    for (let i=1; i<deploy.length; i++) {
        if (std >= deploy[i]) {
            st.myPush(deploy[i]);
            cnt++;
            continue;
        }
        while(!st.isEmpty()) {
            st.myPop();
        }
        ans.push(cnt);
        st.myPush(deploy[i]);
        cnt = 1;
        std = deploy[i];
    }

    return [...ans, cnt]; 
}