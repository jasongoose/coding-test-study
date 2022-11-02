function swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function permutation(arr, depth = 0) {
    if (depth === arr.length) {
        console.log(arr.slice());
        return;
    }

    for (let i = depth, { length } = arr; i < length; i++) {
        swap(depth, i, arr);
        permutation(arr, i + 1);
        swap(depth, i, arr);
    }
}

permutation([1,2,3]);