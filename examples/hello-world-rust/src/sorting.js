export function sortRandomArray(limit) {
    if (limit == 0 || limit == 1) {
        return 0.;
    }

    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr.push(Math.random() * Number.MAX_SAFE_INTEGER);
    }

    const start = performance.now();
    bubbleSort(arr);
    const end = performance.now();

    if (validateSort(arr)) {
        return end - start;
    }

    return -1.
};

const validateSort = (arr) => {
    const arrSizeSafe = arr.length;
    if (arrSizeSafe == 0) {
        return true
    }

    for (let i = 0; i < arrSizeSafe; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
}

const bubbleSort = (arr) => {
    const arrSize = arr.length;
    const arrSizeSafe = arr.length - 1;
    if (arrSizeSafe == 0) {
        return;
    }

    for (let i = 0; i < arrSize; i++) {
        for (let j = 0; j < arrSizeSafe; j++) {
            if (arr[j] > arr[j+1]) {
                //This is cool
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}