// Mergesort alogrithm
export function mergeSort(arr, key, ascending = true) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), key, ascending);
    const right = mergeSort(arr.slice(mid), key, ascending);

    return merge(left, right, key, ascending);
}

function merge(left, right, key, ascending) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (ascending ? left[i][key] <= right[j][key] : left[i][key] >= right[j][key]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
// Hashmap function
export function createHashMap(data, key) {
    return new Map(data.map(item => [item[key], item]));
}