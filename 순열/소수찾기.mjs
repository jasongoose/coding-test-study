function getNums () {
    return Array(99).fill(null).map((_, i) => i + 2);
}

function getPrimeNumbers (nums) {
    const check = [...nums];

    for (let i=0; i<nums.length; i++) {
        for (let j=i; j<check.length; j+=nums[i]) {
            if (j === i && check[j] !== -1) {
                continue;
            }
            check[j] = -1;
        }
    }
    // here prime code
    
    return check.filter((c)=> c !== -1);
}

console.log(
    getPrimeNumbers(
        getNums()
    ),
    // [2,3,5,7,11,13, ... 97]
)