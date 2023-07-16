// Quick Sort Algorithm

async function quickSort() {
    document.getElementById("complexity").innerHTML = "Time Complexity : O(n^2)";
    document.getElementById("sorting-type").innerHTML = "Sorting Type : Quick Sort";
    await quickSortRecursive(0, numbers.length - 1);
}

async function quickSortRecursive(low, high) {
    if (low < high) {
        const pivotIndex = await partition(low, high);
        await quickSortRecursive(low, pivotIndex - 1);
        await quickSortRecursive(pivotIndex + 1, high);
    }
}

async function partition(low, high) {
    const pivot = numbers[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (numbers[j] < pivot) {
            i++;
            await swap(i, j);
        }
    }

    await swap(i + 1, high);
    return i + 1;
}