import { myStack } from "./myStack.mjs";

const MAX = 100_000;

function solution(s){
    const st = new myStack(MAX);

    for (let i=0; i<s.length; i++) {
        if (st.isEmpty()) {
            st.myPush(s[i]);
            continue;
        }
        if (st.myPeek() === '(' && s[i] === ')') {
            st.myPop();
            continue;
        } else {
            st.myPush(s[i]);
        }
    }
    
    return st.isEmpty();
}