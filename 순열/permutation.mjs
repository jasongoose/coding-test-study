function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

export function permutation(array, ans = [], target = array.length, deep = 0) {
    if (deep === target) {
        ans.push(array.slice(0, target));
        return;
    }
    for (let i=deep; i<array.length; i++) {
        swap(array, deep, i);
        permutation(array, ans, target, deep + 1);
        swap(array, deep, i);
    }
}

// const ans = [];
// const arr = Array(3).fill(null).map((_, i) => i + 1);

// permutation(arr, ans);
// console.log(ans);
