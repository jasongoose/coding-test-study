function bs(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[left] === target) {
            return left;
        } else if (arr[right] === target) {
            return right;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[right] === target ? right : -1;
}

console.log(
    bs([1,2,3,4,5,6], 2)
);